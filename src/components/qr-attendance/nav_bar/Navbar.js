import React, { useRef, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

import cse_logo from "../../../images/cse-logo.jpg";
import tlu_logo from "../../../images/thuyloi-logo.jpg";

function Navbar({ setLogged }) {
  const [sidebar, setSidebar] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const refTimer = useRef(null);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          {/* Icon expand */}
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          {/* Title */}
          <div className="mx-auto flex justify-center items-center gap-5 align-baseline">
            <img src={cse_logo} alt="" className=" rounded-full w-11" />
            <Link to="/">
              <h1 className=" text-white text-xl font-bold ">
                QUẢN LÝ ĐIỂM DANH THÔNG MINH
              </h1>
            </Link>
            <img src={tlu_logo} alt="" className=" rounded-full w-11 " />
          </div>

          {/* Admin icon */}
          <div
            className="flex justify-center items-center gap-4 menu-bars mr-8 relative cursor-pointer "
            onClick={() => {
              setShowLogout(!showLogout);
              if (refTimer.current !== null) {
                clearTimeout(refTimer.current);
              }
              refTimer.current = setTimeout(() => {
                setShowLogout(false);
              }, 5000);
            }}
          >
            <FaIcons.FaUserCircle />
            <p className=" text-white font-bold text-sm  ">Admin</p>
            {showLogout && (
              <div
                className=" absolute w-[120px] h-[40px] bg-white rounded-md bottom-0 translate-y-[140%] right-0 flex justify-center items-center p-2 cursor-pointer "
                onClick={() => {
                  setLogged(false);
                }}
              >
                <HiIcons.HiOutlineLogout color="#2b3643" className="w-5 h-5" />
                <span className=" text-xs font-bold text-[#2b3643]">
                  Đăng xuất
                </span>
              </div>
            )}
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
