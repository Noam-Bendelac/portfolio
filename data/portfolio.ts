
import audioCapstone from '../images/spatial audio top view 4.png'
import classroomCapstone from '../images/teacher captain1.png'
import { Link } from './resume'


type Paragraph = (string | Link)[]
function Paragraph(...args: Paragraph) { return args }


export const portfolio = [
  {
    title: 'Spatial Sound Design Editor',
    image: audioCapstone,
    imageAlt: 'Screenshot of colorful heatmap in spatial audio editor',
    description: [
      Paragraph('I designed and implemented a 3D spatial audio editor and visualizer using Three.js, the Web Audio API, and React. I experimented with different visualization techniques, including a “heatmap” showing each sound’s loudness in space, implemented using shaders.'),
      Paragraph('I worked with a team of students and Dr. Nicholas Polys as my advisor.'),
    ],
  },
  {
    title: 'Classroom Captain: Interactive 3D Diagrams for Hybrid Classrooms',
    image: classroomCapstone,
    imageAlt: 'Screenshot of three dimensional physics diagram in web app',
    description: [
      Paragraph('I built a web app for interactive 3D diagrams of physics, mathematics, and other STEM subjects. I wanted these diagrams to provide a spatial, dynamic, and interactive demonstration of topics that would be harder to learn in a static or 2D diagram. I designed the 2D user interface in Figma and based the 3D diagrams on textbooks I had read in my studies.'),
      Paragraph('The app also supports classroom use by letting teachers toggle between having control over students’ diagrams to guide their attention during an explanation, and letting students control their own diagrams independently to build intuition and familiarity. I implemented this multiplayer control using the WebSocket API.'),
    ],
  },
]


