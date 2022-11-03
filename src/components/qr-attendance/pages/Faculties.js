import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { AddItem } from "../components/AddItem";
import { FilterBox } from "../components/FilterBox";
import { getFaculty } from "../services/FacultiesService";

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
  const [faculties, setFaculties] = useState([]);
  const [facultiesFiltered, setFacultiesFiltered] = useState([]);
  const validator = ({ MaKhoa, TenKhoa }, text) => {
    const inputString = `${MaKhoa}${TenKhoa}`.toLowerCase();
    return inputString.includes(text.toLowerCase());
  };

  useEffect(() => {
    getFaculty()
      .then((result) => {
        setFaculties(result.data);
        setFacultiesFiltered(result.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="w-[80%]  m-10 bg-white rounded-lg shadow-xl mx-auto p-8 flex flex-col ">
      {/* Label */}
      <div className="flex justify-between w-full">
        <p className="text-sm font-bold">Ngành học</p>
        <div className="flex gap-2">
          <FilterBox
            className="w-[200px] h-full "
            items={faculties}
            validator={validator}
            dispatch={setFacultiesFiltered}
          ></FilterBox>
          <AddItem
            addItemClicked={(e) => {
              console.log("addItemClicked");
            }}
            addCSVClicked={(e) => {
              console.log("addCSVClicked");
            }}
          ></AddItem>
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
              Mã ngành
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Tên ngành
            </THeadHeaderStyle>
          </tr>
        </thead>
        <tbody>
          {facultiesFiltered
            .slice(0, 10)
            .map(({ ID, MaKhoa, TenKhoa }, index) => (
              <tr key={index} className=" cursor-pointer ">
                <TRowHeaderStyle className="border border-gray-200">
                  {ID}
                </TRowHeaderStyle>
                <TRowHeaderStyle className="border border-gray-200">
                  {MaKhoa}
                </TRowHeaderStyle>
                <TRowHeaderStyle className="border border-gray-200">
                  {TenKhoa}
                </TRowHeaderStyle>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculties;
