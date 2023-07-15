import React from "react";
import WorkItem from "./WorkItem";
import transition from "../transition";

const data = [
  {
    year: "2022-2023",
    title: "IT Consultant",
    place: "FDM Group",
    details: [
      "Developed and maintained robust and scalable software solutions using Java Spring Boot and MySQL.",
      "Collaborated closely with cross-functional teams, including product managers and stakeholders, to gather requirements and translate them into technical specifications.",
      "Implemented clean and well-documented code while adhering to best practices and coding standards.",
      "Wrote shell scripts in Unix for various automation tasks.",
      "Conducted thorough testing and debugging of applications to ensure high-quality deliverables and resolve software defects promptly.",
      "Participated in code reviews, providing valuable feedback to improve code quality and maintainability.",
      "Worked in an agile development environment, using version control systems like Git and following agile methodologies.",
    ],
  },
  {
    year: "2019-2021",
    title: "Master of Computer Science",
    place: "Queensland University of Technology",
    details: [
      "Programming Fundamentals",
      "Network Systems",
      "Web and Mobile Development",
      "Object-oriented Programming",
      "Databases",
      "Data Structures and Algorithms",
      "Principles of Software Security",
      "Systems Analysis and Design",
      
    ],
  },
];

const Work = () => {
  return (
    <div className='w-full lg:h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-sky-300 via-neutral-100 to-blue-400 top-0 left-0 object-cover'>
    <div id="work" className="max-w-[1040px] m-auto h-full w-full  md:pl-16 p-4 py-16">
      <h1 className="text-4xl  font-bold  text-center pb-5 text-transparent  bg-clip-text bg-gradient-to-r from-slate-600 via-blue-900 to-gray-100">Work & Education</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          place={item.place}
          details={item.details}
        />
      ))}
    </div>
    </div>
  );
};

export default Work;
