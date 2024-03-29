
import { StaticImageData } from 'next/image'
import audioCapstone from '../images/spatial audio top view 4.png'
import classroomCapstone from '../images/teacher captain1.png'
import stargazing from '../images/stargazing-2x-1.png'
import { Link, Paragraph, paragraph } from '../components/Paragraph'



type Image = { src: StaticImageData, alt: string }
type Video = { src: string }
type Media =
  | Image & { type: 'image' }
  | Video & { type: 'video' }

interface Project {
  title: string,
  subtitle?: string,
  hash: string,
  links: {
    github?: string,
    demo?: string,
    pdf?: string,
  },
  pages: {
    media: Media[],
    description: Paragraph[],
  }[]
}



export const portfolio: Project[] = [
  {
    title: 'Spatial Audio Designer',
    hash: 'spatial-audio-designer',
    links: {
      github: 'https://github.com/Noam-Bendelac/spatial-audio-designer',
      demo: 'https://statuesque-truffle-c0f172.netlify.app/',
      pdf: 'https://vtechworks.lib.vt.edu/bitstream/handle/10919/113905/3564533.3564563.pdf',
    },
    pages: [{
      media: [{
        type: 'image',
        src: audioCapstone,
        alt: 'Screenshot of colorful heatmap in spatial audio editor',
      }],
      description: [
        paragraph`I designed and implemented a 3D spatial audio editor and visualizer using Three.js, WebGL, the Web Audio API, and React. I experimented with different visualization techniques, including a “heatmap” showing each sound’s loudness in space, implemented using shaders.`,
        paragraph`I worked with a team of students and Dr. Nicholas Polys as my advisor. We published a ${Link('short paper', 'https://vtechworks.lib.vt.edu/bitstream/handle/10919/113905/3564533.3564563.pdf')} on it in the ${Link('Web3D 2022 conference', 'https://dl.acm.org/doi/10.1145/3564533.3564563')}.`,
      ],
    }],
  },
  {
    title: 'Classroom Captain',
    subtitle: 'Interactive 3D Diagrams for Hybrid Classrooms',
    hash: 'classroom-captain',
    links: {
      github: 'https://github.com/Noam-Bendelac/classroom-captain',
      demo: 'https://classroom-captain.noambendelac.xyz/demo',
    },
    pages: [{
      media: [{
        type: 'image',
        src: classroomCapstone,
        alt: 'Screenshot of three dimensional physics diagram in web app',
      }],
      description: [
        paragraph`I built a web app for interactive 3D diagrams of physics, mathematics, and other STEM subjects. I wanted these diagrams to provide a spatial, dynamic, and interactive demonstration of topics that would be harder to learn in a static or 2D diagram. I designed the 2D user interface in Figma and based the 3D diagrams on textbooks I had read in my studies.`,
        paragraph`The app also supports classroom use by letting teachers toggle between two modes: Captain Mode lets teachers control students’ diagrams to guide their attention during an explanation, and Explorer Mode lets students control their own diagrams independently to build intuition and familiarity. I implemented this multiplayer control using WebSocket connections.`, // "Captain Mode gives teachers control over students'..."?
      ],
    }],
  },
  {
    title: 'Amateur Stargazing App',
    subtitle: 'UX Research and Design',
    hash: 'stargazing-ux',
    links: { },
    pages: [{
      media: [{
        type: 'image',
        src: stargazing,
        alt: 'Screenshot of stargazing app mockups',
      }],
      description: [
        paragraph`I worked with a team of designers to create an app for amateur stargazing in shared outdoor campus spaces. We conducted observations and interviews to learn about potential users’ preferences and habits.`, // and organized our notes into an affinity diagram.
        paragraph`We designed an app that uses a mobile phone’s sensors to guide the user in pointing their phone towards a celestial object. I created these mockups of the explore page and guiding tutorial to test with potential users.`,
      ],
    }],
  },
  {
    title: 'Piano Performance Visualization',
    hash: 'piano-visualization',
    links: {
      github: 'https://github.com/Noam-Bendelac/piano-viz',
    },
    pages: [{
      media: [{
        type: 'video',
        src: 'https://www.youtube-nocookie.com/embed/C-eI5-nM-JE?si=XDQvKccZk1x7Sugx',
      }],
      description: [
        paragraph`I created a visualization of piano performance that highlights not just note pitch and duration, but also the performer’s dynamics (loudness) and ${Link('tempo rubato', 'https://en.wikipedia.org/wiki/Tempo_rubato')} (changes in speed).`
        // TODO
        // design??
        // midi?, pedal?, score sequence matching, tempo math, webgl rendering
        // worked in a team
      ],
    }],
  },
]


