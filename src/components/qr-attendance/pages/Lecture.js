import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import MD5 from "crypto-js/md5";
import { getLecture } from "../services/LectureService";
import { FilterBox } from "../components/FilterBox";
import { AddItem } from "../components/AddItem";
import { Fragment } from "react";
import { LecturePortal } from "../components/portal/LecturePortal";

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

const SpanTextStyle = styled.span`
  padding: 4px;
  text-align: left;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  font-weight: bold;
`;

const ContentSpanTextStyle = styled.span`
  padding: 4px;
  text-align: left;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
`;
const Lecture = () => {
  const [lectures, setLecture] = useState([]);
  const [lecturesFiltered, setLecturesFiltered] = useState([]);
  const [addItemPortalShow, setAddItemPortalShow] = useState(false);
  const [isCSVMode, setisCSVMode] = useState(false);

  const validator = ({ MaGV, Hoten }, text) => {
    const inputString = `${MaGV}${Hoten}`.toLowerCase();
    return inputString.includes(text.toLowerCase());
  };

  useEffect(() => {
    getLecture()
      .then((result) => {
        setLecture(result.data);
        setLecturesFiltered(result.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <Fragment>
      {addItemPortalShow && (
        <LecturePortal
          title={`Thêm giảng viên`}
          isOpen={addItemPortalShow}
          isCSVMode={isCSVMode}
          handleClose={setAddItemPortalShow}
        ></LecturePortal>
      )}
      <div className="flex flex-col gap-5 mt-5">
        {/* <div className="w-[80%] mt-5 bg-white rounded-lg shadow-xl mx-auto p-4 flex justify-center items-center ">
        <div className=" w-[50%] h-full flex justify-center items-center ">
          <div className=" w-[30%] h-full flex flex-col ">
            <ContentSpanTextStyle>Họ và tên</ContentSpanTextStyle>
            <ContentSpanTextStyle>Mã giảng viên</ContentSpanTextStyle>
            <ContentSpanTextStyle>Đơn vị</ContentSpanTextStyle>
          </div>
          <div className=" w-[70%] h-full flex flex-col ">
            <SpanTextStyle>Nguyễn Cao Thiem</SpanTextStyle>
            <SpanTextStyle>1851061743</SpanTextStyle>
            <SpanTextStyle>Công nghệ thông tin</SpanTextStyle>
          </div>
        </div>
        <div className=" w-[50%] h-full flex justify-center items-center ">
          <div className=" w-[30%] h-full flex flex-col "></div>
          <div className=" w-[70%] h-full flex flex-col "></div>
        </div>
      </div> */}
        <div className="w-[80%] mb-10 bg-white rounded-lg shadow-xl mx-auto p-8 flex flex-col ">
          {/* Label */}
          <div className="flex flex-col gap-3 w-full">
            <div className=" flex justify-between ">
              <p className="text-sm font-bold w-full">
                Danh sách cán bộ giảng viên
              </p>
              <AddItem
                addItemClicked={(e) => {
                  setAddItemPortalShow(true);
                  setisCSVMode(false);
                }}
                addCSVClicked={(e) => {
                  setisCSVMode(true);
                  setAddItemPortalShow(true);
                }}
              ></AddItem>
            </div>
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
                items={lectures}
                validator={validator}
                dispatch={setLecturesFiltered}
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
                  Mã giảng viên
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
              {lecturesFiltered.map(
                (
                  {
                    ID,
                    MaGV,
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
                        {MaGV}
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
                        {MD5(Matkhau).toString()}
                      </TRowHeaderStyle>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Lecture;
