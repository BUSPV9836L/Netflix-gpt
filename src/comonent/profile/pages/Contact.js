import React from "react";

 const Contact = () => {
  return (
    <div id="contact" className="flex-col h-full w-[460px] sm:w-[600px] md:w-[1200px] px-4 py-6 bg-gradient-to-tr from-gray-500 rounded-lg mx-auto mt-5">
      <h1 className="text-center text-gray-700 font-bold text-5xl mt-5">Get In Touch</h1>
      <p className="mt-5 text-gray-700 text-lg">
        I’m currently searching for opportunities for a front-end developer
        role. If there is any vacancy my inbox is always open. Whether you have
        any further questions or just want to say hi, I’ll try my best to get
        back to you!
      </p>
      <div className="text-center ">
      <button className=" text-gray-700 text-lg mt-10 border-2  border-black px-6 py-2 hover:bg-black/30"><a href="mailto:bipinvishwakarma256@gmail.com?">Say Hello!</a></button>
      </div>
    </div>
  );
};
export default Contact;
