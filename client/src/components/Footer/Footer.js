import React from "react";
import styles from "../Footer/footer.module.css";
import logo from "../../assets/Footer/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import {  NavLink } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footer1}>
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="c" />
              <h2>Mech Ranger</h2>
              <p>
                This website help to company owner to communicate with Engine
                manager so,that manager easy to manage and maintain and also
                register they compaince to the manager.
              </p>
              <div className={styles.icon}>
                <h1>
                  <a href="https://facebook.com/"><FacebookIcon /></a>
                </h1>
                <h1>
                  <a href="https://mail.google.com/"><EmailIcon /></a>
                </h1>
                <h1>
                  <a href="https://instagram.com/"><InstagramIcon /></a>
                </h1>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.link}>
                <h2>Useful link</h2>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/login">Login</NavLink>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.info}>
                <h2>Contact us</h2>
                <a href="mailto:infomail@gmail.com"><EmailIcon /> infomail@gmail.com </a>
                <br />
                <LocalPhoneIcon /> +91 8610126966
                <br />
                <LocationCityIcon /> 603,Attur(TK),Salem(Dk)
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.signup}>
                <h2>Sign up for update</h2>
                <input placeholder="Email *" />
                <br />
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
