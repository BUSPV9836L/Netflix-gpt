import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
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
        // ...
      } else {
        dispatch(removeUser());
        nagivate("/");
      }
    });
    // this will we called when componet get unmount
    return () => unsubscribe();
  }, []);
  const handelGptSearch = () =>{
    dispatch(toggleGptSearch())
  }
  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {auth.currentUser ? (
        <div className="flex items-center">
          <button className="text-white font-bold text-lg px-4 py-2 rounded-md mr-4 bg-gradient-to-b from-lime-900 hover:bg-lime-900"
          onClick={handelGptSearch}>
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
