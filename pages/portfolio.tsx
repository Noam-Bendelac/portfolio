import Image from 'next/image'
import { NextPageWithLayout } from './_app'
import styles from '../styles/Portfolio.module.css'
import layoutStyles from '../styles/Layout.module.css'

import { portfolio } from '../data/portfolio'
import Head from 'next/head'
import { delay } from '../util'
import github from '../images/github-mark.svg'
import { A } from '../components/A'
import { Paragraph } from '../components/Paragraph'
import { useEffect, useRef } from 'react'



const Portfolio: NextPageWithLayout = () => {
  return <>
    {/* <Home></Home> */}
    
  </>
}

export default Portfolio

Portfolio.layoutProps = {
  pathname: '/portfolio',
  backgroundContainsFlowLayout: true,
  classes: styles.portfolioVisible,
  skewAngle: 10,
  head: () => <Head>
    <title key="title">Portfolio - Noam Bendelac</title>
    <meta key="og:title" property="og:title" content="Portfolio" />
  </Head>,
  async setupLayout(classList, router) {
    // initialize content collapsed but without smooth transition
    classList.add(layoutStyles.instantContentCollapsed, layoutStyles.contentCollapsed)
    // navigate to change react-managed layout classes
    await router.push(Portfolio.layoutProps.pathname)
    // wait for skew angle transition
    await delay(450)
    
    // bring back height (transition this time) and shadow
    classList.remove(layoutStyles.instantContentCollapsed, layoutStyles.contentCollapsed)
    // wait for collapse transition
    await delay(450)
    
    // TODO if shadow/overlay becomes opacity anim, should we still do it after
    // collapse ends (layout anim)?
    // alternatively, should we wait before contentHidden?
    classList.remove(layoutStyles.bkgdNoShadow)
    // for now just wait bc rendering shadow/overlay makes us skip a frame
    await delay(200)
    
    // bring back opacity
    classList.remove(layoutStyles.contentHidden)
  },
  async cleanupLayout(classList) {
    // scroll up immediately
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // estimate scroll duration,
    // TODO intersection observer?
    await delay(300)
    
    // then opacity
    classList.add(layoutStyles.contentHidden)
    // shadow
    classList.add(layoutStyles.bkgdNoShadow)
    // TODO paint-less (composite only) shadow anim for smooth frames
    // TODO when shadow is still visible, does it slow down collapse? (despite being opacity anim)
    // should it coincide with collapse or contentHidden?
    
    // wait until opacity is done
    await delay(300)
    
    
    // collapse transition (make sure it's not instant)
    classList.remove(layoutStyles.instantContentCollapsed)
    // TODO wait until shadow (composite anim) ends before collapse (layout anim)?
    classList.add(layoutStyles.contentCollapsed)
    
    // only when collapse is done,
    // cede control to next page's setup function
    return await delay(450)
  },
}

export const numItems = portfolio.length



export function Item({ index }: { index: number }) {
  const data = portfolio[index]
  const pageIdx = 0
  const mediaIdx = 0
  const page = data.pages[pageIdx]
  
  const scrollMeasureRef = useRef<HTMLDivElement>(null)
  // const itemRef = useRef<HTMLDivElement>(null)
  const visualContentRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handler = () => {
      const { top } = scrollMeasureRef.current!.getBoundingClientRect()
      // console.log('scroll', top)
      visualContentRef.current!.style.setProperty('top', `${34*Math.tanh(top/300)}px`)
      // itemRef.current!.style.setProperty('top', `${top/10}px`)
    }
    document.addEventListener('scroll', handler)
    return () => document.removeEventListener('scroll', handler)
  }, [])
  
  return <div className={styles.itemWrapper}>
    <div className={`
      ${styles.item}
      ${index === 0 ? styles.first
      : index === numItems - 1 ? styles.last
      : '' }
    `}>
      <div ref={scrollMeasureRef} id={data.hash} className={styles.linkTarget}></div>
      <div className={styles.textContainer}>
        <div className={styles.textTop}>
          <div className={styles.topLine}>
            <h2><a href={`#${data.hash}`}>
              {data.title}
            </a></h2>
            <div className={styles.links}>
              { data.links.pdf && <A
                href={data.links.pdf}
                className={styles.plaintext}
              >
                PDF
              </A> }
              { data.links.demo && <A
                href={data.links.demo}
                className={styles.plaintext}
              >
                DEMO
              </A> }
              { data.links.github && <A href={data.links.github}>
                <Image
                  src={github}
                  alt="GitHub Project"
                  className={styles.github}
                />
              </A> }
            </div>
          </div>
          { data.subtitle && <div>
            <h3>{data.subtitle}</h3>
          </div> }
        </div>
        <div className={styles.textBottom}>
          <div className={styles.description}>
            {page.description.map((desc, i) =>
              <p key={i}>
                <Paragraph linkClassName={styles.a}>{desc}</Paragraph>
              </p>
            )}
          </div>
        </div>
      </div>
      <div ref={visualContentRef} className={styles.visualContent}>
        { page.media[mediaIdx].type === 'image'
        ? <Image
            src={page.media[mediaIdx].src}
            alt={page.media[mediaIdx].alt}
            className={styles.img}
            priority
          />
        : <Video
            src={page.media[mediaIdx].src}
            className={styles.video}
          />
        }
      </div>
    </div>
  </div>
}


function Video({ src, className }: { src: string, className: string }) {
  return <iframe
    className={className}
    // TODO not hardcode values?
    width="560"
    height="315"
    src={src}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
}


