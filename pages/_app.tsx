import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { NextPage } from 'next'
import { CSSProperties, PropsWithChildren, ReactElement, ReactNode, Ref, RefObject, useRef } from 'react'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Resume from './resume'
import * as Portfolio from './portfolio'

// (page: ReactElement) => ReactNode
export interface LayoutProps {
  content1?: () => ReactNode,
  content2?: () => ReactNode,
  backgroundContainsFlowLayout: boolean,
  classes?: string,
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
  
  return <Layout layout={Component.layout} />
}


function Layout({
  layout,
}: {
  layout: undefined | LayoutProps,
}) {
  const animClassesRef = useRef<HTMLDivElement>(null)
  
  return <div
    // this div holds classes/styles managed by react render
    className={`
      ${layout?.backgroundContainsFlowLayout ? styles.bkgdFlow : styles.bkgdNoFlow}
      ${layout?.classes}
    `}
    style={{ '--angle': `${layout?.skewAngle}deg` } as CSSProperties}
  >
    {/* this div holds classes managed by us through ref */}
    <div ref={animClassesRef}>
      <Nav animRef={animClassesRef} />
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





function Nav({ animRef }: { animRef: RefObject<HTMLDivElement> }) {
  const router = useRouter()
  // TODO per-page cleanup function
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
        // TODO this depends on which page we come from (cleanup function)
        classes?.add(styles.contentCollapsed)
        
        setTimeout(() => {
          router.push('/').then(() => {
            // bring back height and shadow later
            setTimeout(() => {
              classes?.remove(styles.bkgdNoShadow, styles.contentCollapsed)
            }, 500)
            // bring back opacity later
            setTimeout(() => {
              classes?.remove(styles.contentHidden)
            }, 700)
          })
        }, 200)
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
        // TODO paint-less (composite only) shadow anim for smooth frames
        classes?.add(styles.bkgdNoShadow)
        // opacity immediately
        classes?.add(styles.contentHidden)
        setTimeout(() => {
          // don't transition here
          classes?.add(styles.instantContentCollapsed, styles.contentCollapsed)
          router.push('/portfolio').then(() => {
            // wait for skew angle transition
            setTimeout(() => {
              // bring back height (transition here) and shadow
              classes?.remove(styles.instantContentCollapsed, styles.contentCollapsed)
              // TODO wait until collapse ends (layout anim) before shadow/overlay opacity anim?
              classes?.remove(styles.bkgdNoShadow)
              
              // wait for collapse transition, bring back opacity
              setTimeout(() => {
                classes?.remove(styles.contentHidden)
              }, 500)
            }, 400)
          })
        }, 200)
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
        // only when opacity is done, (anticipate a little?)
        setTimeout(() => {
          
          // shadow
          classes?.add(styles.bkgdNoShadow)
          // TODO paint-less (composite only) shadow anim for smooth frames
          
          // collapse transition (make sure it's not instant)
          classes?.remove(styles.instantContentCollapsed)
          // TODO wait until shadow (composite anim) ends before collapse (layout anim)?
          classes?.add(styles.contentCollapsed)
          
          // only when collapse is done,
          setTimeout(() => {
            // navigate to change react-managed classes
            router.push('/resume').then(()=>{
              console.log('resume')
              
              // wait for skew angle transition
              setTimeout(() => {
                // bring back shadow
                classes?.remove(styles.bkgdNoShadow)
                // bring back opacity later
                setTimeout(() => {
                  classes?.remove(styles.contentHidden)
                }, 200)
              }, 400)
            })
          }, 500)
        }, 200)
      }}
    >Resume</Link>
  </nav>
}
