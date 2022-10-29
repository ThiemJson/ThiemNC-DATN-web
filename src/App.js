import React from "react";
import "./App.css";
import Navbar from "./components/qr-attendance/nav_bar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/qr-attendance/pages/Home";
import Login from "./components/qr-attendance/login/Login";
import Students from "./components/qr-attendance/pages/Students";
import Subjects from "./components/qr-attendance/pages/Subjects";
import Rooms from "./components/qr-attendance/pages/Rooms";
import Notification from "./components/qr-attendance/pages/Notification";
import Lecture from "./components/qr-attendance/pages/Lecture";
import Faculties from "./components/qr-attendance/pages/Faculties";
import Classes from "./components/qr-attendance/pages/Classes";
import Attendance from "./components/qr-attendance/pages/Attendance";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { LoadingContext } from "./context/counter_context/CounterContext";
import Loading from "./components/qr-attendance/components/Loading";

function App() {
  const { isHidden, setHidden } = React.useContext(LoadingContext);
  const [logged, setLogged] = useState(false);
  const moveToTop = () => {
    window.scrollTo(0, 0);
  };

  return logged === false ? (
    <div>
      {isHidden && <Loading></Loading>}
      <Login setLogged={setLogged}></Login>
    </div>
  ) : (
    <>
      {isHidden && <Loading></Loading>}
      <BrowserRouter>
        <Navbar setLogged={setLogged} />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/students" element={<Students />} />
          <Route path="/lectures" element={<Lecture />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/faculties" element={<Faculties />} />
        </Routes>
        <div className=" w-full bg-[#2b3643] fixed bottom-0 flex justify-center items-center ">
          <h1 className=" text-white mx-auto my-1 text-base ">
            2022 © CSE-TLU All rights reserved
          </h1>
        </div>
        <FaIcons.FaArrowCircleUp
          className=" w-12 h-12 fixed bottom-16 right-8 hover:w-14 hover:h-14 "
          color="#2b3643"
          onClick={moveToTop}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
