import React from "react";
import ReactDOM from "react-dom";
import { COMMON_COLOR_DARK_BLUE } from "../../Const";
import MD5 from "crypto-js/md5";
import styled, { createGlobalStyle } from "styled-components";
import GC from "@grapecity/spread-sheets";

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

export const StudentPortal = ({ title, isOpen, handleClose, isCSVMode }) => {
  if (!isOpen) return null;
  if (typeof document === "undefined") return null;

  const onCSVSubmitted = (e) => {
    console.log(e.target.files[0]);
    var workbook = new GC.Spread.Sheets.Workbook(e.target);
    var worksheet = workbook.getActiveSheet();
    console.log(worksheet.getCell(0, 1));
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
              <input type="file" name="" id="" onChange={onCSVSubmitted} />
            </div>
            <div className=" flex gap-2 ">
              <span>File mẫu</span>
              <a
                href="StudentPortal.js"
                download
                className="text=sm text-blue-500 italic "
              >
                Danh sách sinh viên mẫu.csv
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
                  Mã sinh viên
                </THeadHeaderStyle>
                <THeadHeaderStyle className="border border-gray-200">
                  Họ và tên
                </THeadHeaderStyle>
                <THeadHeaderStyle className="border border-gray-200">
                  Ngày sinh
                </THeadHeaderStyle>
                <THeadHeaderStyle className="border border-gray-200">
                  Giới tính
                </THeadHeaderStyle>
                <THeadHeaderStyle className="border border-gray-200">
                  Mật khẩu tài khoản
                </THeadHeaderStyle>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 4].map(
                (
                  {
                    ID,
                    MaSV,
                    Hoten,
                    Ngaysinh,
                    Gioitinh,
                    MaThietbi,
                    MaFCM,
                    Matkhau,
                  },
                  index
                ) => {
                  const dateOfBirth = Ngaysinh;
                  return (
                    <tr key={index} className=" cursor-pointer ">
                      <TRowHeaderStyle className="border border-gray-200">
                        {ID}
                      </TRowHeaderStyle>
                      <TRowHeaderStyle className="border border-gray-200">
                        {MaSV}
                      </TRowHeaderStyle>
                      <TRowHeaderStyle className="border border-gray-200 text-left">
                        {Hoten}
                      </TRowHeaderStyle>
                      <TRowHeaderStyle className="border border-gray-200 text-left">
                        {dateOfBirth}
                      </TRowHeaderStyle>
                      <TRowHeaderStyle className="border border-gray-200">
                        {Gioitinh}
                      </TRowHeaderStyle>
                      <TRowHeaderStyle className="border border-gray-200">
                        {""}
                      </TRowHeaderStyle>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        )}
        {!isCSVMode && (
          <div className=" flex flex-col justify-center items-center ">
            {/* MSV */}
            <div className=" flex w-full p-2">
              <span className=" w-[50%] h-4 p-1 font-semibold ">
                Mã sinh viên
              </span>
              <input
                type="text"
                className="w-[50%] border border-gray-200 p-1 rounded-lg px-3 py-1"
                defaultValue={""}
                placeholder={""}
              />
            </div>

            {/* Họ và tên */}
            <div className=" flex w-full p-2">
              <span className=" w-[50%] h-4 p-1 font-semibold ">Họ và tên</span>
              <input
                type="text"
                className="w-[50%] border border-gray-200 p-1 rounded-lg px-3 py-1"
                defaultValue={""}
                placeholder={""}
              />
            </div>

            {/* NS */}
            <div className=" flex w-full p-2">
              <span className=" w-[50%] h-4 p-1 font-semibold ">Ngày sinh</span>
              <input
                type="date"
                className="w-[50%] border border-gray-200 p-1 rounded-lg px-3 py-1"
                defaultValue={""}
                placeholder={""}
              />
            </div>

            {/* Giới tính */}
            <div className=" flex w-full p-2 ">
              <span className=" w-[50%] h-4 p-1 font-semibold ">Giới tính</span>
              <div className=" w-[50%] h-4 flex gap-4">
                <div className="flex gap-1">
                  <label htmlFor="nam">Nam</label>
                  <input type="radio" name="gender" id="nam" />
                </div>
                <div className="flex gap-1">
                  <label htmlFor="nu">Nữ</label>
                  <input type="radio" name="gender" id="nu" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.querySelector("body")
  );
};
