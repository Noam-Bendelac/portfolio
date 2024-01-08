


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
    summary: 'Software engineer and UX designer looking for a full time role.',
    portfolio: Link('noambendelac.xyz'),
    github: Link('github.com/Noam-Bendelac'),
    linkedin: Link('linkedin.com/in/noam-bendelac'),
  },
  education: [{
    school: 'Virginia Tech',
    location: 'Blacksburg, VA',
    degrees: [
      {
        name: 'M.Eng. Computer Science',
        details: 'Human Computer Interaction concentration, GPA 3.81',
        time: '2023',
      },
      {
        name: 'B.S. Computer Science',
        details: 'Human Computer Interaction minor, GPA 3.90',
        time: '2022',
      },
    ],
    coursework: [
      'Human Computer Interaction',
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
            'Utilized modern Android architecture, Kotlin Flow/Coroutines, Dagger, and RxJava',
            'Collaborated with client and in-house designers to refine requirements and implement designs',
            // 'Participated in scrum process and code review of my pull requests',
            'Contributed to an app with 10 million downloads for a Fortune 500 media company',
          ],
        },
      ],
    },
    {
      organization: 'Virginia Tech',
      roles: [{
        title: 'Research Assistant',
        time: 'Oct 2019\u2014Sep 2021',
        github: 'https://github.com/echo-lab/collab-playlist',
        details: [
          'Sole developer on full-stack web app for an HCI study on collaborative playlists UX',
          'Created a React frontend and a Node.js REST API using MongoDB that interfaces with Spotify API',
          'Tracked issues and 4000 lines of code in GitHub to report progress to client',
          'Designed variants of UI to compare improvements to asynchronous user communication',
        ],
      }],
    },
    {
      organization: 'Salesforce Inc',
      roles: [{
        title: 'Software Engineering Intern',
        time: 'May\u2014Aug 2020',
        details: [
          'Added in-app tabs auto-closing in a legacy in-house pre-ES6 JS framework',
          'Reduced memory usage by 35%; Improved tab-closing UX while meeting accessibility standards',
        ],
      }],
    },
    {
      organization: 'CACI International Inc',
      roles: [{
        title: 'DSP Software Intern',
        time: 'May\u2014Aug 2019',
        details: [
          'Created a Python UI to control a DSP system for a customer sales demo',
          'Translated DSP engineers\' technical jargon to client-friendly user flow',
        ],
      }],
    },
  ],
  projects: [
    {
      name: 'ISE Engineering Department Website UX Research and Redesign',
      time: '2023',
      details: [
        'Ran competitive analysis and faculty focus groups; Redesigned info architecture and wireframes',
        // 'Presented research and solutions to the department\'s designer at their request to jumpstart their work',
        'Department\'s full time designer used my research and potential solutions to jumpstart their work',
      ],
    },
    {
      name: 'Classroom Captain: Interactive 3D Diagrams for Hybrid Classrooms',
      time: '2022',
      github: 'https://github.com/Noam-Bendelac/classroom-captain',
      details: [
        'Designed and built 3D diagrams for STEM subjects using Figma, Node, React, and Three.js',
        'Created an HTTP and WebSocket server to give teachers and students multiplayer control'
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
      github: 'https://github.com/Noam-Bendelac/spatial-audio-designer',
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
      ['Typescript', 'Javascript', 'Python', 'Java', 'C', 'C++', 'Kotlin', 'Go', 'Rust', 'C#', 'HTML/CSS'],
      ['React', 'SQL', 'Next.js', 'Android', 'Django', 'Cloud', 'OpenGL', 'Three.js', 'Node.js'],
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

