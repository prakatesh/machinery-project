import React from "react";
import { NavLink } from "react-router-dom";
import styles from  "./Navbar.module.css";
import logo from '../Footer/Images/logo.jpg'
const Navbar = () => {
  const inlinestyles=({isActive})=>
  {
    return({
      fontSize:isActive?"35px":"25px",
      color:isActive?"red":"white",
      
    })
  }
  return (
    <div>
      <nav className={styles.nav} >
        <div className={styles.navheader}>
          <img  src={logo} alt="dsf"/>
            <div className={styles.nava}>
              <NavLink style={inlinestyles} to="/">Home</NavLink>
              <NavLink style={inlinestyles} to="/about">About</NavLink>
              <NavLink style={inlinestyles} to="/service">Service</NavLink>
              <NavLink style={inlinestyles} to="/login">Login</NavLink>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
