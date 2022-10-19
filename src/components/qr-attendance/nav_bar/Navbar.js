import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

import cse_logo from "../../../images/cse-logo.jpg";
import tlu_logo from "../../../images/thuyloi-logo.jpg";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

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
          <div className="flex justify-center items-center gap-4 menu-bars mr-8 ">
            <FaIcons.FaUserCircle />
            <p className=" text-white font-bold text-sm  ">Admin</p>
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
