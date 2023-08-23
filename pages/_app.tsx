import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { NextPage } from 'next'
import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import styles from '../styles/Layout.module.css'

// (page: ReactElement) => ReactNode
export interface LayoutProps {
  content1?: () => ReactNode,
  content2?: () => ReactNode,
  backgroundContainsFlowLayout?: boolean
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
    <div className={styles.wrapper2}>
      <div className={styles.wrapper1}>
        <div className={styles.block}>
          {layout?.content1?.()}
          <div className={styles.background} />
        </div>
        <div className={styles.block}>
          {layout?.content2?.()}
          <div className={styles.background} />
        </div>
        { layout?.backgroundContainsFlowLayout && children }
      </div>
    </div>
    { (layout?.backgroundContainsFlowLayout !== true) && children }
  </>
}
