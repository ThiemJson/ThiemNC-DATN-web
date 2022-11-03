import React from "react";
import { useRef } from "react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import { COMMON_COLOR_DARK_BLUE } from "../Const";

const IconSmall = `w-5 h-5`;
const IconHeader = `w-5 h-5`;
const TextStyle = `text-white text-sm font-semibold`;
const ButtonStyle = `flex gap-2 justify-center items-center bg-[${COMMON_COLOR_DARK_BLUE}] rounded-lg py-2 px-3 w-full`;
const RowStyle = `flex justify-center items-left p-3 bg-white rounded-lg shadow-lg`;
const SpanStyle = `text-sm text-[${COMMON_COLOR_DARK_BLUE}] font-semibold `;

export const AddItem = ({ addItemClicked, addCSVClicked }) => {
  const [show, setShow] = useState(false);
  const refTimer = useRef(null);

  return (
    <div className=" relative flex flex-col gap-1 justify-center items-end  cursor-pointer transition-all w-full max-w-[200px] ">
      <div
        onClick={() => {
          setShow(!show);
          if (refTimer.current !== null) {
            clearTimeout(refTimer.current);
          }
          refTimer.current = setTimeout(() => {
            setShow(false);
          }, 5000);
        }}
      >
        {show ? (
          <div className={ButtonStyle}>
            <AiIcons.AiOutlineMinus color={`white`} className={IconHeader} />
            <p className={TextStyle}>Thêm mới</p>
          </div>
        ) : (
          <div className={ButtonStyle}>
            <AiIcons.AiOutlinePlus color={`white`} className={IconHeader} />
            <p className={TextStyle}>Thêm mới</p>
          </div>
        )}
      </div>
      {show && (
        <div className=" flex flex-col gap-2 items-end absolute bottom-0 translate-y-[110%] w-[200px] transition-all ease-in-out delay-150">
          <div
            className={RowStyle}
            onClick={(e) => {
              setShow(false);
              addItemClicked(e);
            }}
          >
            <GrIcons.GrDocumentText
              color={COMMON_COLOR_DARK_BLUE}
              className={IconSmall}
            />
            <span className={SpanStyle}>Thêm</span>
          </div>
          <div
            className={RowStyle}
            onClick={(e) => {
              setShow(false);
              addCSVClicked(e);
            }}
          >
            <GrIcons.GrDocumentCsv
              color={COMMON_COLOR_DARK_BLUE}
              className={IconSmall}
            />
            <span className={SpanStyle}>Thêm danh sách</span>
          </div>
        </div>
      )}
    </div>
  );
};
