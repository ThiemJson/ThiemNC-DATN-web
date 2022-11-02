import React from "react";
import ReactDOM from "react-dom";

export const StudentPortal = () => {
  if (typeof document === "undefined") return <div></div>;
  return ReactDOM.createPortal(
    <div className=" fixed inset-0 z-50 flex items-center justify-center p-5 modal">
      <div className=" absolute bg-black inset-0 bg-opacity-25 overlay "></div>
      <div className=" relative z-10 w-[50%] h-[40%] max-w-[500px] p-10 bg-white rounded-lg model-content shadow-xl "></div>
    </div>,
    document.querySelector("body")
  );
};
