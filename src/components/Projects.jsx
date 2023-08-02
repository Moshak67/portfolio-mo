import React from "react";
import ProjectItems from "./ProjectItems";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from '../assets/giphy.gif'
import img6 from '../assets/crypto.gif'

import transition from "../transition";


const data = [
  {
    title: "Crypto Market Tracker - Web ",
    demo: 'https://moshak67.github.io/Cryptocurrency-Tracker/',
    repo:'https://github.com/Moshak67/React-Native-Stock-Market-API',
    img: img1,
    projectimage:img6,
    tech: ["React.Js", "Node.Js", "Material Ui"],
    short: 'React.js Application.',
    details:
      "React Web Application which allow users to view and analyse crypto market data. In this project i used Coingecko API to present usefull information such as symbols, name , industry opening price, the currency highest and lowest price on that day, the closing price and the volume of the currency that was traded on that day",
  },
  {
    title: "Crypto Market Tracker - Mobile",
    demo: 'https://read.cv/moshak',
    repo:'https://github.com/Moshak67/React-Native-Stock-Market-API',
    img: img2,
    projectimage:img5,
    tech: ["Node.Js", "React Native", "Expo", "Material Ui", "Bootstrap"],
    short: 'Cross-Platform React Native Application.',
    details:
      "Cryptocurrency market tracker app enable users to search for cryptocurrencies in the market, check market data visualized by charts and add any asset they want into their watchlist.",
  },
  {
    title: "E-commerce Platform",
    demo: 'https://read.cv/moshak',
    repo:'https://github.com/Moshak67/Flexdrone',
    img: img3,
    projectimage:img5,
    tech: ["Java", "Spring Boot", "React.js", "Redux", "JWT", "Google Authenticator", "MySQL", "Material Ui"],
    short: 'Spring Boot Microservices.',
    details:
      "Flexdrone is an online retail business for the purchasing of public consumer-grade drones. Flexdrone gives flexibility to the customer by enabling them to configure their drone however they want."
  },
];

const Projects = () => {
  return (
    <div className="w-full h-full">
      <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-8">
          Projects
        </h1>
        
        <div className="grid sm:grid-cols-2 gap-12">
          {data.map((item, idx) => (
            <ProjectItems
              img={item.img}
              title={item.title}
              details={item.details}
              tech={item.tech}
              short={item.short}
              demo={item.demo}
              repo={item.repo}
              projectimage={item.projectimage}
              key={idx}
            />
          ))}
          {/* <ProjectItems img={img1} title={'Crypto Market Tracker'}  />
        <ProjectItems img={img2} title={'E-Commerce Platform'} />
        <ProjectItems img={img3} title={'Quiz Maker Application'} />
        <ProjectItems img={img4} title={'Reverse Polish Notation Calculator'} /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
// export default transition(Projects);
