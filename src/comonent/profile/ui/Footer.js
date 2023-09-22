import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
 const Footer = () => {
  return (
    <div className="flex-col text-gray-900 h-full w-[460px] sm:w-[600px] md:w-[1200px] px-4 py-6  mx-auto mt-5 border-t-2 border-gray-700">
      <h1 className="flex items-center justify-center">
        <span>
          <AiOutlineCopyrightCircle />
        </span>
        <span>Copyright 2023.</span>
      </h1>
      <p className="flex justify-center">
        Designed & Build by <span className="font-bold">Bipinvishwakarma</span>
      </p>
    </div>
  );
};
export default Footer;
