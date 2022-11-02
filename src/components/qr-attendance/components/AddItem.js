import React from "react";
import { useRef } from "react";
import { Fragment } from "react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import { COMMON_COLOR_DARK_BLUE } from "../Const";

const IconSmall = `w-5 h-5`;
const IconHeader = `w-10 h-10`;
const RowStyle = `flex justify-center items-left p-3 bg-white rounded-lg shadow-lg`;
const SpanStyle = `text-sm text-[${COMMON_COLOR_DARK_BLUE}] font-semibold `;

export const AddItem = () => {
  const [show, setShow] = useState(false);
  const refTimer = useRef(null);

  return (
    <div className=" relative flex flex-col gap-1 justify-center items-center cursor-pointer transition-all">
      <div
        onClick={() => {
          setShow(!show);
          if (refTimer.current !== null) {
            clearTimeout(refTimer.current);
          }
          refTimer.current = setTimeout(() => {
            // setShow(false);
          }, 5000);
        }}
      >
        {show ? (
          <AiIcons.AiOutlineMinusCircle
            color={COMMON_COLOR_DARK_BLUE}
            className={IconHeader}
          />
        ) : (
          <AiIcons.AiOutlinePlusCircle
            color={COMMON_COLOR_DARK_BLUE}
            className={IconHeader}
          />
        )}
      </div>
      {show && (
        <div className=" flex flex-col inset-0 gap-2 items-start absolute bottom-0 translate-y-[110%] w-[200px] transition-all ease-in-out delay-150">
          <div className={RowStyle} onClick={console.log("Show add")}>
            <GrIcons.GrDocumentText
              color={COMMON_COLOR_DARK_BLUE}
              className={IconSmall}
            />
            <span className={SpanStyle}>Thêm</span>
          </div>
          <div className={RowStyle} onClick={console.log("Show add list")}>
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
