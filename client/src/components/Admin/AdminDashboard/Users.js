import AdminDashboard from "./AdminDashboard";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {Button } from 'react-bootstrap'

const drawerWidth = 240;

const Users = () => {

  const [array,setarry]=useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/admin/usersignup",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data.data)
        setarry(data.data)
      
    })
  },[])

  async function active(e){
    const data={_id:e.target.value}
    console.log(data)
    await fetch("http://localhost:8000/admin/active",{
          body : JSON.stringify(data),
          method : "put",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
        ).then((response) => response.json())
        .then((data) =>{
          console.log(data)
          if(data==="done")
        {
          // navigate('/')
        }
      })
  }

  async function deactive(e){
    const data={_id:e.target.value}
    console.log(data)
    await fetch("http://localhost:8000/admin/deactive",{
          body : JSON.stringify(data),
          method : "put",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
        ).then((response) => response.json())
        .then((data) =>{
          console.log(data)
          if(data==="done")
        {
          // navigate('/')
        }
      })
  }

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
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Active</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Deactive</th>
            </tr>{array.map((i,index)=>{
            return(
              <>
              <tr>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.name}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.email}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}}> <Button onClick={active} value={i._id} variant="success">Active</Button></td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}}><Button onClick={deactive} value={i._id} variant="danger">Deactive</Button></td>
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

export default Users;
