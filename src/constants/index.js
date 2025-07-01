import { Torus } from "@react-three/drei";
import {
  p1,
  p2,
  p3,
  p4,
  p5,
  web,
  education,
  tour,
  
  Nexus,
  Mental,
  Meal,
  Doctor,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Tech Enthusiast",
    icon: web,
  },
  {
    title: "CP Enthusiast",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: web,
  },

  {
    title: "300+ questions on LEETCODE (6+ Badges)",
    icon: web,
    //link: "https://leetcode.com/u/harsh2108/"
  },
];

const technologies = [
  {
    name: "HTML-CSS-JS",
    icon: p1,
  },
  {
    name: "MongoDB-ExpressJS-ReactJS-NodeJS",
    icon: p2,
  },
  {
    name: "Vite-Tailwind-Bootstrap",
    icon: p3,
  },
  {
    name: "Git-Github-VSCode-Postman",
    icon: p4,
  },
  {
    name: "C-CPP-Java-Python",
    icon: p5,
  },
];

const experiences = [
  {
    title: "Oasis Infobyte",
    company_name: "Data Science Internship",
    icon: Nexus,
    iconBg: "#383E56",
    date: "August 2023 - November 2023",
    points: [
      "Built predictive models and provided insights to optimize advertising strategies.",
      "Built a User-Friendly Web Application to facilitate sales prediction.",
      "Led a Sales Prediction System, analyzing factors like advertising expenditure, target audience.",
      " achieving the highest accuracy of 96% through Decision Tree.",
      ,
    ],
  },

  {
    title: "Proxenix",
    company_name: "Web Development Internship",
    icon: Nexus,
    iconBg: "#383E56",
    date: "May 2025 - July 2025",
    points: [
      "Designed and implemented responsive front-end interfaces using HTML5, CSS3, JavaScript, and React.js .",
      "Built reusable React components for consistent UI across the application.",
      "Collaborated with the design team to improve UI/UX.",
      " Deployed web apps on Netlify / Vercel.",
      " Gained experience with version control using Git and project management tools.",
      ,
    ],
  }
];

const projects = [




  {
    name: "Child Mental Health Detection",
    description:
      "Real-time emotion detection using OpenCV also analyzing emotional cues through live video and conversational interaction.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Chatbot API",
        color: "pink-text-gradient",
      },
      
    ],
    image: Mental,
    source_code_link: "https://github.com/harshgupta2108",
    live_link: "#",
  },



  {
    name: "Doctor-Patient Management System",
    description:
      "web application with patient, doctor, and admin interfaces.!",
    tags: [
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
    image: Doctor,
    source_code_link: "https://github.com/harshgupta2108",
    live_link: "#",
  },
  {
    name: "Mental Health and Wellness Tracker",
    description:
      "web application that provides resources for mental health and wellness.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
    image: Mental,
    source_code_link: "https://github.com/harshgupta2108",
    live_link: "#",
  },



{
    name: "Calfit - calorie tracking platform",
    description:
      "Developed a calorie tracking platform that analyzes user input to monitor daily intake.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
    image: Meal,
    source_code_link: "https://github.com/harshgupta2108",
    live_link: "#",
  },


  {
    name: "PathFinder - EdTech platform",
    description:
      "web-based that offers curated tools, study materials, and preparation resources for government and competitive exams.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
    ],
    image: education,
    source_code_link: "https://github.com/harshgupta2108",
    live_link: "#",
  },















  {
    name: "Tour & Travel Booking Website",
    description:
      "A user-friendly web platform offering curated tour packages for domestic travel, designed to make planning trips simple and efficient.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    
    ],
    image: tour ,
    source_code_link: "https://github.com/harshgupta2108",
    live_link: "#",
  }
];
export { services, technologies, experiences, projects };
