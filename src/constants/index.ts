import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    fiverr,
    upwork,
    best,
    on2u,
    pizza,
    threejs,
    euphoria
    //@ts-ignore
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
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "React/Next Developer",
      icon: mobile,
    },
    {
      title: "Shopify Developer (Start lvl.)",
      icon: backend,
    },
    {
      title: "Solidity Engineer (Start lvl.)",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
  
  export interface IWorkExperience {
    title: string;
    company_name: string;
    icon: any; 
    iconBg: string;
    date: string;
    points: string[];
}

  const experiences: IWorkExperience[] = [
    {
    title: "Layout Developer | Shopify Developer",
    company_name: "UpWork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developing complex clothes online shop for commercial business",
      "Providing layout with HTML and SCSS, helping to develop own shopify theme",
      "Implementing loading of products from api of clothes producer",
      "Working in team with expirienced react developer and senior ux/ui designer. The designer was as a PM at that project, so we got tasks from him.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Fiverr(Freelance)",
    icon: fiverr,
    iconBg: "#383E56",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Developing simple e-commerce food store using React, Typescript, Redux Toolkit, Axios, Lodash",
      "Collaborating in team including designer and backend developer",
      "Implementing categories, filtrations and organising general state management for cart, also provide saving user`s last state with localstorage",
      "Perform optimizing actions to make app more lightweight, using codesplitting, tree shaking, lazy loading and doing manually testing of an UI",
    ],
  },
    {
      title: "Layout Developer",
      company_name: "Best Vinnytsia",
      icon: best,
      iconBg: "#383E56",
      date: "2022",
      points: [
        "Taking part in a hackathon of developing web app that can make city more green and increase the amount of trees",
        "Making layout of an web app with HTML5, CSS3",
        "Collaborating in team including Leading React Developer and Java (Springboot) Backend Developer to create high-quality product.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    }
  ];
  
  export interface ITestimonial {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
  }

  const testimonials: ITestimonial[] = [
    // {
    //   testimonial:
    //     "Thanks for your work, the interface is so attractive and simple.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    
  ];
  
export interface IProject {
    name: string;
    description: string;
    tags: ITag[];
    image: any; 
    source_code_link: string;
}

interface ITag {
    name: string;
    color: string;
}

  const projects:IProject[]  = [
    {
      name: "On2u",
      description:
        "Clothes e-shop that provides a lot of functions. This app using complex logic and basic functionality of Shopify. Users can liked clothes? add to cart, search, change categories, get the discount code.",
      tags: [
        {
          name: "html",
          color: "text-[#f44336]",
        },
        {
          name: "css",
          color: "text-[#0062ac]",
        },
        {
          name: "liquid",
          color: "text-[#2a5779]",
        },
        {
          name: "shopify",
          color: "text-[#6aa84f]",
        },
      ],
      image: on2u,
      source_code_link: "https://on2u.de/",
    },
    {
      name: "Euphoria Store",
      description:
        "A simple nice looking clothes store that allows users buy some clothing for women and men.(in development now)",
      tags: [
        {
          name: "reactjs",
          color: "text-[#0075ff]",
        },
        {
          name: "typescript",
          color: "text-[#0062ac]",
        },
        {
          name: "tailwind",
          color: "text-[#68ceff]",
        },
        {
          name: "expressjs",
          color: "text-[#6aa84f] ",
        },
        {
          name: "redux/toolkit",
          color: "text-[#674ea7]",
        },
      ],
      image: euphoria,
      source_code_link: "https://github.com/Svyat0x7b",
    },
    {
      name: "Pizza Store",
      description:
        "Web application that helps for the reastuarant sell their pizzas through the online. This app provide a cart and different options like to select size and type of pizza",
      tags: [
        {
          name: "react",
          color: "text-[#008ef0]",
        },
        {
          name: "typescript",
          color: "text-[#0062ac]",
        },
        {
          name: "redux/toolkit",
          color: "text-[#674ea7]",
        },
        {
          name: "scss",
          color: "text-[#ea1e83]",
        },
        {
          name: "axios",
          color: "text-[#B2E8E8]",
        },
        {
          name: "lodash",
          color: "text-[#6fa8dc]",
        },
      ],
      image: pizza,
      source_code_link: "https://github.com/Svyat0x7b/react-pizza",
    }
  ];
  
  import github from '../assets/github.png'

  export { github, services, technologies, experiences, testimonials, projects };