import Image from 'next/image'
import { NextPageWithLayout } from './_app'
import styles from '../styles/Portfolio.module.css'

import { portfolio } from '../data/portfolio'
import { Link } from '../data/resume'


const Portfolio: NextPageWithLayout = () => {
  return <>
    {/* <Home></Home> */}
    
  </>
}

export default Portfolio

Portfolio.layout = {
  content1: Content1,
  content2: Content2,
  backgroundContainsFlowLayout: true,
  classes: styles.portfolioVisible,
  skewAngle: 10,
}

export const numItems = portfolio.length

export function Content1() {
  return <Item index={0} />
}
export function Content2() {
  return <Item index={0} />
}



export function Item({ index }: { index: number }) {
  const data = portfolio[index]
  return <div className={styles.itemWrapper}>
    <div className={styles.item}>
      <Image
        src={data.image}
        alt={data.imageAlt}
        className={styles.img}
        priority
      />
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


// TODO
const A = ({ link }: { link: Link }) => (
  <a
    className={styles.a}
    target="_blank" rel="noopener noreferrer"
    href={link.href}
  >{link.display}</a>
)
