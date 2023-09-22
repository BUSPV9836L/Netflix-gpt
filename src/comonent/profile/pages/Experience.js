import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript, TbBrandCss3, TbBrandCpp } from "react-icons/tb";
import imgExperience from './images/experience.jpg'
 const Experience = () => {
  return (
    <div id="experience" className="text-gray-700 flex-col w-[460px] justify-center sm:w-[600px] md:w-[1200px] px-4 py-6 bg-gradient-to-tr from-gray-500 rounded-lg mx-auto mt-5">
        <h1 className="text-gray-700 font-bold text-3xl">Experience</h1>
        <div className="flex items-center mt-5  mx-2">
          <RiReactjsLine size={50} />
          <h1 className="ml-10 text-xl">React Js</h1>
        </div>
        <div className="flex items-center  mx-2">
          <TbBrandJavascript size={50} />
          <h1 className="ml-10 text-xl">JavaScript</h1>
        </div>
        <div className="flex items-center mx-2">
          <AiFillHtml5 size={50} />
          <h1 className="ml-10 text-xl">HTML</h1>
        </div>
        <div className="flex items-center mx-2">
          <SiTailwindcss size={50} />
          <h1 className="ml-10 text-xl">Tailwind CSS</h1>
        </div>
        <div className="flex items-center mx-2">
          <TbBrandCss3 size={50} />
          <h1 className="ml-10 text-xl">CSS 3</h1>
        </div>
        <div className="flex items-center mx-2">
          <AiFillGithub size={50} />
          <h1 className="ml-10 text-xl">Git/Github</h1>
        </div>
        <div className="flex items-center mx-2">
          <TbBrandCpp size={50} />
          <h1 className="ml-10 text-xl">C++</h1>
        </div>
        <div className=" w-fit relative md:mt-[-395px] md:ml-[540px] mx-auto">
          <img src={imgExperience}></img>
        </div>
      </div>
  );
};
export default Experience;
