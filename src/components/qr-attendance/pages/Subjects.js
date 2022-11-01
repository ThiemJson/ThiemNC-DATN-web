import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { FilterBox } from "../components/FilterBox";
import { getSubjects } from "../services/SubjectService";

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
  const [subjects, setSubject] = useState([]);
  const [subjectsFiltered, setSubjectsFiltered] = useState([]);
  const validator = ({ MaMH, TenMonhoc }, text) => {
    const inputString = `${MaMH}${TenMonhoc}`.toLowerCase();
    return inputString.includes(text.toLowerCase());
  };

  useEffect(() => {
    getSubjects()
      .then((result) => {
        setSubject(result.data);
        setSubjectsFiltered(result.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="w-[80%] m-10 bg-white rounded-lg shadow-xl mx-auto p-8 flex flex-col ">
      {/* Label */}
      <div className="flex flex-col gap-3 w-full">
        <p className="text-sm font-bold w-full">Chương trình đào tạo</p>
        <div className="w-full flex justify-between ">
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
          <FilterBox
            className="w-[200px] h-full "
            items={subjects}
            validator={validator}
            dispatch={setSubjectsFiltered}
          ></FilterBox>
        </div>
      </div>

      {/* table */}
      <table className="table-auto border-collapse border border-gray-200 mt-5 ">
        <thead>
          <tr>
            <THeadHeaderStyle className="border border-gray-200">
              STT
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
          {subjectsFiltered.map(
            ({ ID, Hocky, MaMH, Sotinchi, TenMonhoc }, index) => (
              <tr key={index}>
                <TRowHeaderStyle className="border border-gray-200">
                  {ID}
                </TRowHeaderStyle>
                <TRowHeaderStyle className="border border-gray-200">
                  {MaMH}
                </TRowHeaderStyle>
                <TRowHeaderStyle className="border border-gray-200 text-left">
                  {TenMonhoc}
                </TRowHeaderStyle>
                <TRowHeaderStyle className="border border-gray-200">
                  {Sotinchi}
                </TRowHeaderStyle>
                <TRowHeaderStyle className="border border-gray-200">
                  {Hocky}
                </TRowHeaderStyle>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Subjects;
