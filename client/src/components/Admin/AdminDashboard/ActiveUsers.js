import AdminDashboard from "./AdminDashboard";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "react-bootstrap";

const drawerWidth = 240;

const ActiveUsers = () => {

  const [array,setarry]=useState([])
  const [fetchm,setfetch]=useState([])

  const [index,setindex]=useState(0)

  useEffect(()=>{
    fetch("https://mech-ranger.onrender.com/admin/activeUser",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        // console.log(data.data)
        setarry(data.data)
        setindex(0)
    })
  },[])

  function submit(e){

    fetch(`https://mech-ranger.onrender.com/user/service/${e.target.value}`,{
          method : "get",
        }
        ).then((response) => response.json())
        .then((data) =>{
          // console.log(data.data)
          setfetch(data.data)
          setindex(1)
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
          {index===0?<table style={{border:"1px solid black",borderCollapse: "collapse"}}>
            <tr >
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Name</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Email</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Password</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Role</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>Status</th>
            <th style={{border:"1px solid black",borderCollapse: "collapse"}}>See the data</th>
            </tr>{array.map((i,index)=>{
            return(
              <>
              <tr>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.name}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.email}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.role}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.password}</td>
              <td style={{border:"1px solid black",borderCollapse: "collapse"}} key={index}>{i.active}</td>
              <td style={{border:"1px solid black",padding:"2vh" }}><Button value={i.email} onClick={submit} variant="success">SEE</Button></td>
              </tr>
              </>
            )
          })}
            
          </table>:<>
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
          {fetchm.map((i,index)=>{
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
        <Button variant="success" onClick={()=>setindex(0)} >okay</Button>
        </>}
        </Box>
      </Box>
    </div>
  );
};

export default ActiveUsers;
