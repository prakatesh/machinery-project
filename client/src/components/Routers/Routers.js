import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Service from "../Service/Service";
import Signup from "../SignUp/Signup";
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";
import Maintenance from "../User/UserDashboard/Maintenance";
import UserCard from "../User/UserDashboard/UserCard"
import Users from "../Admin/AdminDashboard/Users";
import ActiveUsers from "../Admin/AdminDashboard/ActiveUsers";
import Products from "../Admin/AdminDashboard/Products";
import Services from "../Admin/AdminDashboard/Services";
import Profile from "../User/UserDashboard/Profile";
import UserProduct from "../User/UserDashboard/UserReview";
import UserServices from "../User/UserDashboard/UserServices";


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
        <Route path="/user/dashboard" element={<UserCard/>}></Route>
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route path="/user/review" element={<UserProduct />}></Route>
        <Route path="/user/services" element={<UserServices />}></Route>
        <Route path="/user/maintenance" element={<Maintenance />}></Route>
      </Routes>
    </div>
  );
};

export default Routers;
