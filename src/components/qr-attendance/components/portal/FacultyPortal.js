import React from "react";
import ReactDOM from "react-dom";
import { COMMON_COLOR_DARK_BLUE } from "../../Const";
import styled from "styled-components";
import Papa from "papaparse";
import { useState, useEffect } from "react";

const allowedExtensions = ["csv"];

const ControlButtonStyle =
  " px-3 py-1 rounded-md border border-gray-50 font-semibold text-white";

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

export const FacultyPortal = ({ title, isOpen, handleClose, isCSVMode }) => {
  const [data, setData] = useState([]); // It state will contain the error when // correct file extension is not used
  const [error, setError] = useState(""); // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  useEffect(() => {
    return () => {
      setData([]);
      setFile("");
    };
  }, []);

  if (!isOpen) return null;
  if (typeof document === "undefined") return null; // the file input changes

  // This function will be called when
  const handleFileChange = (e) => {
    setError(""); // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0]; // Check the file extensions, if it not // included in the allowed extensions // we show the error
      const fileExtension = inputFile?.name.split(".")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFile(inputFile);

      const reader = new FileReader();
      reader.onload = async ({ target }) => {
        const csv = Papa.parse(target.result, { header: true });
        const parsedData = csv?.data;
        setData(parsedData);
      };
      reader.readAsText(inputFile, "CP1251");
    }
  };

  return ReactDOM.createPortal(
    <div className=" fixed inset-0 z-50 flex items-center justify-center p-5 modal">
      <div
        className=" absolute bg-black inset-0 bg-opacity-25 overlay "
        onClick={() => {
          handleClose(false);
        }}
      ></div>
      <div
        className={` flex flex-col w-[70%] relative z-10 p-5 bg-white rounded-lg model-content shadow-xl text-sm text-[${COMMON_COLOR_DARK_BLUE}] `}
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

        {/* Tải file mẫu */}
        {isCSVMode && (
          <div className="flex justify-between">
            <div className=" flex gap-2 ">
              <input
                id=""
                onChange={handleFileChange}
                name="file"
                type="File"
              />
            </div>
            <div className=" flex gap-2 ">
              <span>File mẫu</span>
              <a
                href="../../csv/student.csv"
                download
                className="text=sm text-blue-500 italic "
              >
                Danh sách ngành học mẫu.csv
              </a>
            </div>
          </div>
        )}

        {isCSVMode && (
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
              {data.slice(0, 10).map((item, index) => {
                return (
                  <tr key={index} className=" cursor-pointer ">
                    <TRowHeaderStyle className="border border-gray-200">
                      {index}
                    </TRowHeaderStyle>
                    <TRowHeaderStyle className="border border-gray-200">
                      {item["manganh"]}
                    </TRowHeaderStyle>
                    <TRowHeaderStyle className="border border-gray-200 text-left">
                      {item["tennganh"]}
                    </TRowHeaderStyle>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {!isCSVMode && (
          <div className=" flex flex-col justify-center items-center ">
            {/* MSV */}
            <div className=" flex w-full p-2">
              <span className=" w-[50%] h-4 p-1 font-semibold ">Mã ngành</span>
              <input
                type="text"
                className="w-[50%] border border-gray-200 p-1 rounded-lg px-3 py-1"
                defaultValue={""}
                placeholder={""}
              />
            </div>

            {/* Họ và tên */}
            <div className=" flex w-full p-2">
              <span className=" w-[50%] h-4 p-1 font-semibold ">Tên ngành</span>
              <input
                type="text"
                className="w-[50%] border border-gray-200 p-1 rounded-lg px-3 py-1"
                defaultValue={""}
                placeholder={""}
              />
            </div>
          </div>
        )}
      </div>
    </div>,
    document.querySelector("body")
  );
};
