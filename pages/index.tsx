import Head from 'next/head'
import styles from '../styles/Home.module.css'
import layoutStyles from '../styles/Layout.module.css'
import { Link, NextPageWithLayout } from './_app'
import { delay, mod } from '../util'
import github from '../images/github-mark.svg'
import email from '../images/email-svgrepo-com.svg'
import linkedin from '../images/linkedin-112.svg'
import Image from 'next/image'
import { PropsWithChildren, ReactNode, RefObject, memo, useEffect, useRef } from 'react'
import Portfolio from './portfolio'
import Resume from './resume'

const Home: NextPageWithLayout<{
  animRef: RefObject<HTMLDivElement>,
}> = ({
  animRef,
}) => {
  return <HomeMemo animRef={animRef} />
}

const HomeMemo = memo(({
  animRef,
}: {
  animRef: RefObject<HTMLDivElement>,
}) => {
  const indexRef = useRef<number>(0)
  const roleArrayRef = useRef<(HTMLSpanElement | null)[]>([])
  const skillArrayRef = useRef<(HTMLSpanElement | null)[]>([])
  
  useEffect(() => {
    const update = () => {
      const curr = indexRef.current
      const prev1 = mod(indexRef.current - 1, roleArrayRef.current.length)
      const prev2 = mod(indexRef.current - 2, roleArrayRef.current.length)
      
      roleArrayRef.current[curr]?.classList.add(styles.active)
      roleArrayRef.current[prev1]?.classList.remove(styles.active)
      roleArrayRef.current[prev1]?.classList.add(styles.down)
      roleArrayRef.current[prev2]?.classList.remove(styles.down)
      
      skillArrayRef.current[curr]?.classList.add(styles.active)
      skillArrayRef.current[prev1]?.classList.remove(styles.active)
      skillArrayRef.current[prev1]?.classList.add(styles.down)
      skillArrayRef.current[prev2]?.classList.remove(styles.down)
    }
    update()
    setInterval(() => {
      indexRef.current = mod(indexRef.current + 1, roleArrayRef.current.length)
      update()
    }, 4000)
  }, [])
  
  return (
    <div className={styles.home}>
      <div className={styles.social}>
        <div>
          <A href="https://github.com/Noam-Bendelac">
            <Image
              src={github}
              alt="GitHub"
              className={styles.github}
              priority
            />
          </A>
          <A href="mailto:bendelac.noam@gmail.com">
            <Image
              src={email}
              alt="email"
              className={styles.email}
            />
          </A>
          <A href="https://linkedin.com/in/noam-bendelac/">
            <Image
              src={linkedin}
              alt="LinkedIn"
              className={styles.linkedin}
            />
          </A>
        </div>
      </div>
      <div className={styles.name}>
        <div><h1>Noam Bendelac</h1></div>
      </div>
      <div className={styles.nav}>
        <div>
          <nav>
            <Link
              layoutProps={Portfolio.layoutProps}
              cleanupLayout={Home.layoutProps.cleanupLayout}
              animRef={animRef}
            >Portfolio</Link>
            <Link
              layoutProps={Resume.layoutProps}
              cleanupLayout={Home.layoutProps.cleanupLayout}
              animRef={animRef}
            >Resume</Link>
          </nav>
        </div>
      </div>
      <div className={styles.intro}>
        <div>
          <p>
            Hello! I'm a <span className={styles.carousel}>
              <span className={styles.placeholder}>graphics programmer</span>
              <span className={styles.background}></span>
              <CarouselSpans children={[
                'software engineer',
                'design technologist',
                'UX researcher',
                'graphics programmer',
                'UX designer',
              ]} arrayRef={roleArrayRef} className={styles.skill} />
            </span> with a focus on <span className={styles.carousel}>
              <span className={styles.placeholder}>collaboration</span>
              <span className={styles.background}></span>
              <CarouselSpans children={[
                'performance',
                'collaboration',
                'empathy',
                'immersion',
                'intuitiveness',
              ]} arrayRef={skillArrayRef} className={styles.skill} />
            </span>.
          </p>
          <p>
            I earned my Master's and my Bachelor's in Computer
            Science and Human-Computer Interaction from
            Virginia Tech.
          </p>
          <p>
            I've worked on design and software development at
            WillowTree, Salesforce, and CACI, and I'm eager to
            find my next endeavor. If you're hiring for a role
            starting in fall 2023, get in touch!
          </p>
        </div>
      </div>
      
    </div>
  )
})

export default Home

Home.layoutProps = {
  pathname: '/',
  backgroundContainsFlowLayout: false,
  skewAngle: 0,
  classes: `${layoutStyles.bkgdNoShadow} ${layoutStyles.navHidden}`,
  head: () => <Head>
    <title key="title">Noam Bendelac</title>
    <meta key="og:title" property="og:title" content="Noam Bendelac" />
  </Head>,
  async initialSetupLayout(classList) {
    // TODO instant contentHidden
    classList.add(layoutStyles.contentHidden)
    // TODO instant no shadow (when/if shadow opacity is animated)
    classList.add(layoutStyles.bkgdNoShadow)
    
    // TODO bkgd colors
    await delay(100)
    
    classList.add(styles.homeVisible)
    classList.remove(layoutStyles.contentHidden)
  },
  async setupLayout(classList, router) {
    // navigate to change react-managed layout classes
    await router.push(Home.layoutProps.pathname)
    // wait for skew angle transition
    await delay(450)
    
    // this SHOULD have worked by just being in the classes array above,
    // but on resume->home i need to add it here instead?
    classList.add(styles.homeVisible)
    classList.remove(layoutStyles.contentHidden)
  },
  async cleanupLayout(classList) {
    classList.add(layoutStyles.contentHidden)
    await delay(400)
    
    classList.remove(styles.homeVisible)
    return
  },
}




function CarouselSpans({
  children,
  className,
  arrayRef,
}: {
  children: ReactNode[],
  className: string,
  arrayRef: RefObject<(HTMLSpanElement | null)[]>,
}) {
  return children.map((ch, i) =>
    <span
      className={className}
      key={i}
      ref={ref => {
        if (arrayRef.current) arrayRef.current[i] = ref
      }}
    >
      {ch}
    </span>
  )
}



// TODO
const A = ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <a
    className={styles.a}
    target="_blank" rel="noopener noreferrer"
    href={href}
  >{children}</a>
)

