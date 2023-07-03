import React from "react";

const WorkItem = ({ year, title, place, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-blue-800">
      <li className="mb-10 ml-8 ">
        <div className="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-10 mb-5 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-4 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="text-md my-1 font-semibold text-[#001b5e] ">{place}</span>
        </p>
        <p className="text-md font-semibold mb-1">Acomplishments:</p>
        <ul className="list-disc pl-4">
          
            {details.map((detail,idx) => (
                <li key={idx} className="text-stone-800">{detail}</li>
            ))}
          </ul>
      </li>
    </ol>
  );
};

export default WorkItem;
