import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { toggleProfilePage } from "../utils/profileSlice";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const showProfilePage = useSelector(
    (store) => store?.profile?.showProfilePage
  );
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        nagivate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        nagivate("/browse");
      } else {
        nagivate("/");
        dispatch(removeUser());
      }
    });
    // this will we called when componet get unmount
    return () => unsubscribe();
  }, []);
  const handelGptSearch = () => {
    if (showProfilePage) {
      dispatch(toggleProfilePage());
    }
    dispatch(toggleGptSearch());
  };
  const handleProfile = () => {
    if (showGptSearch) {
      dispatch(toggleGptSearch());
    }
    dispatch(toggleProfilePage());
  };
  const handelHome = () => {
    if (showGptSearch) {
      dispatch(toggleGptSearch());
    } else if (showProfilePage) {
      dispatch(toggleProfilePage());
    }
  };
  const handelHamburger = () => {
    setShowHeader((prev)=>{return !prev})
  };
  return (
    <div className="w-full absolute sm:px-8 sm:py-2 bg-gradient-to-b from-black z-10 flex h-fit justify-between">
      <img className="w-44 hidden sm:block" src={LOGO} alt="logo" />
      <div className="flex sm:hidden items-center w-full justify-between">
        <img className="w-32" src={LOGO} alt="logo" />
        {auth.currentUser?<GiHamburgerMenu className="z-20 mr-4" onClick={handelHamburger} color="white" size={30} />:""}
      </div>
      {auth.currentUser ? (
        <div className="sm:flex items-center hidden ">
          <button
            className="text-white font-bold text-lg px-4 py-2 rounded-md mr-4 bg-gradient-to-b from-lime-900 hover:bg-lime-900"
            onClick={handelHome}
          >
            Home
          </button>
          <button
            className="text-white font-bold text-lg px-4 py-2 rounded-md mr-4 bg-gradient-to-b from-lime-900 hover:bg-lime-900"
            onClick={handelGptSearch}
          >
            GPT Search
          </button>
          <button
            className="text-white font-bold text-lg px-4 py-2 rounded-md mr-4 bg-gradient-to-b from-lime-900 hover:bg-lime-900"
            onClick={handelSignOut}
          >
            Log Out
          </button>
          <img
            className="w-10 h-10 rounded-md"
            src={auth.currentUser.photoURL}
            alt="user"
          />
        </div>
      ) : (
        ""
      )}
      {auth.currentUser ? (
        <div className={showHeader?"absolute pt-20 bg-black opacity-95 h-screen w-screen flex justify-center  text-white":" hidden"} onClick={handelHamburger}>
          <ul>
            <li className="py-1 px-4 rounded-md text-xl hover:bg-gray-800 w-fit" onClick={handelHome}>Home</li>
            {/* <li className="py-1 px-4 rounded-md text-xl hover:bg-gray-800 w-fit" onClick={handleProfile}>Profile</li> */}
            <li className="py-1 px-4 rounded-md text-xl hover:bg-gray-800 w-fit" onClick={handelGptSearch}>Gpt Search</li>
            <li className="py-1 px-4 rounded-md text-xl hover:bg-gray-800 w-fit" onClick={handelSignOut}>Log Out</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
