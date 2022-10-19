import React from "react";
import { SidebarData } from "../nav_bar/SidebarData";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home grid grid-cols-4 gap-10 m-10 ">
      {SidebarData.map((item, index) => (
        <Link to={item.path} key={index}>
          <div className=" rounded-2xl bg-blue-900 h-[200px] m-5 shadow-lg items-center p-5 hover:bg-blue-700 ">
            <div className=" items-center justify-center">
              <AiIcons.AiFillBank
                color="#f5f5f5"
                className="h-[30%] w-[30%] mx-auto mb-3 flex-shrink-0 "
              />
              <h1 className=" mx-auto text-white font-bold uppercase text-xl text-center">
                {item.title}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
