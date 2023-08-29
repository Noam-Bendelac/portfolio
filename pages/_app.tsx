import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { NextPage } from 'next'
import { CSSProperties, PropsWithChildren, ReactElement, ReactNode } from 'react'
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
  children,
  layout,
}: PropsWithChildren & { layout?: LayoutProps }) {
  return <>
    <Nav />
    <div 
      className={`
        ${styles.wrapper2}
        ${layout?.backgroundContainsFlowLayout ? styles.bkgdFlow : styles.bkgdNoFlow}
      `}
      style={{ '--angle': `${layout?.skewAngle}deg` } as CSSProperties}
    >
      <div className={styles.wrapper1}>
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





function Nav() {
  const { pathname } = useRouter()
  return <nav className={styles.nav}>
    <h1><Link
      href="/"
      className={pathname === '/' ? styles.active : styles.inactive}
    >Noam Bendelac</Link></h1>
    <Link
      href="/portfolio"
      className={pathname === '/portfolio' ? styles.active : styles.inactive}
    >Portfolio</Link>
    <Link
      href="/resume"
      className={pathname === '/resume' ? styles.active : styles.inactive}
    >Resume</Link>
  </nav>
}
