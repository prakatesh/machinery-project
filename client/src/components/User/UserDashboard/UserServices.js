import UserDashboard from "./UserDashboard";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useAuth } from "../../../Context/Auth";

const drawerWidth = 240;


const UserServices = () => {
  
  const [array,setarray]=useState([])


  const auth=useAuth()

  useEffect(()=>{
    fetch(`https://mech-ranger.onrender.com/user/service/${auth.user}`,{
          method : "get",
        }
        ).then((response) => response.json())
        .then((data) =>{
          // console.log(data.data)
          setarray(data.data)
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
          <h2>User Services</h2>
          <table style={{border:"1px solid black"}}>
            <tr style={{border:"1px solid black"}}>
              <th style={{border:"1px solid black"}}>Email</th>
              <th style={{border:"1px solid black"}}>Oil Consumed</th>
              <th style={{border:"1px solid black"}}>Temp Level</th>
              <th style={{border:"1px solid black"}}>Gas/Disel Consumed</th>
              <th style={{border:"1px solid black"}}>Hours</th>
              <th style={{border:"1px solid black"}}>Date</th>
              <th style={{border:"1px solid black"}}>Oil Pressure</th>
            </tr>
            {/* {console.log("abc",array)} */}
            {array.map((i,index)=>{
              return(
                // <div>
                  <tr style={{border:"1px solid black"}}>
                    <td style={{border:"1px solid black"}} key={index}>{i.email}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.oil}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.temp}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.gas}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.hours}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.date}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.oilpress}</td>
                  </tr>
                // </div>
              )
            })}
          </table>
        </Box>
      </Box>
    </div>
  );
};

export default UserServices;
