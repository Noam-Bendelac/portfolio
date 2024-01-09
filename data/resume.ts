import { Emphasis, Link, paragraph } from '../components/Paragraph'





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
            paragraph`Implemented new features, ${Emphasis('architecture')} refactorings, and ${Emphasis('accessibility')} and ${Emphasis('performance')} fixes`,
            paragraph`Utilized modern ${Emphasis('Android')} architecture, ${Emphasis('Kotlin')} Flow/Coroutines, Dagger, and RxJava`,
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
          paragraph`Sole developer on ${Emphasis('full-stack')} web app for an HCI study on collaborative playlists UX`,
          paragraph`Created a ${Emphasis('React')}/${Emphasis('Typescript')} frontend and a ${Emphasis('Node.js')} ${Emphasis('REST')} API using ${Emphasis('MongoDB')} and Spotify API`,
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
          paragraph`Added in-app tabs auto-closing in a legacy in-house pre-ES6 ${Emphasis('Javascript')} framework`,
          paragraph`Reduced memory usage by 35%; Improved tab-closing ${Emphasis('UX')} while meeting ${Emphasis('accessibility')} standards`,
        ],
      }],
    },
    {
      organization: 'CACI International Inc',
      roles: [{
        title: 'DSP Software Intern',
        time: 'May\u2014Aug 2019',
        details: [
          paragraph`Created a ${Emphasis('Python')} UI to control a DSP system for a customer sales demo`,
          'Translated DSP engineers\' technical jargon to client-friendly user flow',
        ],
      }],
    },
  ],
  projects: [
    {
      name: 'noambendelac.xyz Web Portfolio and Resume',
      time: '2023',
      github: 'https://github.com/Noam-Bendelac/portfolio',
      details: [
        paragraph`Implemented this resume and my portfolio in ${Emphasis('Next.js')} and designed in ${Emphasis('Figma')}`,
        paragraph`Optimized ${Emphasis('CSS animations')} by using only compositor properties and separating from ${Emphasis('React')} renders`,
      ],
    },
    {
      name: 'Piano Performance Visualization - Team Leader',
      time: '2023',
      github: 'https://github.com/Noam-Bendelac/piano-viz',
      details: [
        paragraph`Led design and development of a visualization of piano pitch, rhythm, loudness, and tempo`,
        paragraph`Modified Needleman-Wunsch ${Emphasis('algorithm')} to match played and expected notes with error tolerance`,
        paragraph`Optimized ${Emphasis('performance')}-critical compute and ${Emphasis('Three.js')} state updates to not be slowed by ${Emphasis('React')}`,
      ],
    },
    {
      name: 'Third Person Perspective in Virtual Reality',
      time: '2023',
      github: 'https://github.com/Noam-Bendelac/3rd-person-vr',
      details: [
        paragraph`Prototyped control schemes and game mechanics for 3rd person exocentric ${Emphasis('VR')} in ${Emphasis('Unity')} and ${Emphasis('C#')}`,
        paragraph`Ran informal ${Emphasis('user study')} on 3rd person VR design challenges like cybersickness and clipping`
      ],
    },
    {
      name: 'Classroom Captain: Interactive 3D Diagrams for Hybrid Classrooms - Team Leader',
      time: '2022',
      github: 'https://github.com/Noam-Bendelac/classroom-captain',
      details: [
        paragraph`Designed and built a STEM education app in ${Emphasis('Figma')}, ${Emphasis('Node')}, ${Emphasis('Typescript')}, ${Emphasis('React')}, and ${Emphasis('Three.js')}`,
        paragraph`Created 3D diagrams for physics and calculus, and ${Emphasis('procedural geometry')} of user-defined math`,
        paragraph`Developed a ${Emphasis('full-stack')} ${Emphasis('HTTP')} and ${Emphasis('WebSocket')} server to let teachers and students interact`,
      ],
    },
    {
      name: 'Spatial Audio Design Editor - Team Leader',
      time: '2022',
      github: 'https://github.com/Noam-Bendelac/spatial-audio-designer',
      details: [
        paragraph`Designed and implemented a 3D spatial audio editor using ${Emphasis('React')}, ${Emphasis('Typescript')}, and ${Emphasis('Three.js')}`,
        paragraph`Visualized spatial audio fields heatmap following the Web Audio standard in a custom ${Emphasis('GLSL shader')}`,
        'Helped teach teammates React and Three.js. Won Capstone Industry Sponsor Award',
      ],
    },
    {
      name: 'ISE Engineering Department Website UX Research and Redesign',
      time: '2023',
      details: [
        paragraph`Ran ${Emphasis('competitive analysis')} and faculty ${Emphasis('focus groups')}; Redesigned ${Emphasis('info architecture')} and ${Emphasis('wireframes')}`,
        // 'Presented research and solutions to the department\'s designer at their request to jumpstart their work',
        'Department\'s full time designer used my research and potential solutions to jumpstart their work',
      ],
    },
    {
      name: 'Amateur Filmmaking App UX Research, Design, and Evaluation - Team Leader',
      time: '2022',
      details: [
        paragraph`Conducted ${Emphasis('UX interviews')} and ${Emphasis('observations')} of filmmakers to study workflow and user needs`,
        paragraph`Iterated ${Emphasis('low-fi wireframes')} and ${Emphasis('high-fi prototype')} of improved film schedule optimization workflow`,
        paragraph`Ran a ${Emphasis('Wizard of Oz')} user test on a data- and decision-centric user flow that ${Emphasis('Figma')} couldn\'t support`,
      ],
    },
    {
      name: 'Classmate Finder Google Forms Plugin',
      time: '2019',
      details: [
        paragraph`Volunteered to develop a ${Emphasis('Javascript')} tool that connects students in the same courses`,
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

