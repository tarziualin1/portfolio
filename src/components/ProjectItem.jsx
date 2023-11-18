import React from "react";

const ProjectItem = ({ img, title, linkCode, linkApp, description }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-customBlue/70 transition hover:scale-105">
      <img
        src={img}
        alt="/"
        className="rounded-xl group-hover:opacity-10 h-[250px]"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-3/5">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center leading-[1.15rem]">
          {description}
        </p>
        <a href={linkCode} target="_blank" rel="noopener noreferrer">
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer transition text-lg mb-2 hover:scale-105">
            View Code
          </p>
        </a>
        <a href={linkApp} target="_blank" rel="noopener noreferrer">
          <p className="text-center p-2 rounded-lg bg-customOlive text-white font-bold cursor-pointer text-lg transition hover:scale-105">
            View App
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
