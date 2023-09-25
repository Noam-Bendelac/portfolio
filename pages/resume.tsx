import { PropsWithChildren, memo } from 'react'
import { Link, resume as data } from '../data/resume'
import styles from '../styles/Resume.module.css'
import layoutStyles from '../styles/Layout.module.css'
import { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { delay } from '../util'


// export async function getStaticProps() {
//   return { props: { data: resume } }
// }

const PRINT: string = 'false'

// export default function Resume({ data }: { data: typeof resume }) {

const Resume: NextPageWithLayout = () => {
  return <ResumeMemo />
}

const ResumeMemo = memo(() => {
  return <div className={
    PRINT == 'true'
    ? 'print'
    : 'web'
  }>
    <article className={styles.resume}>
      <header className={styles.header}>
        <div className={styles.name}>
          <h1>{data.header.name}</h1>
          <p className={styles.details}>
            <span>{data.header.email}</span>
            <span>{data.header.address}</span>
          </p>
        </div>
        <div className={styles.links}>
          
          <p><A link={data.header.portfolio} /></p>
          <p><A link={data.header.github} /></p>
          <p><A link={data.header.linkedin} /></p>
        </div>
      </header>
      
      <Section heading='Summary'>
        <p>{data.summary}</p>
      </Section>
      <Section heading='Education'>
        {data.education.map((education, i) => <div key={i}>
          <p><b>{education.school}</b>, {education.location}</p>
          <UlBullets>
            {education.degrees.map((degree, i) =>
              <UlBullets.Li key={i}>
                <b>{degree.name}</b>, {degree.details}
                <time className={styles.time}>{degree.time}</time>
              </UlBullets.Li>
            )}
            <UlBullets.Li className={styles.coursework}>
              <UlInline>
                <span className={styles.label}>Coursework:</span>
                {education.coursework.map((course, i) =>
                  <UlInline.LI key={i}>{course}</UlInline.LI>
                )}
              </UlInline>
            </UlBullets.Li>
          </UlBullets>
        </div>)}
      </Section>
      
      <Section heading='Experience'>
        <div className={styles.projectList}>
          {data.experience.map((experience, i) =>
            <section key={i}>
              <p className={styles.headline}>
                <span className={styles.name}>{experience.organization}</span>
                <span>, {experience.role}</span>
                <time className={styles.time}>
                  { Array.isArray(experience.time)
                  ? experience.time.join('\u2014')
                  : experience.time }
                </time>
              </p>
              <UlBullets>
                {experience.details.map((detail, i) =>
                  <UlBullets.Li key={i}>{detail}</UlBullets.Li>
                )}
              </UlBullets>
            </section>
          )}
        </div>
      </Section>
      
      <Section heading='Projects'>
        <div className={styles.projectList}>
          {data.projects.map((project, i) =>
            <section key={i}>
              <p className={styles.headline}>
                <span className={styles.name}>{project.name}</span>
                <time className={styles.time}>{project.time}</time>
              </p>
              <UlBullets>
                {project.details.map((detail, i) =>
                  <UlBullets.Li key={i}>{detail}</UlBullets.Li>
                )}
              </UlBullets>
            </section>
          )}
        </div>
      </Section>
      
      <Section heading='Skills'>
        <div className={styles.skillsLists}>
          {data.skills.lists.map((list, i) =>
            <UlInline key={i}>
              {list.map((skill, i) =>
                <UlInline.LI key={i}>{skill}</UlInline.LI>
              )}
            </UlInline>
          )}
        </div>
        <p>{data.skills.languages}</p>
      </Section>
      
      {/* <Section heading='Activities & Awards'>
        {resume.awards.map(award =>
          <p>{award.name}<Time>{award.time}</Time></p>
        )}
      </Section> */}
    </article>
  </div>
})

export default Resume

Resume.layoutProps = {
  backgroundContainsFlowLayout: false,
  classes: styles.resumeVisible,
  skewAngle: -10,
  head: () => <Head>
    <title key="title">Resume - Noam Bendelac</title>
    <meta key="og:title" property="og:title" content="Resume" />
  </Head>,
  async setupLayout(classList, router) {
    // navigate to change react-managed layout classes
    await router.push('/resume')
    // wait for skew angle transition
    await delay(450)
    
    // change manual classes:
    // bring back shadow
    classList.remove(layoutStyles.bkgdNoShadow)
    // bring back opacity later
    // TODO i think this delay can be removed if shadow is a composite anim
    await delay(200)
    classList.remove(layoutStyles.contentHidden)
  },
  async cleanupLayout(classList) {
    // shadow immediately
    // TODO paint-less (composite only) shadow anim for smooth frames
    classList.add(layoutStyles.bkgdNoShadow)
    // opacity immediately
    classList.add(layoutStyles.contentHidden)
    // after waiting for animation,
    // cede control to next page's setup function
    return await delay(300)
  },
}




const A = ({ link }: { link: Link }) => (
  <a
    className={styles.a}
    target="_blank" rel="noopener noreferrer"
    href={link.href}
  >{link.display}</a>
)

// export const Text = ({ text }: { text: string | (string | Link)[] }) =>
// 	typeof text === 'string'
// 	? <>{text}</>
// 	: <>{text.map(t =>
// 			typeof t === 'string'
// 			? t
// 			: <A link={t} />
// 		)}</>




const Section = ({
  heading,
  children,
}: PropsWithChildren<{
  heading: string,
}>) => (
  <section className={styles.section}>
    <h2>{heading}</h2>
    <div className={styles.content}>{children}</div>
  </section>
)



const UlBullets = ({ children }: PropsWithChildren) => (
  <ul className={styles.ulBullets}>
    {children}
  </ul>
)
UlBullets.Li = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <li className={`${styles.liBullet} ${className ?? ''}`}>
    <span>
      {children}
    </span>
  </li>
)
const UlInline = ({ children }: PropsWithChildren) => (
  <ul className={styles.ulInline}>
    {children}
  </ul>
)
UlInline.LI = ({ children }: PropsWithChildren) => (
  <li className={styles.liInline}>
    {children}
  </li>
)

