import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2021 - 2022",
    title: "Video Game Tester - UBISOFT",
    duration: "1 year",
    details:
      "My role as a video game tester required strong attention to detail, great communication skills, and excellent problem-solving skills.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:px-20 px-8">
      <h2 className="text-4xl font-bold text-center text-customBlue mb-10">
        Work
      </h2>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
