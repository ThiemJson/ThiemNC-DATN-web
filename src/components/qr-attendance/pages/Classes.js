import React from "react";
import styled from "styled-components";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";
import { SidebarData } from "../nav_bar/SidebarData";

const BodyTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
`;

const SpanHeaderStyle = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: black;
`;

const ContentSpanHeaderStyle = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: black;
`;

const Classes = () => {
  return (
    <div className="w-[80%]  m-10 bg-white rounded-lg shadow-xl mx-auto p-8 flex flex-col ">
      {/* Select */}
      <div className=" w-full flex justify-center items-center mb-3 gap-4 ">
        <select className=" px-3 py-2 w-full max-w-[300px] border text-base font-bold rounded-[inherit] bg-gray-100 ">
          <option value="">2020-2021</option>
          <option value="">2021-2022</option>
          <option value="">2018-2019</option>
        </select>

        <select className=" px-3 py-2 w-full max-w-[300px] border text-base font-bold rounded-[inherit] bg-gray-100 ">
          <option value="">Công nghệ thông tin</option>
          <option value="">Hệ thống thông tin</option>
          <option value="">Kĩ thuật phần mềm</option>
          <option value="">An ninh mạng</option>
        </select>

        <select className=" px-3 py-2 w-full max-w-[300px] border text-base font-bold rounded-[inherit] bg-gray-100 ">
          <option value="">K58</option>
          <option value="">K59</option>
          <option value="">K60</option>
          <option value="">K61</option>
          <option value="">K62</option>
        </select>

        <select className=" px-3 py-2 w-full max-w-[300px] border text-base font-bold rounded-[inherit] bg-gray-100 ">
          <option value="">Học kỳ chính</option>
          <option value="">Học kỳ phụ</option>
          <option value="">Chuẩn đầu ra Tiếng anh</option>
        </select>
      </div>

      {/* Content */}
      <div className="w-full h-full rounded-[inherit] shadow-[inherit] px-4 py-3 border-gray-200 border flex flex-col ">
        {/* Top content */}
        <div className="flex justify-between w-full flex-row mb-4">
          <MdIcons.MdDashboard className=" w-6 h-6 " color="#777777" />
          <IoIcons.IoReloadCircleOutline className=" w-6 h-6" color="#777777" />
        </div>

        {/* Separate */}
        <div className=" w-full h-[1px] bg-gray-200 mb-3 "></div>

        {/* Body */}
        <div className="flex justify-center gap-5 w-full h-full pt-3">
          {/* Subjects */}
          <div className="w-[40%] h-full ">
            <BodyTitle>Môn học</BodyTitle>
            {[1, 2, 3, 4, 4, 5, 6].map((item, index) => {
              return item % 2 === 0 ? (
                <div
                  className="w-full h-[40px] flex justify-start items-center p-2 align-baseline"
                  key={index}
                >
                  <p className=" text-sm text-[#367cb8] font-semibold ">
                    An toàn và bảo mật thông tin
                  </p>
                </div>
              ) : (
                <div
                  className="w-full h-[40px] bg-[#00c0ef] flex justify-start items-center p-2 align-baseline"
                  key={index}
                >
                  <p className=" text-sm text-white font-semibold underline ">
                    An toàn và bảo mật thông tin
                  </p>
                </div>
              );
            })}
          </div>
          {/* Classes */}
          <div className="w-full h-full">
            <BodyTitle>Lớp học phần</BodyTitle>
            {[1, 2].map((item, index) => (
              <div className=" w-full mb-2 border border-gray-200" key={index}>
                {/* Class name */}
                <div className=" p-2 flex justify-between items-center bg-[#636363] text-white font-semibold text-sm">
                  {/* Name */}
                  <div className="flex justify-center items-center">
                    <span>Lớp chính:</span>
                    <span className="font-bold">Công nghệ phần mềm</span>
                  </div>
                  {/* Si so */}
                  <div>83/26</div>
                </div>
                {/* Class content */}
                <div>
                  {/* Header */}
                  <div className="w-full flex justify-center items-center p-2 ">
                    <div className=" w-[35%] ">
                      <SpanHeaderStyle>Tuần</SpanHeaderStyle>
                    </div>
                    <div className=" w-[25%] ">
                      <SpanHeaderStyle>Thời gian</SpanHeaderStyle>
                    </div>
                    <div className=" w-[15%] ">
                      <SpanHeaderStyle>Phòng</SpanHeaderStyle>
                    </div>
                    <div className=" w-[25%] ">
                      <SpanHeaderStyle>Giáo viên</SpanHeaderStyle>
                    </div>
                  </div>
                  {/* Body */}
                  {[1, 2].map((item, index) => (
                    <div
                      className="w-full flex justify-center items-center p-1"
                      key={index}
                    >
                      <div className=" w-[35%] ">
                        <ContentSpanHeaderStyle>
                          29/08/2022 - 23/10/2022
                        </ContentSpanHeaderStyle>
                      </div>
                      <div className=" w-[25%] ">
                        <ContentSpanHeaderStyle>
                          Thứ 3: Tiết 1 - Tiết 3
                        </ContentSpanHeaderStyle>
                      </div>
                      <div className=" w-[15%] ">
                        <ContentSpanHeaderStyle>229-A2</ContentSpanHeaderStyle>
                      </div>
                      <div className=" w-[25%] ">
                        <ContentSpanHeaderStyle>
                          Nguyễn Cao Thiêm
                        </ContentSpanHeaderStyle>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
