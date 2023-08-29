import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <nav>
        <h1><Link href="/">Noam Bendelac</Link></h1>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
      </nav> */}
      
    </div>
  )
}

export default Home

Home.layout = {
  backgroundContainsFlowLayout: false,
  skewAngle: 0,
}
