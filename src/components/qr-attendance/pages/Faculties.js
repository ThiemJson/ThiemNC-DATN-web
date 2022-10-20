import React from "react";
import styled from "styled-components";

const THeadHeaderStyle = styled.th`
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  color: white;
  background-color: #636363;
`;

const TRowHeaderStyle = styled.th`
  padding: 8px;
  font-weight: 600;
  font-size: 12px;
  color: black;
`;
const Faculties = () => {
  return (
    <div className="w-[80%] h-screen m-10 bg-white rounded-lg shadow-xl mx-auto p-8 flex flex-col ">
      {/* Label */}
      <div className="flex flex-col gap-3 w-full">
        <p className="text-sm font-bold w-full">Ngành học</p>
      </div>

      {/* table */}
      <table className="table-auto border-collapse border border-gray-200 mt-5 ">
        <thead>
          <tr>
            <THeadHeaderStyle className="border border-gray-200">
              STT
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Mã ngành
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Tên ngành
            </THeadHeaderStyle>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <tr>
              <TRowHeaderStyle className="border border-gray-200">
                {index + 1}
              </TRowHeaderStyle>
              <TRowHeaderStyle className="border border-gray-200">
                TLA106
              </TRowHeaderStyle>
              <TRowHeaderStyle className="border border-gray-200">
                Công nghệ thông tin
              </TRowHeaderStyle>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculties;
