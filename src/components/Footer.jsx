import React from 'react'

const Footer = () => {
  const today = new Date();
  return (
    <footer className="bg-[#001b5e] rounded-lg shadow m-4 dark:bg-[#001b5e]">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {today.getFullYear()} Developed by Mo Shakir.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#main" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="#about" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="#skills" className="mr-4 hover:underline md:mr-6">Skills</a>
        </li>
        <li>
            <a href="#work" className="mr-4 hover:underline md:mr-6">Work</a>
        </li>
        <li>
            <a href="#projects" className="mr-4 hover:underline md:mr-6">Projects</a>
        </li>
        <li>
            <a href="#resume" className="mr-4 hover:underline md:mr-6">Resume</a>
        </li>
        <li>
            <a href="#contact" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
 
  )
}

export default Footer