import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import img6 from "../assets/img7.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-screen object-cover object-center scale-x-[-1] -z-20"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/60">
        <div className="max-w-[1040px] mx-auto h-full w-full flex flex-col xl:flex-row items-center justify-center xl:justify-start xl:pl-20">
          <div className="relative mb-10 xl:mb-0 xl:mr-10 xl:w-1/2">
            <div className="absolute inset-0 bg-black/50 blur-xl z-10 rounded-full xl:w-9/12"></div>
            <div className="z-20 relative">
              <h1 className="sm:text-5xl text-4xl font-bold text-white/80">
                I'm Tarziu Alin
              </h1>
              <h2 className="flex sm:text-3xl text-2xl pt-4 text-white/80">
                I'm a
                <TypeAnimation
                  sequence={[
                    "Developer",
                    1000, // Waits 1s
                    "Coder", //
                    2000, // Waits 2s
                    "Tech Enthusiast",
                    2000,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "1em", paddingLeft: "8px" }}
                />
              </h2>
              <div className="flex justify-between pt-6 max-w-[70px] w-full">
                <FaGithub
                  className="cursor-pointer text-white/70 hover:scale-125 ease-in duration-100"
                  size={25}
                />
                <FaLinkedinIn
                  className="cursor-pointer text-white/70 hover:scale-125 ease-in duration-100"
                  size={25}
                />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start xl:w-max relative z-20 transition scale-75 md:scale-125 lg:hover:scale-150">
            <img
              src={img6}
              alt="Tarziu Alin Image"
              className="rounded-full h-64 w-64 object-cover xl:self-start relative z-40"
            />
            <div className="absolute h-64 w-64 inset-0 bg-black/30  z-50 rounded-full"></div>
            <div className="absolute h-64 w-64 inset-0 bg-black blur-xl z-30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
