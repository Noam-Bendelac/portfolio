import Image from 'next/image'
import { NextPageWithLayout } from './_app'
import styles from '../styles/Portfolio.module.css'

import { portfolio } from '../data/portfolio'
import { Link } from '../data/resume'
import Head from 'next/head'


const Portfolio: NextPageWithLayout = () => {
  return <>
    {/* <Home></Home> */}
    
  </>
}

export default Portfolio

Portfolio.layout = {
  backgroundContainsFlowLayout: true,
  classes: styles.portfolioVisible,
  skewAngle: 10,
  head: () => <Head>
    <title key="title">Portfolio - Noam Bendelac</title>
    <meta key="og:title" property="og:title" content="Portfolio" />
  </Head>,
}

export const numItems = portfolio.length



export function Item({ index }: { index: number }) {
  const data = portfolio[index]
  return <div className={styles.itemWrapper}>
    <div className={`
      ${styles.item}
      ${index === 0 ? styles.first
      : index === numItems - 1 ? styles.last : '' }
    `}>
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
      <div className={styles.text}>
        <h2>
          {data.title}
        </h2>
        <div className={styles.description}>
          {data.description.map((desc, i) =>
            <p key={i}>
              {desc.map(t =>
                typeof t === 'string'
                ? t
                : <A link={t}/>
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


// TODO
const A = ({ link }: { link: Link }) => (
  <a
    className={styles.a}
    target="_blank" rel="noopener noreferrer"
    href={link.href}
  >{link.display}</a>
)
