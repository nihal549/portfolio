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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    maersk,
    freelance,
    springboot,
    kafka,
    java,
    python,
    chat,
    plant,
    summ
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Developer",
      icon: mobile,
    },
    
    {
      title: "Content Creator",
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
      name: "SpringBoot",
      icon: springboot,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Kafka",
      icon: kafka,
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
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Freelancer",
      icon: freelance,
      iconBg: "#383E56",
      date: "January 2022 - September 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        " Integrate databases, create APIs, and ensure smooth data flow between client and server components, focusing on user-friendly interfaces and responsive design. ",
        "Implementing responsive design and ensuring cross-browser compatibility."
      ],
    },
    {
      title: "Software Engineer -Intern",
      company_name: "Maersk",
      icon: maersk,
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "Spearheaded the development and maintenance of backend systems for the APMT Vessel Inspection App,streamlining inspections for APM Terminals managers",
        "Developed and collaborated on internal facing applications, effectively enhancing operational efficiency",
        "Proficiently utilized the SpringBoot technology stack to maintain 2 robust backend applications , delivering high-performance and scalable solutions",
        "Successfully employed Docker for seamless containerization and deployment of applications, reducing deployment time by 40% and ensuring efficient software delivery.",
        "Collaborated with a team of 10 developers in a version-controlled environment using GitHub, resulting in streamlined code implementation and a 20% reduction in bug count",
        "Gained hands-on experience with Microsoft Azure, proficiently deploying 3 applications on cloud services,enhancing accessibility and achieving 99.9% uptime.",
        "Played a key role in troubleshooting and resolving 20 technical issues, ensuring the smooth and uninterrupted operation of backend systems.",
       " Leveraged Kafka to develop event-driven architectures, enabling real-time data processing and achieving a 30% improvement in system responsiveness."
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "Check out my skills on HackerRank, a coding platform that tests my problem-solving knowledge",
      name: "Hacker Rank",
      designation: "coding Platform",
      company: "Visit Here",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "One Stop Plant Application",
      description:
        "A comprehensive One-Stop Plant App that seamlessly integrates e-commerce, plant identification, and disease detection functionalities. Leveraged JavaScript, Python, and Machine Learning to provide an intuitive and intelligent user experience",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "MachineLearnig",
          color: "pink-text-gradient",
        },
      ],
      image: plant,
      source_code_link: "https://github.com/nihal549/MajorProject",
    },
    {
      name: "Text-Summarization App",
      description:
        "Created an innovative Text Summarization App using JavaScript, Python, and Machine Learning techniques. Applied Natural language processing algorithms to generate concise summaries while preserving the original meaning.Integrated MongoDB for efficient data storage, enabling seamless access to summarized texts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: summ,
      source_code_link: "https://github.com/nihal549/mini_project",
    },
    {
      name: "Chat Application",
      description:
        "A real-time chat application built using Node.js and Socket.io offers a dynamic and engaging platform for instant communication. This application enables users to exchange messages in real time without the need for constant page refreshing.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/nihal549/chatApp-with-nodejs-expressjs-",
    },
  ];
  
  export { services,  technologies, experiences, testimonials, projects };