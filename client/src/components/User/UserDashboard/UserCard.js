import UserDashboard from "./UserDashboard";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Col, Row } from "react-bootstrap";
import { useAuth } from "../../../Context/Auth";
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

const UserCard = () => {

  const [array,setarry]=useState([])
  const navigate=useNavigate()
  const auth=useAuth()

  useEffect(()=>{
    if(`${auth.user}`==="null")
    {
      
      alert("please login")
      navigate('/login')
    }

    fetch(`http://localhost:8000/user/dashboard/${auth.user}`,{
          method : "get",
        }
        ).then((response) => response.json())
        .then((data) =>{
          setarry(data.data)
      })
  },[])

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <UserDashboard />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <h2>User Card</h2>

          <Row>
            <Col md={4}>
              <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"#F9D114",padding:"5vh"}}>
                <div style={{fontWeight:"bolder"}}>
                  NEXT OIL SERVICE
                </div>
                <div style={{fontWeight:"500"}}>
                  {array[1]}
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"#F9B115",padding:"5vh"}}>
                <div style={{fontWeight:"bolder"}}>
                  REVIEW COUNT
                </div>
                <div style={{fontWeight:"500"}}>
                  {array[2]}
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"#F9B115",padding:"5vh"}}>
                <div style={{fontWeight:"bolder"}}>
                  OIL CONSUMED
                </div>
                <div style={{fontWeight:"500"}}>
                  {array[0]}
                </div>
              </div>
            </Col>

          </Row>
        </Box>
      </Box>
    </div>
  );
};

export default UserCard;