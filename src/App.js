import React from "react";
import "./App.css";
import Navbar from "./components/qr-attendance/nav_bar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/qr-attendance/pages/Home";
import Reports from "./components/qr-attendance/pages/Reports";
import Products from "./components/qr-attendance/pages/Products";
import Login from "./components/qr-attendance/login/Login";

function App() {
  const isLogged = false;
  return isLogged ? (
    <Login></Login>
  ) : (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/students" element={<Reports />} exact />
          <Route path="/lectures" element={<Products />} exact />
          <Route path="/rooms" element={<Products />} exact />
          <Route path="/faculties" element={<Products />} exact />
          <Route path="/subjects" element={<Products />} exact />
        </Routes>
        <div className=" w-full bg-[#2b3643] fixed bottom-0 flex justify-center items-center ">
          <h1 className=" text-white mx-auto my-1 text-base ">
            2022 © CSE-TLU All rights reserved
          </h1>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
