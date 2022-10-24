import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getRooms } from "../services/RoomService";

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

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms()
      .then((result) => {
        setRooms(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-[80%] h-screen m-10 bg-white rounded-lg shadow-xl mx-auto p-8 flex flex-col ">
      {/* Label */}
      <div className="flex flex-col gap-3 w-full">
        <p className="text-sm font-bold w-full">Phòng học</p>
      </div>

      {/* table */}
      <table className="table-auto border-collapse border border-gray-200 mt-5 ">
        <thead>
          <tr>
            <THeadHeaderStyle className="border border-gray-200">
              STT
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Mã phòng học
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Tên phòng học
            </THeadHeaderStyle>
            <THeadHeaderStyle className="border border-gray-200">
              Địa chỉ
            </THeadHeaderStyle>
          </tr>
        </thead>
        <tbody>
          {rooms.slice(0, 10).map(({ ID, MaPH, TenPH, Diachi }, index) => (
            <tr key={index}>
              <TRowHeaderStyle className="border border-gray-200">
                {ID}
              </TRowHeaderStyle>
              <TRowHeaderStyle className="border border-gray-200">
                {MaPH}
              </TRowHeaderStyle>
              <TRowHeaderStyle className="border border-gray-200">
                {TenPH}
              </TRowHeaderStyle>
              <TRowHeaderStyle className="border border-gray-200">
                {Diachi}
              </TRowHeaderStyle>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;
