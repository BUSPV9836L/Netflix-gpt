import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { toggleProfilePage } from "../utils/profileSlice";
const Header = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const showProfilePage = useSelector(store => store?.profile?.showProfilePage)
  const showGptSearch = useSelector(store => store?.gpt?.showGptSearch)
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
        nagivate("/browse")
      } else {
        nagivate("/")
        dispatch(removeUser());
      }
    });
    // this will we called when componet get unmount
    return () => unsubscribe();
  }, []);
  const handelGptSearch = () => {
    if(showProfilePage){
      dispatch(toggleProfilePage())
    }
    dispatch(toggleGptSearch());
  };
  const handleProfile = () => {
    if(showGptSearch){
      dispatch(toggleGptSearch());
    }
   dispatch(toggleProfilePage())
  };
  const handelHome =() =>{
    if(showGptSearch){
      dispatch(toggleGptSearch());
    }
    else if (showProfilePage){
      dispatch(toggleProfilePage())
    }
  }
  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex h-fit justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {auth.currentUser ? (
        <div className="flex items-center">
          <button
            className="text-white font-bold text-lg px-4 py-2 rounded-md mr-4 bg-gradient-to-b from-lime-900 hover:bg-lime-900"
            onClick={handelHome}
          >
            Home
          </button>
          <button
            className="text-white font-bold text-lg px-4 py-2 rounded-md mr-4 bg-gradient-to-b from-lime-900 hover:bg-lime-900"
            onClick={handleProfile}
          >
            Profile
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
    </div>
  );
};

export default Header;
