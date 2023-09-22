import React from "react";
import { FaHandPaper } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
 const Home = () => {
  return (
    <div id="home" className="flex-col text-3xl  ml-[100px] w-fit px-4 py-4 mt-[100px] font-bold">
      <h2 className="flex items-center">Hello {<FaHandPaper size={40} className='ml-6 text-yellow-400' />}</h2>
      <p>I'm Bipin Vishwakarma</p>
      <TypeAnimation
        sequence={[
          "Front end Developer",
          1000,
          "React Js Developer",
          1000,
        ]}
        speed={40}
        wrapper="span"
        repeat={Infinity}
      />
    </div>
  );
};

export default Home;
