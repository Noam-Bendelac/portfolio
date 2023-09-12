import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { NextPage } from 'next'
import { CSSProperties, PropsWithChildren, ReactElement, ReactNode, Ref, RefObject, useRef } from 'react'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

// (page: ReactElement) => ReactNode
export interface LayoutProps {
  content1?: () => ReactNode,
  content2?: () => ReactNode,
  backgroundContainsFlowLayout: boolean,
  skewAngle: number,
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: LayoutProps
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // MyApp remains mounted even as different `Component`s get mounted and unmounted
  // Component.getLayout
  
  return <Layout layout={Component.layout}>
    <Component {...pageProps} />
  </Layout>
}


function Layout({
  layout,
  children,
}: PropsWithChildren<{
  layout: undefined | LayoutProps,
}>) {
  const animClassesRef = useRef<HTMLDivElement>(null)
  
  return <>
    <Nav animRef={animClassesRef} />
    <div 
      className={`
        ${styles.wrapper2}
        ${layout?.backgroundContainsFlowLayout ? styles.bkgdFlow : styles.bkgdNoFlow}
      `}
      style={{ '--angle': `${layout?.skewAngle}deg` } as CSSProperties}
    >
      <div ref={animClassesRef} className={styles.wrapper1}>
        <div className={styles.block}>
          {layout?.content1?.()}
          <div className={styles.backgroundWrapper}>
            <div className={styles.background} />
          </div>
        </div>
        <div className={styles.block}>
          {layout?.content2?.()}
          <div className={styles.backgroundWrapper}>
            <div className={styles.background} />
          </div>
        </div>
        { layout?.backgroundContainsFlowLayout && children }
      </div>
    </div>
    { (layout?.backgroundContainsFlowLayout !== true) && children }
  </>
}





function Nav({ animRef }: { animRef: RefObject<HTMLDivElement> }) {
  const router = useRouter()
  return <nav className={styles.nav}>
    <h1><a
      href="/"
      className={router.pathname === '/' ? styles.active : styles.inactive}
      onClick={(e) => {
        e.preventDefault()
        // trigger animations
        const classes = animRef.current?.classList
        // shadow immediately
        classes?.add(styles.bkgdNoShadow)
        // opacity immediately
        classes?.add(styles.contentHidden)
        // prepare portfolio? //TODO to start collapsed
        // (transition later but not here) 
        classes?.add(styles.contentCollapsed)
        // bring back height and shadow later
        setTimeout(() => {
          classes?.remove(styles.bkgdNoShadow, styles.contentCollapsed)
        }, 500)
        // bring back opacity later
        setTimeout(() => {
          classes?.remove(styles.contentHidden)
        }, 700)
        setTimeout(() => {
          router.push('/')
        }, 100)
      }}
    >Noam Bendelac</a></h1>
    <Link
      href="/portfolio"
      className={router.pathname === '/portfolio' ? styles.active : styles.inactive}
      onClick={(e) => {
        e.preventDefault()
        // trigger animations
        const classes = animRef.current?.classList
        // shadow immediately
        classes?.add(styles.bkgdNoShadow)
        // opacity immediately
        classes?.add(styles.contentHidden)
        // prepare portfolio? //TODO to start collapsed
        // (transition later but not here) 
        classes?.add(styles.contentCollapsed)
        // bring back height (transition here) and shadow later
        setTimeout(() => {
          classes?.remove(styles.bkgdNoShadow, styles.contentCollapsed)
        }, 500)
        // bring back opacity later
        setTimeout(() => {
          classes?.remove(styles.contentHidden)
        }, 700)
        setTimeout(() => {
          router.push('/portfolio')
        }, 100)
      }}
    >Portfolio</Link>
    <Link
      href="/resume"
      className={router.pathname === '/resume' ? styles.active : styles.inactive}
      onClick={(e) => {
        e.preventDefault()
        // trigger animations
        const classes = animRef.current?.classList
        // opacity immediately
        classes?.add(styles.contentHidden)
        // only when opacity is done,
        setTimeout(() => {
          // shadow
          classes?.add(styles.bkgdNoShadow)
          // collapse transition
          classes?.add(styles.contentCollapsed)
          // bring back shadow later
          setTimeout(() => {
            classes?.remove(styles.bkgdNoShadow)
          }, 500)
          // bring back opacity later
          setTimeout(() => {
            classes?.remove(styles.contentHidden)
          }, 700)
          
          // setTimeout(() => {
          router.push('/resume').then(()=>{console.log('resume')})
          // }, 200)
        }, 100)
      }}
    >Resume</Link>
  </nav>
}
