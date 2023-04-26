import AdminDashboard from "./AdminDashboard";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

const drawerWidth = 240;

const ActiveUsers = () => {

  const [array,setarry]=useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/admin/activeUser",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        // console.log(data.data)
        setarry(data.data)
      
    })
  },[])
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AdminDashboard />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <table style={{border:"1px solid black",borderCollapse: "collapse"}}>
            <tr >
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Name</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Email</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Password</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Role</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Status</th>
            </tr>{array.map((i,index)=>{
            return(
              <>
              <tr>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.name}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.email}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.role}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.password}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.active}</td>
              </tr>
              </>
            )
          })}
            
          </table>
        </Box>
      </Box>
    </div>
  );
};

export default ActiveUsers;
