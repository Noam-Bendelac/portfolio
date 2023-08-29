import Image from 'next/image'
import Home from '.'
import { NextPageWithLayout } from './_app'
import styles from '../styles/Portfolio.module.css'

import audioCapstone from '../images/spatial audio top view 4.png'


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
  skewAngle: 10,
}


function Content1() {
  return <Block />
}
function Content2() {
  return <Block />
}



function Block({}) {
  return <div className={styles.block}>
    <Image
      src={audioCapstone}
      alt='Screenshot of colorful heatmap in spatial audio editor'
      className={styles.img}
    />
    <div className={styles.description}>
      <h2>
        Audio
      </h2>
      <p>
        
      </p>
    </div>
  </div>
}
