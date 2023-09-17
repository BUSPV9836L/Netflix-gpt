import React, { useRef, useState } from "react";
import Header from "./Header";
import { validatesigninForm, validatesignupForm } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const signUpHandler = (event) => {
    event.preventDefault();
    setIsSignIn((prev) => !prev);
  };
  const handelClick = (event) => {
    event.preventDefault();
    if (isSignIn) {
      const message = validatesigninForm(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
    } else {
      const message = validatesignupForm(
        email.current.value,
        password.current.value,
        name.current.value
      );
      setErrorMessage(message);
    }
    if (!errorMessage == null) {
      return;
    }
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
    }
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
        <h1 className="text-3xl font-bold mb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            ref={name}
            className="h-12  my-4  rounded-sm px-4 bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          className="h-12  my-4  rounded-sm px-4 bg-gray-700"
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="h-12   my-2 rounded-sm px-4 bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <button
          className="h-12  mt-8 rounded-md px-4 bg-red-600"
          onClick={handelClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-900 font-bold">{errorMessage}</p>
        <p className="pt-6">
          {isSignIn ? "New to Netflix?" : "Already a User?"}{" "}
          <button className="text-lg hover:underline" onClick={signUpHandler}>
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
