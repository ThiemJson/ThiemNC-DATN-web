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

const Subjects = () => {
  return (
    <div className="w-[80%] h-screen m-10 bg-white rounded-lg shadow-xl mx-auto p-8 flex flex-col ">
      {/* Label */}
      <div className="flex flex-col gap-3 w-full">
        <p className="text-sm font-bold w-full">Chương trình đào tạo</p>
        <select
          name=""
          id=""
          className="px-3 py-2 w-full max-w-[300px] border text-base font-bold rounded-[inherit] bg-gray-100 "
        >
          <option value="cntt">Công nghệ thông tin</option>
          <option value="httt">Hệ thống thông tin</option>
          <option value="ktpm">Kỹ thuật phần mềm</option>
          <option value="anm">An ninh mạng</option>
        </select>
      </div>

      {/* table */}
      <table className="table-auto border-collapse border border-gray-200 mt-5 ">
        <thead>
          <tr>
            <THeadHeaderStyle className="border border-gray-200">
              STT
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Khối kiến thức
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Mã học phần
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Tên học phần
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Số tín chỉ
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Học kỳ
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
                Giáo dục quốc phòng an ninh
              </TRowHeaderStyle>
              <TRowHeaderStyle className="border border-gray-200">
                GDQP221
              </TRowHeaderStyle>
              <TRowHeaderStyle className="border border-gray-200">
                Công tác quốc phòng an ninh
              </TRowHeaderStyle>
              <TRowHeaderStyle className="border border-gray-200">
                1
              </TRowHeaderStyle>
              <TRowHeaderStyle className="border border-gray-200">
                3
              </TRowHeaderStyle>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subjects;
