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
    title: "Crypto Market Tracker",
    demo: 'https://read.cv/moshak',
    repo:'https://github.com/Moshak67/React-Native-Stock-Market-API',
    img: [img1,img2,img3,img4,img5],
    tech: ["React.Js", "Node.Js", "React Native", "Expo", "Material Ui"],
    short: 'Cross-Platform React App.',
    details:
      "Developed a Web & Mobile application to allow users to view and analyse crypto market data. In this project i used Coingecko API to present usefull information such as symbols, name , industry opening price, the currency highest and lowest price on that day, the closing price and the volume of the currency that was traded on that day",
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
