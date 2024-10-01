import React from "react";

const Overview = () => {
  return (
    <div >
      <div className="h-[350px] m-20 w-[700px] bg-purple-200 flex rounded-xl z-10  border-solid border-gray-300  ">
        <div className="h-full w-[250px] p-7 text-white bg-purple-400 rounded-l-xl">
          <p className="text-[11px] tracking-widest text-[#cccc]">
            PROJECT TITLE:
          </p>
          <h1 className="text-[25px] pt-5 font-medium tracking-wide leading-[25px]">
            Departmental Lecture Repository System
          </h1>
          <h4 className="text-[12px] pt-[50px] text-[#cccccc] cursor-pointer">
            view all departments <i class="fa-solid fa-chevron-right"></i>
          </h4>
        </div>

        <div className="p-7 bg-white w-full rounded-r-xl relative">
          <h1 className="text-[28px] pt-2 font-[500] tracking-wide">
            Overview
          </h1>
          <p className="text-gray-400 py-5">
            Dlrs provides a comprehensive analysis and design for the
            Departmental Lecture Repository System. The system aims to store,
            manage, and retrieve lecture materials efficiently, providing a
            centralized platform for faculty and students.
          </p>
          {/* <input
            type="button"
            value="Continue"
            className="h-10 w-[120px] bg-purple-500 text-white rounded-3xl tracking-wide absolute right-10 bottom-7 cursor-pointer hover:bg-purple-200"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
