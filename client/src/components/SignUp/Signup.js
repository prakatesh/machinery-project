// import { Container } from "@mui/system";
import React, { useEffect, useRef } from "react";
import { Row, Container } from "react-bootstrap";
import styles from "../SignUp/signup.module.css";
import Navbar from "../Navbar/Navbar";
function Signup() {
  const inputfield = useRef();
  useEffect(() => {
    inputfield.current.focus();
  });
  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.signup}>
          <div className={styles.card}>
            <h6>Welcome</h6>
            <label>Name</label>
            <br />
            <input ref={inputfield} type="text" />
            <br />
            <label>Email</label>
            <br />
            <input type="text" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" />
            <br />
            <label>Confirm Password</label>
            <br />
            <input type="password" />
            <br />
            <Row>
              <label htmlFor="admin">Admin</label>
              <input type="radio" name="role" id="admin" value="admin" />

              <label htmlFor="user">User</label>
              <input type="radio" name="role" id="user" value="user" />
            </Row>
            <div className={styles.button}>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
