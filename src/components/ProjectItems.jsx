import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const ProjectItems = ({ img, title, tech, details, short, demo, repo,projectimage }) => {
  console.log(img);

  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex items-center justify-center  m-auto h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
        <img
          src={img}
          alt="/"
          className="rounded-xl group-hover:opacity-10"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl font-bold text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{short}</p>
          <a>
            <p
              className="bg-white text-[#001b5e] text-center active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              {" "}
              More Info
            </p>
          </a>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <div className="flex justify-center">
                    <img
                      src={projectimage}
                      className=""
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {details}
                  </p>
                  <div>
                    {tech.map((techs, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-emerald-600 bg-emerald-200  last:mr-0 mr-1"
                      >
                        {techs}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 flex gap-2">
                    <a target="_blank" href={demo}>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-stone-100 bg-blue-950 last:mr-0 mr-1">
                        Live Demo
                      </span>
                    </a>
                    <a target="_blank" href={repo}>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-stone-100 bg-blue-950 last:mr-0 mr-1">
                        Github Repo
                      </span>
                    </a>
                  </div>
                </div>
                {/*footer*/}

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ProjectItems;
