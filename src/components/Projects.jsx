import React from "react";
import ProjectItems from "./ProjectItems";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from '../assets/giphy.gif'
import transition from "../transition";



const data = [
  {
    title: "Crypto Market Tracker - Web ",
    demo: 'https://read.cv/moshak',
    repo:'https://github.com/Moshak67/React-Native-Stock-Market-API',
    img: [img1,img2,img3,img4,img5],
    tech: ["React.Js", "Node.Js", "Material Ui"],
    short: 'React.js Application.',
    details:
      "React Web Application which allow users to view and analyse crypto market data. In this project i used Coingecko API to present usefull information such as symbols, name , industry opening price, the currency highest and lowest price on that day, the closing price and the volume of the currency that was traded on that day",
  },
  {
    title: "Crypto Market Tracker - Mobile",
    demo: 'https://read.cv/moshak',
    repo:'https://github.com/Moshak67/React-Native-Stock-Market-API',
    img: [img1,img2,img3,img4,img5],
    tech: ["Node.Js", "React Native", "Expo", "Material Ui", "Bootstrap"],
    short: 'Cross-Platform React Native Application.',
    details:
      "Cross-Platform Mobile Application which allow users to view and analyse crypto market data. This app visualises market data using Chart.js library. Users can add a crypto currency to their watchlist.",
  },
  {
    title: "E-commerce Platform",
    demo: 'https://read.cv/moshak',
    repo:'https://github.com/Moshak67/React-Native-Stock-Market-API',
    img: [img1,img2,img3,img4,img5],
    tech: ["Java", "Spring Boot", "React.js", "Redux", "JWT", "Google Authenticator", "MySQL", "Material Ui"],
    short: 'Cross-Platform React App.',
    details:
      "Flexdrone is an online retail business for the purchasing of public consumer-grade drones. Flexdrone gives flexibility to the customer's drone choice in three main ways: 1. Choice to select a drone collection that is pre-made and ready to fly. 2. Option to build a drone on our website by going through our guided user-interface. 3. Buy accessories or specific parts to replace or upgrade on a pre-existing drone. We source our products from manufacturers who meet standard Australian industry regulations and requirements.",
  },
];

const Projects = () => {
  return (
    <div className="w-full h-screen">
      <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          Projects
        </h1>
        <p className="text-center py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
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
