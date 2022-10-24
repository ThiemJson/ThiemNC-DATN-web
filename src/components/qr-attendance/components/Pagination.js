import React from "react";
import * as FaIcons from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="m-5 flex justify-center items-center gap-3">
      <div className=" rounded-md w-[35px] h-[35px] flex justify-center items-center">
        <FaIcons.FaArrowLeft className=" w-4 h-4 " color="#777777" />
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9].map((item, index) => (
        <div
          key={index}
          className={
            index === 3
              ? `rounded-md w-[35px] h-[35px] border-2 border-[#636363] bg-[#636363] text-white flex justify-center items-center`
              : `rounded-md w-[35px] h-[35px] border-2 border-[#636363] text-[#636363] flex justify-center items-center`
          }
        >
          <span className=" text-sm font-bold m-auto">{index + 1}</span>
        </div>
      ))}
      <div className=" rounded-md w-[35px] h-[35px] flex justify-center items-center">
        <FaIcons.FaArrowRight className=" w-4 h-4 " color="#777777" />
      </div>
    </div>
  );
};

export default Pagination;
