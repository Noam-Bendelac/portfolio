import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { NextPage } from 'next'
import { CSSProperties, PropsWithChildren, ReactNode, RefObject, useRef, useState } from 'react'
import styles from '../styles/Layout.module.css'
import { NextRouter, useRouter } from 'next/router'
import Resume from './resume'
import * as Portfolio from './portfolio'
import Head from 'next/head'
import Home from '.'

// (page: ReactElement) => ReactNode
export interface LayoutProps {
  backgroundContainsFlowLayout: boolean,
  classes?: string,
  skewAngle: number,
  head: () => ReactNode,
  setupLayout: (classList: DOMTokenList) => Promise<void>,
  cleanupLayout: (classList: DOMTokenList) => Promise<void>,
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layoutProps?: LayoutProps
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // MyApp remains mounted even as different `Component`s get mounted and unmounted
  // Component.getLayout
  
  return Component.layoutProps
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
  const router = useRouter()
  
  return <nav className={styles.nav}>
    <h1><Link
      href='/'
      cleanupLayout={cleanupLayout}
      setupLayout={Home.layoutProps?.setupLayout}
      animRef={animRef}
      router={router}
    >Noam Bendelac</Link></h1>
    <Link
      href='/portfolio'
      cleanupLayout={cleanupLayout}
      setupLayout={Portfolio.default.layoutProps?.setupLayout}
      animRef={animRef}
      router={router}
    >Portfolio</Link>
    <Link
      href='/resume'
      cleanupLayout={cleanupLayout}
      setupLayout={Resume.layoutProps?.setupLayout}
      animRef={animRef}
      router={router}
    >Resume</Link>
  </nav>
}


function Link({
  href,
  children,
  cleanupLayout,
  setupLayout,
  router,
  animRef,
}: PropsWithChildren<{
  href: string,
  cleanupLayout: LayoutProps['cleanupLayout'],
  setupLayout: LayoutProps['setupLayout'] | undefined,
  router: NextRouter,
  animRef: RefObject<HTMLDivElement>,
}>) {
  return <a
    href={href}
    className={router.pathname === href ? styles.active : styles.inactive}
    onClick={(e) => {
      e.preventDefault()
      
      // to trigger animations through the manually-managed classes
      const classList = animRef.current?.classList
      
      // cleanup current page then setup new one
      if (classList) (async () => {
        await cleanupLayout(classList)
        // navigate to change react-managed layout classes
        await router.push(href)
        await setupLayout?.(classList)
      })()
    }}
  >{children}</a>
}

