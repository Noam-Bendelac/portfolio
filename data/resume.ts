


export type Link = {
  href: string,
  display: string,
}
export const Link = (display: string): Link => ({
  href: `https://${display}`,
  display
})

export const construct = <T extends any> (t: T) => t

export const resume = {
  header: {
    name: 'Noam Bendelac',
    contact: [
      'bendelac.noam@gmail.com',
      'Chantilly, VA 20151',
    ],
    portfolio: Link('noambendelac.xyz'),
    github: Link('github.com/Noam-Bendelac'),
    linkedin: Link('linkedin.com/in/noam-bendelac'),
  },
  summary: 'I am a software engineer and UX researcher who excels at rapid prototyping and production-ready code. I love working with other developers and designers to create seamless user experiences.',
  education: [{
    school: 'Virginia Tech',
    location: 'Blacksburg, VA',
    degrees: [
      {
        name: 'M.Eng. Computer Science',
        details: 'Human Computer Interaction concentration, GPA 3.81',
        time: 'May 2023',
      },
      {
        name: 'B.S. Computer Science',
        details: 'Human Computer Interaction minor, GPA 3.90',
        time: 'May 2022',
      },
    ],
    coursework: [
      'Human Computer Systems',
      'Human Centered Design',
      'Virtual Reality',
      'Information Visualization',
      'Usability Engineering',
      'Computer Graphics',
      'Operating Systems',
    ],
  }],
  experience: [
    {
      organization: 'WillowTree',
      roles: [
        {
          title: 'Android Software Engineering Intern',
          time: 'Jun\u2014Aug 2022',
        },
        {
          title: 'Android Software Engineering Intern',
          time: 'May\u2014Aug 2021',
          details: [
            'Implemented new features, architecture refactorings, and accessibility and performance fixes',
            'Collaborated with client and in-house designers to refine requirements and implement designs',
            'Communicated with agile teams of test engineers, product architects, and product owners',
            'Utilized modern Android architecture, Kotlin Flow/Coroutines, Dagger, and RxJava',
            'Contributed to an app with 10 million downloads for a Fortune 500 media company',
          ],
        },
      ],
    },
    {
      organization: 'Virginia Tech',
      roles: [{
        title: 'Undergraduate Research Assistant',
        time: 'Oct 2019\u2014Sep 2021',
        details: [
          'Developed a full-stack web app for an HCI study on improving collaborative playlists UX',
          'Designed REST API and user interface to best facilitate user communication',
        ],
      }],
    },
    {
      organization: 'Salesforce Inc',
      roles: [{
        title: 'Software Engineering Intern',
        time: 'May\u2014Aug 2020',
        details: [
          'Collaborated closely with another intern on in-app tabs auto-close feature',
          'Reduced memory usage by 35% and improved tab-closing UX while maintaining accessibility',
        ],
      }],
    },
    {
      organization: 'CACI International Inc',
      roles: [{
        title: 'Digital Signal Processing Intern',
        time: 'May\u2014Aug 2019',
        details: [
          'Created a UI to control a DSP system for a customer demo',
          'Communicated with DSP engineers to translate technical information to client-friendly UX',
        ],
      }],
    },
  ],
  projects: [
    {
      name: 'ISE Department Website UX Research and Redesign',
      time: '2023',
      details: [
        'Ran competitive analysis and focus groups with faculty; Redesigned info arch and wireframes',
        'Provided the department\'s designer with deliverables of research and solutions at their request',
      ],
    },
    {
      name: 'Classroom Captain: Interactive 3D Diagrams for Hybrid Classrooms',
      time: '2022',
      details: [
        'Designed and built an educational tool with teacher-student multiplayer control using websockets'
      ],
    },
    {
      name: 'Amateur Filmmaking Application UX Research, Design, and Evaluation',
      time: '2022',
      details: [
        'Conducted UX interviews and observations of filmmakers to study workflow and user needs',
        'Iterated low-fi wireframes and a high-fi prototype to improve production workflow',
        'Ran a Wizard of Oz user test on a data- and decision-centric user flow that Figma couldn\'t support',
      ],
    },
    {
      name: 'Spatial Audio Design Editor',
      time: '2022',
      details: [
        'Designed and implemented a 3D spatial audio editor and visualizer using Three.js and shaders',
      ],
    },
    {
      name: 'Classmate Finder Google Forms Plugin',
      time: '2019',
      details: [
        'Volunteered to develop a Google Forms plugin that connects students in the same courses',
        'Helped my on-campus residence community make connections during the Covid-19 pandemic',
      ],
    },
  ],
  skills: {
    languages: 'Fluent in English and Hebrew',
    lists: [
      ['Typescript', 'Javascript', 'Python', 'Java', 'Go', 'C', 'C++', 'HTML/CSS', 'C#', 'Kotlin', 'Rust'],
      ['React', 'SQL', 'Android', 'Django', 'Next.js', 'Cloud', 'OpenGL', 'Three.js', 'Node.js'],
      ['Figma', 'Wireframing', 'Git', 'Agile', 'MIDI', 'DSP', 'Arduino', 'Analog circuits', '3D CAD'],
    ],
  },
  // awards: [
  //   // {
  //   // 	name: 'Dean\'s list',
  //   // 	time: '2018-2022',
  //   // },
  //   {
  //     name: 'Capstone industry sponsor award, 2nd place',
  //     time: '2022',
  //   },
  //   {
  //     name: 'Linguistics Club, officer',
  //     time: '2019-2020',
  //   },
  //   {
  //     name: 'School and regional science fair winner, state-level participant',
  //     time: '2016',
  //   },
  // ],
}

