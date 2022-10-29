import React from "react";

const Loading = () => {
  return (
    <div className=" fixed w-screen h-screen bg-gray-400 bg-opacity-70 flex justify-center items-center">
      <div className=" flex justify-center items-center gap-2 bg-black rounded-md px-6 py-4">
        <div className=" mx-auto loading w-5 h-5 rounded-full border-4 border-white border-r-4 border-r-transparent animate-spin"></div>
        <span className=" font-bold text-base text-white ">Vui lòng đợi</span>
      </div>
    </div>
  );
};

export default Loading;
