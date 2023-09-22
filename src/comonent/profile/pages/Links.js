import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
 const Links = () => {
  return (
    <div className="flex w-fit h-full px-4 py-4 ml-[100px] mt-5">
      <div className="bg-transparent w-[80px] justify-center flex h-[50px] items-center hover:bg-pink-700 rounded-3xl">
        <a href="https://github.com/BUSPV9836L">
          <AiFillGithub size={35} className="mx-4 cursor-pointer" />
        </a>
      </div>
      <div className="bg-transparent w-[80px] justify-center flex h-[50px] items-center hover:bg-pink-700 rounded-3xl">
        <a href="https://www.linkedin.com/in/bipin-vishwakarma-68a15a242/">
          <GrLinkedinOption size={35} className="mx-4 cursor-pointer" />
        </a>
      </div>
      <div className="bg-transparent w-[80px] justify-center flex h-[50px] items-center hover:bg-pink-700 rounded-3xl">
        <a href="https://twitter.com/BipinVi86565550">
          <BsTwitter size={35} className="mx-4 cursor-pointer hover:w-[50px]" />
        </a>
      </div>
      <div className="bg-transparent w-[80px] justify-center flex h-[50px] items-center hover:bg-pink-700 rounded-3xl">
        <a href="https://www.instagram.com/ll_b.i.p.i.n_ll_2709/">
          <AiFillInstagram size={35} className="mx-4 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
export default Links;
