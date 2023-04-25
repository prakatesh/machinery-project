// import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { Row, Container } from "react-bootstrap";
import styles from "../SignUp/signup.module.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate=useNavigate()
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpass]=useState('')
  const [repass,setrepass]=useState('')
  const [role,setrole]=useState('')

  async function submit()
  {
    const data={name:name,email:email,password:password,role:role}
    console.log(data)
    await fetch("http://localhost:8000/user/signup",{
          body : JSON.stringify(data),
          method : "POST",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
        ).then((response) => response.json())
        .then((data) =>{
          console.log(data)
          if(data==="done")
        {
          navigate('/')
        }
      })
  }

  const inputfield = useRef();
  useEffect(() => {
    inputfield.current.focus();
  },[]);
  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.signup}>
          <div className={styles.card}>
            <h6>Welcome</h6>
            <label>Name</label>
            <br />
            <input  ref={inputfield} type="text" value={name} onChange={(e)=>setname(e.target.value)} />
            <br />
            <label>Email</label>
            <br />
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
            <br />
            <label>Password</label>
            <br />
            <input type="password" value={password} onChange={(e)=>setpass(e.target.value)}/>
            <br />
            <label>Confirm Password</label>
            <br />
            <input type="password" value={repass} onChange={(e)=>setrepass(e.target.value)}/>
            <br />
            <Row style={{marginLeft:"25vh",gap:"5px",marginTop:"5px"}}>
              <input onChange={(e)=>setrole(e.target.value)} style={{width:"20px"}} type="radio" name="role" id="admin" value="Admin" />Admin
              <input onChange={(e)=>setrole(e.target.value)} style={{width:"20px"}} type="radio" name="role" id="User" value="User" />User
            </Row>
            <div className={styles.button}>
              <button onClick={submit}>Sign Up</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
