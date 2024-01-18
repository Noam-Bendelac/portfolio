import { Key, PropsWithChildren, ReactNode, memo } from 'react'
import { Project, resume as data } from '../data/resume'
import styles from '../styles/Resume.module.css'
import layoutStyles from '../styles/Layout.module.css'
import { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { delay } from '../util'
import github from '../images/github-mark.svg'
import { A } from '../components/A'
import Image from 'next/image'
import { Paragraph } from '../components/Paragraph'


// export async function getStaticProps() {
//   return { props: { data: resume } }
// }

// export default function Resume({ data }: { data: typeof resume }) {

const Resume: NextPageWithLayout = () => {
  return <ResumeMemo />
}

const ResumeMemo = memo(() => {
  return <article className={styles.resume}>
    <header className={styles.header}>
      <div className={styles.name}>
        <h1>{data.header.name}</h1>
        <p className={styles.details}>
          { data.header.contact.map((c, i) => <span key={i}>{c}</span>) }
        </p>
        <p className={styles.summary}>{data.header.summary}</p>
      </div>
      <div className={styles.links}>
        
        <p><A href={data.header.portfolio.href} className={styles.a}>
          {data.header.portfolio.display}
        </A></p>
        <p><A href={data.header.github.href} className={styles.a}>
          {data.header.github.display}
        </A></p>
        <p><A href={data.header.linkedin.href} className={styles.a}>
          {data.header.linkedin.display}
        </A></p>
      </div>
    </header>
    
    {/* <Section heading='Summary'>
      <p>{data.summary}</p>
    </Section> */}
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
            {experience.roles.map((role, i) => <div key={i}>
              <p className={styles.headline}>
                <span className={styles.name}><b>{experience.organization}</b></span>
                <span>, {role.title}</span>
                { 'github' in role && <A
                  href={role.github}
                  className={styles.githubContainer}
                >
                  <Image
                    src={github}
                    alt="GitHub Project"
                    className={styles.github}
                  />
                </A> }
                <time className={styles.time}>
                  { role.time }
                </time>
              </p>
              { role.details && <UlBullets>
                {role.details.map((detail, i) =>
                  <UlBullets.Li key={i}>
                    <Paragraph emphasisClassName={styles.keyword}>{detail}</Paragraph>
                  </UlBullets.Li>
                )}
              </UlBullets> }
            </div>)}
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
    </Section>
    
    <Section heading='Software Projects'>
      <div className={styles.projectList}>
        {data.projects.software.map((project, i) =>
          <Project project={project} key={i} />
        )}
      </div>
    </Section>
    
    <Section heading={<>Design<br/>Projects</>}>
      <div className={styles.projectList}>
        {data.projects.design.map((project, i) =>
          <Project project={project} key={i} />
        )}
      </div>
    </Section>
    
    <Section heading='Misc Projects'>
      <div className={styles.projectList}>
        {data.projects.other.map((project, i) =>
          <Project project={project} key={i} />
        )}
      </div>
    </Section>
    
    <Section heading='Extra-curriculars' className={styles.smallHeading}>
      <div className={styles.projectList}>
        {data.extracurriculars.map((activity, i) =>
          <Project project={activity} key={i} />
        )}
      </div>
    </Section>
    
    <Section heading='Languages' className={styles.smallHeading}>
      {data.languages}
    </Section>
    
    <Section heading='Publications' className={styles.smallHeading}>
      {data.publications.map((pub, i) =>
        <p key={i}><Paragraph>{pub}</Paragraph></p>
      )}
    </Section>
    
    {/* <Section heading='Activities & Awards'>
      {resume.awards.map(award =>
        <p>{award.name}<Time>{award.time}</Time></p>
      )}
    </Section> */}
  </article>
})

export default Resume

Resume.layoutProps = {
  pathname: '/resume',
  backgroundContainsFlowLayout: false,
  classes: styles.resumeVisible,
  skewAngle: -10,
  head: () => <Head>
    <title key="title">Resume - Noam Bendelac</title>
    <meta key="og:title" property="og:title" content="Resume" />
  </Head>,
  async setupLayout(classList, router) {
    // navigate to change react-managed layout classes
    await router.push(Resume.layoutProps.pathname)
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








const Section = ({
  heading,
  className,
  children,
}: PropsWithChildren<{
  heading: ReactNode,
  className?: string | undefined,
}>) => (
  <section className={`${styles.section} ${className}`}>
    <h2>{heading}</h2>
    <div className={styles.content}>{children}</div>
  </section>
)


const Project = ({
  project,
}: {
  project: Project,
}) => (
  <section className={styles.item}>
    <p className={styles.headline}>
      <span className={styles.name}><b>{project.name}</b></span>
      { project.github && <A
        href={project.github}
        className={styles.githubContainer}
      >
        <Image
          src={github}
          alt="GitHub Project"
          className={styles.github}
        />
      </A> }
      <time className={styles.time}>{project.time}</time>
    </p>
    <UlBullets>
      {project.details.map((detail, i) =>
        <UlBullets.Li key={i}>
          <Paragraph emphasisClassName={styles.keyword}>{detail}</Paragraph>
        </UlBullets.Li>
      )}
    </UlBullets>
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

