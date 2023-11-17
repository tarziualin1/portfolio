import React from "react";
import ProjectItem from "./ProjectItem";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto px-8 pt-8 pb-16 md:px-32 xl:px-16 "
    >
      <h2 className="text-4xl font-bold text-center text-customBlue mb-10">
        Projects
      </h2>
      <p className="my-2 text-base font-normal text-stone-500 mb-10 text-center">
        Showcasing my growing skills in creating engaging and user-friendly web
        experiences. Explore my projects to see my proficiency in responsive
        design, intuitive interfaces, and modern technologies like: <br />
        <strong>
          HTML, CSS, JavaScript, React, Framer Motion, TailwindCSS, Figma
        </strong>
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProjectItem
          img={img1}
          title="Recipe App "
          link="https://recipes-app-11.netlify.app"
          description="A React and Tailwind CSS-powered recipe app utilizing the Spoonacular API"
        />
        <ProjectItem img={img2} title="Turtle" link="" />
        <ProjectItem img={img3} title="Cat" link="" />
      </div>
    </div>
  );
};

export default Projects;
