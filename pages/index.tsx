import Head from 'next/head'
import styles from '../styles/Home.module.css'
import layoutStyles from '../styles/Layout.module.css'
import { NextPageWithLayout } from './_app'
import { delay } from '../util'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      
      {/* <nav>
        <h1><Link href="/">Noam Bendelac</Link></h1>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
      </nav> */}
      
    </div>
  )
}

export default Home

Home.layoutProps = {
  backgroundContainsFlowLayout: false,
  skewAngle: 0,
  head: () => <Head>
    <title key="title">Noam Bendelac</title>
    <meta key="og:title" property="og:title" content="Noam Bendelac" />
  </Head>,
  async setupLayout(classList, router) {
    // navigate to change react-managed layout classes
    await router.push('/')
    // wait for skew angle transition
    await delay(400)
    
    classList.remove(layoutStyles.contentHidden)
  },
  async cleanupLayout(classList) {
    classList.add(layoutStyles.contentHidden)
    return await delay(200)
  },
}
