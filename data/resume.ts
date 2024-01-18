import { Bold, Emphasis, Italics, Link, Paragraph, paragraph } from '../components/Paragraph'



export interface Project {
  name: string,
  time: string,
  github?: string,
  details: (string | Paragraph)[],
}



export const resume = {
  header: {
    name: 'Noam Bendelac',
    contact: [
      'bendelac.noam@gmail.com',
      'Chantilly, VA',
      'US Citizen',
    ],
    summary: 'Software engineer and UX designer seeking a full time role.',
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
        details: 'Human Computer Interaction concentration, GPA 3.81/4.0',
        time: '2023',
      },
      {
        name: 'B.S. Computer Science',
        details: 'Human Computer Interaction minor, GPA 3.90/4.0',
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
            paragraph`Utilized modern ${Emphasis('Android')} architecture, ${Emphasis('Kotlin')} Flow/Coroutines, Dagger, and ${Emphasis('RxJava')}`,
            paragraph`Collaborated with client and in-house ${Emphasis('designers')} to refine requirements and implement designs`,
            // 'Participated in scrum process and code review of my pull requests',
            'Contributed to an app with 10 million downloads for a Fortune 500 media company client',
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
          paragraph`${Emphasis('Designed')} variants of UI to compare improvements to asynchronous user communication`,
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
          paragraph`Reduced memory usage by 35%. Improved tab-closing ${Emphasis('UX')} while meeting ${Emphasis('accessibility')} standards`,
        ],
      }],
    },
    {
      organization: 'CACI International Inc',
      roles: [{
        title: 'DSP Software Intern',
        time: 'May\u2014Aug 2019',
        details: [
          paragraph`Created a ${Emphasis('Python')} UI to control a DSP backend system for a customer sales demo`,
          paragraph`Translated ${Emphasis('DSP')} engineers\' technical jargon to client-friendly user flow`,
        ],
      }],
    },
  ],
  skills: {
    lists: [
      ['Typescript', 'Javascript', 'Python', 'Java', 'C', 'C++', 'Kotlin', 'Go', 'Rust', 'C#', 'HTML/CSS'],
      ['React', 'Next.js', 'SQL', 'Android', 'Django', 'Cloud', 'OpenGL', 'Three.js', 'Node.js'],
      ['Figma', 'Wireframing', 'Git', 'Agile', 'MIDI', 'DSP', 'Arduino', 'Analog circuits', '3D CAD'],
    ],
  },
  projects: {
    software: [
      {
        name: 'noambendelac.xyz Web Portfolio and Resume',
        time: '2023',
        github: 'https://github.com/Noam-Bendelac/portfolio',
        details: [
          paragraph`Implemented and designed this resume and a personal portfolio in ${Emphasis('Next.js')}, ${Emphasis('React')}, and ${Emphasis('Figma')}`,
          paragraph`Optimized ${Emphasis('CSS animations')} by using compositor properties and segregating from ${Emphasis('React')} rerenders`,
        ],
      },
      {
        name: 'Piano Performance Visualization - Team Leader',
        time: '2023',
        github: 'https://github.com/Noam-Bendelac/piano-viz',
        details: [
          paragraph`Led design and development of a ${Emphasis('frontend')} app visualizing piano pitch, rhythm, volume, and tempo`,
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
          paragraph`Ran ${Emphasis('user study')} on 3rd person VR design challenges like cybersickness and camera clipping`
        ],
      },
      {
        name: 'Graduate Capstone - Interactive 3D Diagrams for Hybrid Classrooms - Team Leader',
        time: '2022',
        github: 'https://github.com/Noam-Bendelac/classroom-captain',
        details: [
          paragraph`Designed and built a ${Emphasis('full-stack')} STEM education app in ${Emphasis('Figma, Node, Typescript, React, and Three.js')}`,
          paragraph`Created 3D diagrams for physics and calculus, and ${Emphasis('procedural geometry')} of user-defined math`,
          paragraph`Developed an ${Emphasis('HTTP')} and ${Emphasis('WebSocket')} server hosted on ${Emphasis('cloud')} to let teachers and students interact`,
        ],
      },
      {
        name: 'Undergrad Capstone - Spatial Audio Design Editor - Team Leader',
        time: '2022',
        github: 'https://github.com/Noam-Bendelac/spatial-audio-designer',
        details: [
          paragraph`Designed and implemented a 3D spatial audio editor using ${Emphasis('React')}, ${Emphasis('Typescript')}, and ${Emphasis('Three.js')}`,
          paragraph`Visualized spatial audio fields heatmap following the Web Audio standard in a custom ${Emphasis('GLSL shader')}`,
          'Mentored teammates in React and Three.js. Won Capstone Industry Sponsor Award',
        ],
      },
    ],
    design: [
      {
        name: 'ISE Engineering Department Website UX Research and Redesign',
        time: '2023',
        details: [
          paragraph`Ran ${Emphasis('competitive analysis')} and faculty ${Emphasis('focus groups')}. Redesigned ${Emphasis('info architecture')} and ${Emphasis('wireframes')}`,
          // 'Presented research and solutions to the department\'s designer at their request to jumpstart their work',
          paragraph`Department\'s ${Emphasis('full time designer')} adopted research and proposed solutions to jumpstart their work`,
        ],
      },
      {
        name: 'Filmmakers Club UX Research, Design, and Evaluation - Team Leader',
        time: '2022',
        details: [
          paragraph`Conducted ${Emphasis('UX interviews')}, ${Emphasis('observations')}, and ${Emphasis('artifact flow model')} of filmmakers to study user needs`,
          paragraph`Iterated ${Emphasis('low-fi wireframes')} and ${Emphasis('high-fi prototype')} of improved film schedule optimization workflow`,
          paragraph`Ran a ${Emphasis('Wizard of Oz')} user test on a data- and decision-centric user flow that ${Emphasis('Figma')} couldn\'t support`,
        ],
      },
      {
        name: 'Virginia E-ZPass Landing Page Redesign',
        time: '2021',
        details: [
          paragraph`Redesigned page in ${Emphasis('Figma')} to improve ${Emphasis('accessibility')}, reduce clutter, and clarify ${Emphasis('information hierarchy')}`,
          paragraph`Adhered to E-ZPass ${Emphasis('brand colors')}, tone of voice, and image assets remastered to ${Emphasis('vector graphics')}`,
        ],
      },
      {
        name: 'Amateur Stargazing App UX Research, Design, and Evaluation',
        time: '2021',
        details: [
          paragraph`Conducted ${Emphasis('UX interviews')}, ${Emphasis('observations')}, and ${Emphasis('affinity diagramming')} of shared outdoor campus space`,
          paragraph`Designed stargazing app ${Emphasis('mockups')} and ran a ${Emphasis('cognitive walkthrough evaluation')} with target users`,
        ],
      },
    ],
    other: [
      {
        name: 'Experimental Demo Projects',
        time: '2023',
        details: [
          paragraph`Grass 3D graphics using 100,000 mesh ${Emphasis('instancing')} and a ${Emphasis('subsurface scattering shader')}`,
          paragraph`4-dimensional tetrahedral mesh geometry sliced into 3D ${Emphasis('procedural geometry')} in ${Emphasis('Three.js')}`,
          paragraph`Minesweeper in ${Emphasis('Rust')} running in a browser ${Emphasis('frontend')} through ${Emphasis('WebAssembly')}`
        ]
      },
      {
        name: 'Dover Fueling Solutions Hackathon Winner, 1st Place',
        time: '2022',
        github: 'https://github.com/Noam-Bendelac/gas-pump-trivia-hackathon',
        details: [
          paragraph`Lead developer and taught teammates React for ${Emphasis('voice')} activated ${Emphasis('React')} app for digital gas pumps`,
        ],
      },
      {
        name: 'C HTTP/1.1 Web Server',
        time: '2021',
        details: [
          paragraph`Implemented an ${Emphasis('HTTP')} server in ${Emphasis('C')} hosted on ${Emphasis('AWS')}. Supports ${Emphasis('JWT auth')}, Range requests, and ${Emphasis('JSON')}`,
        ],
      },
      {
        name: 'Classmate Finder Google Forms Plugin',
        time: '2019',
        details: [
          paragraph`Volunteered to develop a ${Emphasis('Javascript')} tool that connects students taking the same courses`,
          'Helped my on-campus residence community make connections during the Covid-19 pandemic',
        ],
      },
    ],
  },
  extracurriculars: [
    {
      name: 'Chamber Music at Virginia Tech, led ensemble of 6 musicians',
      time: '2023',
      details: [
        'Transcribed and arranged video game music. Assembled, directed, and performed with ensemble',
      ],
    },
    {
      name: 'Technical Artist on a Multimedia Installation Art Project',
      time: '2021\u20142022',
      details: [
        paragraph`Created 3D graphics inspired by and synchronized to a piece of music using ${Emphasis('Processing')} and ${Emphasis('Kotlin')}`,
      ],
    },
    {
      name: 'Linguistics Club, Officer',
      time: '2019\u20142020',
      details: [
        'Helped prepare and lead meetings on linguistics topics',
      ],
    },
  ],
  languages: 'Fluent in English and Hebrew',
  publications: [
    // '"Spatial Audio Designer," Web3D 2022, November 2022',
    paragraph`Polys, N., & ${Bold('Bendelac, N.')} (2022, November). Spatial Audio Designer. In ${Italics('Proceedings of the 27th International Conference on 3D Web Technology')}. ${Link('https://doi.org/10.1145/3564533.3564563', 'https://doi.org/10.1145/3564533.3564563')}`,
  ],
}

