import Image from 'next/image'
import { NextPageWithLayout } from './_app'
import styles from '../styles/Portfolio.module.css'
import layoutStyles from '../styles/Layout.module.css'

import { portfolio } from '../data/portfolio'
import Head from 'next/head'
import { delay } from '../util'
import github from '../images/github-mark.svg'
import { A } from '../components/A'



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
  return <div className={styles.itemWrapper}>
    <div className={`
      ${styles.item}
      ${index === 0 ? styles.first
      : index === numItems - 1 ? styles.last
      : '' }
    `}>
      <div className={styles.textTop}>
        <div className={styles.topLine}>
          <h2>
            {data.title}
          </h2>
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
      { data.video && <Video
          src={data.video}
          className={styles.video}
        />
      }
      { data.image && <Image
          src={data.image}
          alt={data.imageAlt}
          className={styles.img}
          priority
        />
      }
      <div className={styles.textBottom}>
        <div className={styles.description}>
          {data.description.map((desc, i) =>
            <p key={i}>
              {desc.map((t, j) =>
                <span key={j}>{
                  typeof t === 'string'
                  ? <span>{t}</span>
                  : <A href={t.href} className={styles.a}>
                      {t.display}
                    </A>
                }</span>
              )}
            </p>
          )}
        </div>
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


