import React from "react";
import { LoadingContext } from "../../../context/counter_context/CounterContext";
import tlu_60_logo from "../../../images/tlu-60-logo.png";

const Login = ({ setLogged }) => {
  const { setHidden } = React.useContext(LoadingContext);

  return (
    <div className=" bg-[#dde3ec] w-screen h-screen flex justify-center items-center">
      <div className=" bg-white w-[800px] h-[480px] rounded-lg shadow-lg flex justify-center items-center overflow-hidden">
        {/* Logo */}
        <div className="bg-gradient-to-r from-[#67D7F5] to-[#86F7CC] bg-black h-full w-[50%] justify-center items-center flex p-14 ">
          <img src={tlu_60_logo} alt="" />
        </div>

        {/* Login */}
        <div className="h-full w-[50%] px-9 py-14">
          {/* Content */}
          <div className="w-full h-full ">
            <form action="">
              <div className="mb-4">
                <label htmlFor="username" className="block mb-2 ">
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  id="username"
                  className="block border border-gray-300 rounded-md p-2 text-gray-500 font-bold"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 ">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  className="block border border-gray-300 rounded-md p-2 text-gray-500 font-bold"
                />
              </div>
              <button
                type="submit"
                className=" px-3 py-2 bg-black text-white text-base font-bold uppercase mt-10 rounded-md "
                onClick={() => {
                  setHidden(true);
                  setLogged(true);
                }}
              >
                Đăng nhập
              </button>
            </form>
            <div className="mt-5">
              <span className="text-[#f00b3f] font-bold text-sm block mb-2">
                (*) Đăng nhập bằng tài khoản/mật khẩu của quản trị viên
              </span>
              <span className="text-[#f00b3f] font-bold text-sm  block md:text-xs">
                (*) Điện thoại + zalo hỗ trợ:
              </span>
              <span className="text-[#f00b3f] font-bold text-sm block">
                0338.456.469
              </span>
            </div>
          </div>

          <h1 className=" text-gray-500 mx-auto my-1 text-xs w-full text-center font-bold mt-3 ">
            2022 © CSE-TLU All rights reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
