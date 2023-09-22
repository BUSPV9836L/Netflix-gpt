import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
 const NavBar = () => {
  const [nav, setNav] = useState(false);

  const hanNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between px-4 py-5 items-center  h-full w-full ">
      <h1 className="text-6xl font-serif"></h1>
      <div className="hidden md:flex">
        <span className="mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2">
          <a href="#about">About</a>
        </span>
        <span className="mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2">
          <a href="#experience">Experience</a>
        </span>
        <span className="mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2">
          <a href="#work">Work</a>
        </span>
        <span className="mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2">
          <a href="#contact">Contact</a>
        </span>
        <span className="mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2 bg-gradient-to-r from-black to-white">
          <a href="https://drive.google.com/file/d/1Ek2NmJ31-ug1md6a92Fr-PfxnnnRlf1y/view?usp=sharing">Resume</a>
        </span>
      </div>
      <div className="md:hidden">
        <GiHamburgerMenu onClick={hanNav} size={35} />
      </div>
      <div
        onClick={hanNav}
        className={
          nav
            ? "md:hidden ease duration-300 absolute w-[460px] sm:w-full left-0 top-0 h-[165vh] sm:full  bg-black/95 px-4 py-7 flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="flex-col w-fit h-fit text-xl mt-5">
          <li className="w-fit mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2">
            <a href='#home'>Home</a>
          </li>
          <li className="w-fit mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2">
            <a href="#about">About</a>
          </li>
          <li className="w-fit mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2">
            <a href="#experience">Experience</a>
          </li>
          <li className="w-fit mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2">
            <a href="#work">Work</a>
          </li>
          <li className="w-fit mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2">
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a className="w-fit mx-2 hover:bg-gradient-to-r from-black to-white rounded-3xl px-4 py-2" href="https://drive.google.com/file/d/1Ek2NmJ31-ug1md6a92Fr-PfxnnnRlf1y/view?usp=sharing">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;