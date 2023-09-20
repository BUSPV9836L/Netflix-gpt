import React from "react";

const GptSerachBar = () => {
  return (
      <div className="flex w-full justify-center z-20 -mt-[40%] border-spacing-0">
        <form className="">
          <input
            type="text"
            className="w-[400px] px-4 py-2 bg-slate-900 rounded-md text-white "
            placeholder="What would you like to watch today?"
          ></input>
          <button className="text-white text-lg px-4 py-2 ml-2 rounded-md mr-4 bg-gradient-to-b from-black hover:bg-black">Search</button>
        </form>
      </div>
  );
};

export default GptSerachBar;
