import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default Routers;
