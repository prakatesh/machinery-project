import UserDashboard from "./UserDashboard";
import React, {  useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useAuth } from "../../../Context/Auth";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

const Profile = () => {

  const navigate=useNavigate()
  const [array,setarry]=useState([""])
  const auth=useAuth()

  

  useEffect(()=>{
    if(`${auth.user}`==="null")
    {
      
      alert("please login")
      navigate('/login')
    }

    fetch(`https://mech-ranger.onrender.com/user/profile/${auth.user}`,{
          method : "POST",
        }
        ).then((response) => response.json())
        .then((data) =>{
          setarry(data.data)
          console.log(data.data)
      })
  })

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
          {/* <button onClick={click}>Fetch</button> */}
          <div>
            <table style={{border:"2px solid black"}}>
              <tr style={{border:"2px solid black"}}><td style={{border:"2px solid black",padding:"2vh"}}>Name</td><td>{array[0].name}</td></tr>
              <tr style={{border:"2px solid black"}}><td style={{border:"2px solid black",padding:"2vh"}}>Email</td><td>{array[0].email}</td></tr>
              <tr style={{border:"2px solid black"}}><td style={{border:"2px solid black",padding:"2vh"}}>Role</td><td>{array[0].role}</td></tr> 
              <tr style={{border:"2px solid black"}}><td style={{border:"2px solid black",padding:"2vh"}}>Password</td><td>{array[0].password}</td></tr>
              <tr style={{border:"2px solid black"}}><td style={{border:"2px solid black",padding:"2vh" }}>Active</td><td>{array[0].active}</td></tr>
            </table>
          </div> 
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
