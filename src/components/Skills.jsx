import React from "react";

function Skills() {
  return (
    <div
      id="skills"
      className="bg-[#1f242d] w-[90%] lg:w-[80%] mx-auto px-4 sm:px-14 "
    >
      <h1 className="text-white text-[24px] text-center font-semibold font-poppins pt-6 mb-6">
        My <span className="text-[#0ef]">Skills</span>
      </h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <div className="w-full">
          <h1 className="mb-1 text-base font-medium font-poppins text-white">
            HTML
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-[95%]"></div>
          </div>
        </div>

        <div className="w-full">
          {" "}
          <h1 className="mb-1 text-base font-medium font-poppins text-white">
            CSS
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-11/12"></div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="mb-1 text-base font-medium font-poppins text-white">
            Bootstrap
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-[85%]"></div>
          </div>
        </div>

        <div className="w-full">
          {" "}
          <h1 className="mb-1 text-base font-medium font-poppins text-white">
            Tailwind Css
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-[85%]"></div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="mb-1 text-base font-medium font-poppins text-white">
            Javascript
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-[85%]"></div>
          </div>
        </div>

        <div className="w-full">
          {" "}
          <h1 className="mb-1 text-base font-medium font-poppins text-white">
            React js
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-[75%]"></div>
          </div>
        </div>
        <div className="w-full mb-2">
          {" "}
          <h1 className="mb-1 text-base font-medium font-poppins text-white">
            Next js
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-[80%]"></div>
          </div>
        </div>
        <div className="w-full">
          {" "}
          <h1 className="mb-1 text-base font-medium font-poppins text-white">
            GIT & GitHub
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-[80%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
