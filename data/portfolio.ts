
import audioCapstone from '../images/spatial audio top view 4.png'
import classroomCapstone from '../images/teacher captain1.png'
import { Link, construct } from './resume'


type Paragraph = (string | Link)[]
function Paragraph(...args: Paragraph) { return args }


export const portfolio = [
  {
    title: 'Spatial Audio Designer',
    links: {
      github: 'https://github.com/Noam-Bendelac/spatial-audio-designer',
      demo: 'https://statuesque-truffle-c0f172.netlify.app/',
      pdf: 'https://vtechworks.lib.vt.edu/bitstream/handle/10919/113905/3564533.3564563.pdf',
    },
    image: audioCapstone,
    imageAlt: 'Screenshot of colorful heatmap in spatial audio editor',
    description: [
      Paragraph('I designed and implemented a 3D spatial audio editor and visualizer using Three.js, WebGL, the Web Audio API, and React. I experimented with different visualization techniques, including a “heatmap” showing each sound’s loudness in space, implemented using shaders.'),
      Paragraph(
        'I worked with a team of students and Dr. Nicholas Polys as my advisor. We published a ',
        { display: 'short paper', href: 'https://vtechworks.lib.vt.edu/bitstream/handle/10919/113905/3564533.3564563.pdf' },
        ' on it in the ',
        { display: 'Web3D 2022 conference', href: 'https://dl.acm.org/doi/10.1145/3564533.3564563'},
        '.',
      ),
    ],
  },
  {
    title: 'Classroom Captain',
    subtitle: 'Interactive 3D Diagrams for Hybrid Classrooms',
    links: {
      github: 'https://github.com/Noam-Bendelac/classroom-captain',
      demo: 'https://majestic-dieffenbachia-a1f56f.netlify.app/',
    },
    image: classroomCapstone,
    imageAlt: 'Screenshot of three dimensional physics diagram in web app',
    description: [
      Paragraph('I built a web app for interactive 3D diagrams of physics, mathematics, and other STEM subjects. I wanted these diagrams to provide a spatial, dynamic, and interactive demonstration of topics that would be harder to learn in a static or 2D diagram. I designed the 2D user interface in Figma and based the 3D diagrams on textbooks I had read in my studies.'),
      Paragraph('The app also supports classroom use by letting teachers toggle between two modes: Captain Mode lets teachers control students’ diagrams to guide their attention during an explanation, and Explorer Mode lets students control their own diagrams independently to build intuition and familiarity. I implemented this multiplayer control using WebSocket connections.'), // "Captain Mode gives teachers control over students'..."?
    ],
  },
  {
    title: 'Piano Performance Visualization',
    links: {
      github: 'https://github.com/Noam-Bendelac/piano-viz',
    },
    video: 'https://www.youtube-nocookie.com/embed/C-eI5-nM-JE?si=XDQvKccZk1x7Sugx',
    description: [
      Paragraph(
        'I created a visualization of piano performance that highlights not just note pitch and duration, but also the performer’s dynamics (loudness) and ',
        { display: 'tempo rubato', href: 'https://en.wikipedia.org/wiki/Tempo_rubato'},
        ' (changes in speed).'
      )
      // TODO
      // design??
      // midi?, pedal?, score sequence matching, tempo math, webgl rendering
      // worked in a team
    ],
  },
]


