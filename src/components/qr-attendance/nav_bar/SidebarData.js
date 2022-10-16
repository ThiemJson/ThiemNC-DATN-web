import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
export const SidebarData = [
  {
    title: "Trang chủ",
    path: "/",
    icon: <MdIcons.MdSpaceDashboard />,
    cName: "nav-text",
  },
  {
    title: "Lớp học",
    path: "/classes",
    icon: <GiIcons.GiTeacher />,
    cName: "nav-text",
  },
  {
    title: "Điểm danh",
    path: "/attendance",
    icon: <AiIcons.AiFillClockCircle />,
    cName: "nav-text",
  },
  {
    title: "Môn học",
    path: "/subjects",
    icon: <RiIcons.RiBriefcase4Fill />,
    cName: "nav-text",
  },
  {
    title: "Sinh viên",
    path: "/students",
    icon: <FaIcons.FaUserGraduate />,
    cName: "nav-text",
  },
  {
    title: "Giảng viên",
    path: "/lectures",
    icon: <FaIcons.FaUserTie />,
    cName: "nav-text",
  },
  {
    title: "Phòng học",
    path: "/rooms",
    icon: <MdIcons.MdBedroomParent />,
    cName: "nav-text",
  },
  {
    title: "Khoa",
    path: "/faculties",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Thông báo",
    path: "/notification",
    icon: <MdIcons.MdNotificationsActive />,
    cName: "nav-text",
  },
];
