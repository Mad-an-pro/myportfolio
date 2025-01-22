import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = `relative px-4 py-2 cursor-pointer text-sm font-semibold ${
    active ? "text-white" : "text-gray-400"
  }`;

  return (
    <div className="relative group" onClick={selectTab}>
      <span className={buttonClasses}>{children}</span>
      <div
        className={`absolute left-0 bottom-0 h-1 bg-gradient-to-r from-green-400
             via-green-500 to-green-600 transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0"
        } group-hover:scale-x-100`}
        style={{ transformOrigin: "left" }}
      ></div>
    </div>
  );
};

export default TabButton;
 