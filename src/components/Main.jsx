import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import transition from "../transition";

const Main = () => {
  return (
    <div id="main" className='w-full h-screen bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-300 via-neutral-100 to-blue-400 top-0 left-0 object-cover'>
      {/* <div className='absolute w-full h-screen object-cover bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-300 via-neutral-100 to-blue-400 top-0 left-0'> */}
      {/* <div className='absolute w-full h-screen object-cover top-0 left-0' > */}
        <div className="max-w-[1040px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
          Hey there! I'm Mo Shakir
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Software Engineer 💾",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Java Developer 💥",
                1000,
                "Problem Solver 🎲",
                2000,
                "Tech Enthusiast 🎉",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <p className="flex sm:text-xl text-2xl pt-4 text-gray-800">
          and I bring a unique blend of creativity and technical expertise to the table. With a background in art and a passion for problem-solving, I embarked on a journey that led me from theater school to the fascinating world of Multimedia.
          </p>
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
  );
};

export default Main;
// export default transition(Main);
