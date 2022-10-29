import React from "react";
import { COMMON_COLOR } from "../Const";
import styled from "styled-components";
import _ from "lodash";

const InputoutlineStyle = styled.input`
  input:focus,
  textarea:focus {
    outline: none;
  }
`;

export const FilterBox = ({ items, validator, dispatch }) => {
  return (
    <div className="flex border-2 border-gray-300 rounded-md">
      <InputoutlineStyle
        type="text"
        className={` no-underline px-2 py-1 text-[${COMMON_COLOR}] text-sm font-semibold focus:outline-0 rounded-[inherit] `}
        placeholder="Tìm kiếm ..."
        onChange={_.debounce((event) => {
          const text = event.target.value;
          const result = items.filter((item) => validator(item, text));
          dispatch(result);
        }, 1000)}
      />
    </div>
  );
};
