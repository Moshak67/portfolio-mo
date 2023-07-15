import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineIdcard,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import {
  BsPerson,
  BsEmojiSunglasses,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 ">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer"
          >
            <BsEmojiSunglasses size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer"
          >
            <FaDev size={20} />
            <span className="pl-4">Skills</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer"
          >
            <BsFillBriefcaseFill size={20} />
            <span className="pl-4">Works</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 hover:scale-110 ease-in duration-200 cursor-pointer"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div className="md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            <Tooltip content="Home" placement="right">
              <a
                href="#main"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
              >
                <AiOutlineHome size={20} />
              </a>
            </Tooltip>
            <Tooltip content="About" placement="right">
              <a
                href="#about"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
              >
                <BsEmojiSunglasses size={20} />
              </a>
            </Tooltip>
            <Tooltip content="Skills" placement="right">
              <a
                href="#skills"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
              >
                <FaDev size={20} />
              </a>
            </Tooltip>
            <Tooltip content="Work" placement="right">
              <a
                href="#work"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
              >
                <BsFillBriefcaseFill size={20} />
              </a>
            </Tooltip>
            <Tooltip content="Projects" placement="right">
              <a
                href="#projects"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
              >
                <GrProjects size={20} />
              </a>
            </Tooltip>
            <Tooltip content="Contact Me" placement="right">
              <a
                href="#contact"
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
              >
                <AiOutlineMail size={20} />
              </a>
            </Tooltip>
            <Tooltip  content="Download My Resume" placement="right">
              <a
                href="https://drive.google.com/file/d/16EG2490pIjSuVahYYv5PKWiaLUxt02pT/view?usp=sharing"
                target="_blank"
                className="rounded-full shadow-lg bg-[#001b5e] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 object-none object-right-bottom"
              >
                <AiOutlineIdcard size={20} color="white" />
              </a>
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
