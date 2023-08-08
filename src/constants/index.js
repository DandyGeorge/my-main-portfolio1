import {
  realest1,
  restaurant1,
  hotel2, 
  motion,
  lifelight,
  logo1,
  logo3,
 graphics, 
 nextjs,
  web,
  javascript,  
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma, 
  threejs,
  uiux,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: reactjs,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
  {
    title: "Graphics Designer",
    icon: graphics,
  },
];

const technologies = [
  {
    name: "Next JS",
    icon : nextjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Framer motion",
    icon: motion,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Self-taught",
    icon: logo1,
    iconBg: "#383E56",
    date: "June 2019 - Present",
    points: [
      "Developing applications using React.js and other related technologies at self-taught pace.",      
      "Implementing responsive design and ensuring cross-browser compatibility at self-taught pace.",
      "Participating in frontend course on Coursera.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "LifeLight",
    icon: lifelight,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing web applications using React.js, tailwind CSS and other related technologies at self-taught pace.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality LifeLight App at LifeLight OPEX Academy.",
      "Implementing responsive design and ensuring cross-browser compatibility at self-taught pace.",
      "Participating in frontend course on Coursera.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "OBITECH/LifeLight",
    icon: logo3,
    iconBg: "#383E56",
    date: " August 2022 - Present",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Collaborating with friends in the field ,cross-functional teams including designers, product managers, and other developers to create high-quality products in OBITECH and LifeLight.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in frontend course on Coursera.",
    ],
  },
  {
    title: "Full stack Developer in anticipation",
    company_name: "Self-taught",
    icon: logo1,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Participating in Javascript Master class, fullstack on Youtube",
      "Participating in OBITECH fullstack programming journey class.",
      "Developing a fullstack application using React.js, nodejs and other related technologies.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dandy is a rare gem i have seen with so much enthusiasm,passion and determination to be successful in software.A good recommendation to companies",
    name: "Attah Ojima",
    designation: "Backend Developer",
    company: "LifeLight OPEX, Abuja",
    image: "",
  },
  {
    testimonial:
      "I've never met a fast learner self-taught web developer like Dandy does. Get him and you will forever be grateful working with him.",
    name: "Samuel Ukpong",
    designation: "Angular Developer",
    company: "tek-experts VI, Lagos",
    image: "",
  },
  {
    testimonial:
      "I truly admire the energy and passion he has for becoming successful in software, always ready to learn something new",
    name: "Dickson Emmanuel",
    designation: "Fullstack Developer",
    company: "Skyline Dev, Port Harcourt",
    image: "",
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
      "Website platform that allows users/customers to search and acquire suitable property and interact directly with the estate management. This manages the rise of property theft.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: realest1,
    source_code_link: "https://github.com/DandyGeorge",
  },
  {
    name: "Restaurant",
    description:
      "Web application that enables users/customers to order for their choice of meal and can as well book a table if available.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS, swiperjs",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant1,
    source_code_link: "https://github.com/DandyGeorge",
  },
  {
    name: "Hotel",
    description:
      "A plateform that allows Users/customers to book for their preferred room and interact with the hotel management for other services",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: hotel2,
    source_code_link: "https://github.com/DandyGeorge",
  },
];

export { services, technologies, experiences, testimonials, projects };
