import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "border-blue-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 md:text-xl cursor-pointer `}
      onClick={onClick}>
      {name}
    </button>
  );
};

export default ProjectTag;
