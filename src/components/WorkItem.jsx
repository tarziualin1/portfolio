import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-300 md:mx-16 xl:mx-0">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border-stone-300" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-customBlue rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-customBlue">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">{details}</p>
        <ul className="text-base font-normal text-stone-500 list-disc ml-6">
          <li>Tested video games for bugs and glitches</li>
          <li>Reported found issues to game developers</li>
          <li>Created detailed reports of bugs and issues</li>
          <li>Helped developers recreate and ﬁx issues</li>
          <li>Used JIRA to communicate and report bugs</li>
        </ul>
      </li>
    </ol>
  );
};

export default WorkItem;
