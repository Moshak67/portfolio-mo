import React from "react";
import mo from "../assets/mo.png";
import transition from "../transition";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1040px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#001b5e]">
            About
          </p>
          <h2 className="py-4 sm:text-4xl text-4xl font-bold text-gray-800">Who I Am</h2>
          <p className="py-2 text-gray-600">
            🥷Not your regular software engineer!
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            While studying Multimedia, I discovered my love for coding in a plot
            twist that changed everything. I realized that my creative mindset
            and attention to detail perfectly aligned with the world of
            programming. Determined to pursue this newfound passion, I continued
            my education in computer science.
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            I thrive on creating innovative solutions that not only meet
            functional requirements but also deliver an exceptional user
            experience. As a front-end specialist, I enjoy crafting visually
            appealing and interactive interfaces. But don't let that fool you!
            I'm equally proficient in back-end development and skilled in
            database design, particularly with relational databases like MySQL.
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            Outside of coding, I embrace my artistic side by using code as my
            canvas. It's my way of blending creativity and technology to create
            captivating digital art. I approach problem-solving with a strategic
            and analytical mindset, always seeking optimal solutions.
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            But hey, work doesn't have to be all serious, right? I believe in
            injecting a dose of fun into what I do. Collaborating with
            like-minded individuals, pushing boundaries, and finding joy in
            every project is what drives me.
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            So, if you're looking for a professional who can bring a touch of
            excitement and expertise to your team, let's connect. Together,
            we'll create something remarkable and make the world a little more
            fun and functional.
          </p>
        </div>
        <div className="mb-4 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src={mo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
// export default transition(About);
