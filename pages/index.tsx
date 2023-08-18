import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav>
        <h1><Link href="/">Noam Bendelac</Link></h1>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
      </nav>
      
    </div>
  )
}
