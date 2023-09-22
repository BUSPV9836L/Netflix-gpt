import React from "react";
import imgabout from "./images/about.jpg"
const About = () => {
  return (
    <div id="about" className="  flex-col h-full w-[460px] sm:w-[600px] md:w-[1200px] px-4 py-6 bg-gradient-to-tr from-gray-500 rounded-lg mx-auto mt-5">
      <h2 className="text-gray-700 font-bold text-3xl">About Me</h2>
      <p className="mt-3 text-gray-800 text-lg">
        I'm a self-taught Front End developer from India. I build websites with
        a focus on providing the experience for everyone using them and
        responsiveness. Curious to learn more about developing scalable
        distribution systems, love problem solving, and care about writing and
        maintainable code. A responsive design makes your website accessible to
        all users, regardless of their devices. Skills
      </p>
      <h3 className="text-gray-700 font-bold text-2xl">Skills</h3>
      <ul className="mt-3 text-gray-800 text-lg">
        <li>HTML5/CSS3</li>
        <li>JavaScript</li>
        <li>Bootstrap 5</li>
        <li>React Js</li>
        <li>React-Bootstrap</li>
        <li>Git/Github</li>
      </ul>
      <div className=" w-fit relative md:mt-[-251px] md:ml-[500px]">
      <img src={imgabout}  alt="about"></img>
      </div>
    </div>
  );
};

export default About;
