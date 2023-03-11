import { Container } from "@mui/system";
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "../Login/login.module.css";
function Login() {
  const ref1=useRef();
  useEffect(()=>{
    ref1.current.focus();
  },[])
  return (
    <div>
      <Container>
        <div className={styles.login}>
          <div className={styles.card}>
            <h6>Welcome !!</h6>
            <label>Email</label>
            <br />
            <input ref={ref1} type="text" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" />
            <br />
            <div className={styles.link}>
              <NavLink>Forget Password?</NavLink>
              <br />
              <span>
                <NavLink to="/signup">New User?Sign up</NavLink>
                <br />
              </span>
            </div>
            <div className={styles.button}>
              <button>Login</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
