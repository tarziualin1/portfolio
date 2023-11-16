import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };

  return (
    <div>
      {nav ? (
        <AiOutlineClose
          size={30}
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer hover:scale-110 ease-in duration-100"
        />
      ) : (
        <AiOutlineMenu
          size={30}
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer hover:scale-110 ease-in duration-100 text-white/80"
        />
      )}

      {nav ? (
        <div className="fixed w-full h-screen bg-white/60 backdrop-blur-md flex flex-col justify-center items-center md:hidden z-50">
          <a onClick={handleNav} href="#main" className="nav-link-style ">
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a onClick={handleNav} href="#about" className="nav-link-style">
            <BsPerson size={20} />
            <span className="pl-4">About me</span>
          </a>
          <a onClick={handleNav} href="#work" className="nav-link-style">
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a onClick={handleNav} href="#projects" className="nav-link-style">
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a onClick={handleNav} href="#contact" className="nav-link-style">
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] left-0 z-10 xl:ml-10 ml-6">
        <div className="flex flex-col">
          <a href="#main" className="sidenav-link-style elem-1">
            <AiOutlineHome size={20} />
          </a>
          <a href="#about" className="sidenav-link-style elem-2">
            <BsPerson size={20} />
          </a>
          <a href="#work" className="sidenav-link-style elem-3">
            <GrProjects size={20} />
          </a>
          <a href="#projects" className="sidenav-link-style elem-4">
            <AiOutlineProject size={20} />
          </a>
          <a href="#contact" className="sidenav-link-style elem-5">
            <AiOutlineMail size={20} />
          </a>
          <Tooltip anchorSelect=".elem-1" place="right">
            Home
          </Tooltip>
          <Tooltip anchorSelect=".elem-2" place="right">
            About Me
          </Tooltip>
          <Tooltip anchorSelect=".elem-3" place="right">
            Work
          </Tooltip>
          <Tooltip anchorSelect=".elem-4" place="right">
            Projects
          </Tooltip>
          <Tooltip anchorSelect=".elem-5" place="right">
            Contact
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
