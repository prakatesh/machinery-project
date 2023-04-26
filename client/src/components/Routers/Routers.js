import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Service from "../Service/Service";
import Signup from "../SignUp/Signup";
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";
import UserDashboard from "../User/UserDashboard/UserDashboard";
import Maintenance from "../User/UserDashboard/Maintenance";
import Users from "../Admin/AdminDashboard/Users";
import ActiveUsers from "../Admin/AdminDashboard/ActiveUsers";
import Products from "../Admin/AdminDashboard/Products";
import Services from "../Admin/AdminDashboard/Services";
import Profile from "../User/UserDashboard/Profile";
import UserProduct from "../User/UserDashboard/UserProduct";
import UserServices from "../User/UserDashboard/UserServices";
// import { Authenication } from "../../Context/Auth";


const Routers= () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        <Route path="/admin/users" element={<Users />}></Route>
        <Route path="/admin/active-users" element={<ActiveUsers />}></Route>
        <Route path="/admin/products" element={<Products />}></Route>
        <Route path="/admin/services" element={<Services />}></Route>
        <Route path="/user/dashboard" element={<UserDashboard />}></Route>
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route path="/user/products" element={<UserProduct />}></Route>
        <Route path="/user/services" element={<UserServices />}></Route>
        <Route path="/user/maintenance" element={<Maintenance />}></Route>
      {/* </Authenication> */}
      </Routes>
    </div>
  );
};

export default Routers;
