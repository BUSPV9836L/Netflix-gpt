import React from "react";
import NavBar from "../comonent/profile/ui/NavBar"
import Home from "../comonent/profile/pages/Home"
import Links from "../comonent/profile/pages/Links"
import FooterImage from "../comonent/profile/pages/FooterImage"
import About from "../comonent/profile/pages/About"
import Experience from "../comonent/profile/pages/Experience"
import Work from "../comonent/profile/pages/Work"
import Contact from "../comonent/profile/pages/Contact"
import Footer from "../comonent/profile/ui/Footer"
const Profile = () => {
  return (
    <div className=" absolute bg-gradient-to-b from-sky-950 w-[460px] sm:w-full ">
      <NavBar />
      <Home />
      <Links />
      <FooterImage />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Profile;
