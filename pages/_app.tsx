import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { NextPage } from 'next'
import { CSSProperties, PropsWithChildren, ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import styles from '../styles/Layout.module.css'
import { NextRouter, useRouter } from 'next/router'
import Resume from './resume'
import * as Portfolio from './portfolio'
import Head from 'next/head'
import Home from '.'

// (page: ReactElement) => ReactNode
export interface LayoutProps {
  pathname: string,
  backgroundContainsFlowLayout: boolean,
  classes?: string,
  skewAngle: number,
  head: () => ReactNode,
  initialSetupLayout?: (classList: DOMTokenList) => Promise<void>,
  setupLayout: (classList: DOMTokenList, router: NextRouter) => Promise<void>,
  cleanupLayout: (classList: DOMTokenList) => Promise<void>,
}

// components defined by me definitely have layoutProps
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layoutProps: LayoutProps
}

// but the component being rendered might not be defined by me
// e.g. 404 page
type AppPropsWithLayout = AppProps & {
  Component: AppProps['Component'] | NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // MyApp remains mounted even as different `Component`s get mounted and unmounted
  // Component.getLayout
  
  return 'layoutProps' in Component
    ? <Layout layoutProps={Component.layoutProps} />
    : <Component {...pageProps} />
}


function Layout({
  layoutProps,
}: {
  layoutProps: LayoutProps,
}) {
  const animClassesRef = useRef<HTMLDivElement>(null)
  
  const { pathname } = useRouter()
  
  useEffect(() => {
    const classes = animClassesRef.current?.classList
    classes && layoutProps.initialSetupLayout?.(classes)
  }, [])
  
  return <div
    // this div holds classes/styles managed by react render
    className={`
      ${layoutProps.backgroundContainsFlowLayout ? styles.bkgdFlow : styles.bkgdNoFlow}
      ${layoutProps.classes}
    `}
    style={{ '--angle': `${layoutProps.skewAngle}deg` } as CSSProperties}
  >
    {/* this div holds classes managed by us through ref */}
    <div ref={animClassesRef}>
      <Head>
        {/* default title and description can be overridden */}
        <title key="title">Noam Bendelac</title>
        <meta key="og:title" property="og:title" content="Noam Bendelac" />
        
        <meta key="description" name="description" content="I am a software engineer and UX researcher who excels at rapid prototyping and production-ready code. I love working with other developers and designers to create seamless user experiences." />
        <meta key="og:description" property="og:description" content="I am a software engineer and UX researcher who excels at rapid prototyping and production-ready code. I love working with other developers and designers to create seamless user experiences." />
        
        <meta key="og:url" property="og:url" content={`https://noambendelac.xyz${pathname}`} />
        <meta key="og:site_name" property="og:site_name" content="Noam Bendelac" />
        <meta key="keywords" property="keywords" content="Noam Bendelac portfolio resume" />
      </Head>
      {/* page override */}
      { layoutProps.head() }
      <Nav animRef={animClassesRef} cleanupLayout={layoutProps.cleanupLayout} />
      <div className={styles.wrapper2}>
        <div className={styles.wrapper1}>
          {/* TODO move array.map to Portfolio comp? and pass this div structure
          through a function (item) => <div>{item}</div> */}
          { [...Array(Portfolio.numItems)].map((_, i) =>
            <div key={i} className={styles.block}>
              <Portfolio.Item index={i} />
              <div className={styles.backgroundWrapper}>
                <div className={styles.background} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Home animRef={animClassesRef} />
      <Resume />
    </div>
  </div>
}





function Nav({
  animRef,
  cleanupLayout,
}: {
  animRef: RefObject<HTMLDivElement>,
  cleanupLayout: LayoutProps['cleanupLayout'],
}) {
  return <nav className={styles.nav}>
    <h1><Link
      layoutProps={Home.layoutProps}
      cleanupLayout={cleanupLayout}
      animRef={animRef}
    >Noam Bendelac</Link></h1>
    <Link
      layoutProps={Portfolio.default.layoutProps}
      cleanupLayout={cleanupLayout}
      animRef={animRef}
    >Portfolio</Link>
    <Link
      layoutProps={Resume.layoutProps}
      cleanupLayout={cleanupLayout}
      animRef={animRef}
    >Resume</Link>
  </nav>
}


export function Link({
  layoutProps,
  cleanupLayout,
  animRef,
  children,
}: PropsWithChildren<{
  layoutProps: LayoutProps,
  cleanupLayout: LayoutProps['cleanupLayout'],
  animRef: RefObject<HTMLDivElement>,
}>) {
  const router = useRouter()
  return <a
    href={layoutProps.pathname}
    className={router.pathname === layoutProps.pathname
      ? styles.active
      : styles.inactive
    }
    onClick={(e) => {
      e.preventDefault()
      
      // don't do the animations if we click on the link to the current page
      if (router.pathname === layoutProps.pathname) return;
      
      // to trigger animations through the manually-managed classes
      const classList = animRef.current?.classList
      
      // cleanup current page then setup new one
      if (classList) (async () => {
        await cleanupLayout(classList)
        await layoutProps.setupLayout?.(classList, router)
      })()
    }}
  >{children}</a>
}

