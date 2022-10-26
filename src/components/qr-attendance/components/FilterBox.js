import React from "react";
import { COMMON_COLOR } from "../Const";
import styled from "styled-components";

const InputoutlineStyle = styled.input`
  input:focus,
  textarea:focus {
    outline: none;
  }
`;

export const FilterBox = () => {
  return (
    <div className="flex border-2 border-gray-300 rounded-md">
      <InputoutlineStyle
        type="text"
        className={` no-underline px-2 py-1 text-[${COMMON_COLOR}] text-sm font-semibold focus:outline-0 rounded-[inherit] `}
        placeholder="Tìm kiếm ..."
      />
    </div>
  );
};
