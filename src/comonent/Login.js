import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  
  const [isSignIn, setIsSignIn] = useState(true);
  const signUpHandler = (event) => {
    event.preventDefault();
    setIsSignIn((prev) => !prev);
  };
  return (
    <div className=" bg-black">
      <Header />
      <div className="absolute">
        <img
          className="opacity-100"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute text-white h-90 rounded-md bg-black bg-opacity-80 w-2/6 mt-20 mx-auto right-0 left-0 flex flex-col  px-12 py-20">
        <h1 className="text-3xl font-bold mb-5">{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn ? (
          <input
            className="h-12  my-4  rounded-sm px-4 bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        ) : (
          ""
        )}
        <input
          className="h-12  my-4  rounded-sm px-4 bg-gray-700"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="h-12   my-2 rounded-sm px-4 bg-gray-700"
          type="password"
          placeholder="Password"
        />
          <button className="h-12  mt-8 rounded-md px-4 bg-red-600">
            {isSignIn?"Sign In":"Sign Up"}
          </button>
        <p className="pt-6" >
          {isSignIn?"New to Netflix?":"Already a User?"} <button className="text-lg hover:underline" onClick={signUpHandler}>{isSignIn?"Sign Up Now":"Sign In Now"}</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
