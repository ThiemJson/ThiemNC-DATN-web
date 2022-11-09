import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { COMMON_COLOR_DARK_BLUE } from "../../Const";

const ControlButtonStyle =
  " px-3 py-1 rounded-md border border-gray-50 font-semibold text-white";

export const AddItemPortal = ({ title, isOpen, handleClose, fields }) => {
  if (!isOpen) return null;
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div className=" fixed inset-0 z-50 flex items-center justify-center p-5 modal">
      <div
        className=" absolute bg-black inset-0 bg-opacity-25 overlay "
        onClick={() => {
          handleClose(false);
        }}
      ></div>
      <div
        className={` flex flex-col w-[50%] relative z-10 max-w-[800px] p-5 bg-white rounded-lg model-content shadow-xl text-sm text-[${COMMON_COLOR_DARK_BLUE}] `}
      >
        <div className="header flex justify-between my-3 ">
          <span className="font-bold text-base">{title}</span>
          <div className="control-button flex gap-3 ">
            <button className={`${ControlButtonStyle} bg-blue-600`}>
              Xác nhận
            </button>
            <button
              className={`${ControlButtonStyle} bg-red-500 `}
              onClick={() => {
                handleClose(false);
              }}
            >
              Huỷ
            </button>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          {fields.map((field, index) => (
            <div className=" flex w-full p-2">
              <span className=" w-[50%] h-4 p-1 font-semibold ">
                {field[1]}
              </span>

              {/* Date */}

              {/* Radio */}
              {field[0] === "radio" && (
                <form className="flex">
                  {field[2].map((item, index) => (
                    <div className=" mx-3 flex gap-2 ">
                      <label htmlFor={item}>{item}</label>
                      <input type="radio" name="value" id={item} />
                    </div>
                  ))}
                </form>
              )}

              {/* Text */}
              {field[0] === "text" && (
                <input
                  type="text"
                  className="w-[50%] border border-gray-200 p-1 rounded-lg px-3 py-1"
                  defaultValue={field[2]}
                  placeholder={field[3]}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};
