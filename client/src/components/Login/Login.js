import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import styles from "../Login/login.module.css";
import Navbar from "../Navbar/Navbar";
function Login() {
  const ref1 = useRef();
  const navigate=useNavigate()

  const [email,setemail]=useState('')
  const [password,setpass]=useState('')
  async function submit(){
    const data={email:email,password:password}
    await fetch("http://localhost:8000/user/login",{
          body : JSON.stringify(data),
          method : "POST",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
        ).then((response) => response.json())
        .then((data1) =>{
          if(data1==="wrong_user")
        {
          alert("wrong_user")
        }
        else if(data1==="wrong_password")
        {
          alert("wrong_password")
        }
        else{
          if(data1.data.role==="User")
          {
            navigate('/user/dashboard')
          }
          else if(data1.data.role==="Admin")
          {
            navigate('/admin/dashboard')
          }
        }
      })
  }
  useEffect(() => {
    ref1.current.focus();
  }, []);
  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.login}>
          <div className={styles.card}>
            <h6>Welcome !!</h6>
            <label>Email</label>
            <br />
            <input ref={ref1} type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
            <br />
            <label>Password</label>
            <br />
            <input type="password" value={password} onChange={(e)=>setpass(e.target.value)} />
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
              <button onClick={submit}>Login</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
