import AdminDashboard from "./AdminDashboard";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "react-bootstrap";

const drawerWidth = 240;

const Services = () => {

  const [array,setarray]=useState([])
  const [options,setoption]=useState('')
  const [data,setdata]=useState('')
  const [index,setindex]=useState(0)

  useEffect(()=>{
    fetch("http://localhost:8000/admin/activeUser",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        setarray(data.data)
    })
  },[])

  async function sumbit()
  {
    await fetch( `http://localhost:8000/user/service/${options}`,{
          method : "get",
        }
        ).then((response) => response.json())
        .then((data) =>{
          setdata(data.data)
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

          <h2>Give the Service for User</h2>

          {index===0?
          <>
          <select  onChange={(e)=>setoption(e.target.value)} >
            {array.map((item,index) => {
                return (<option key={index} value={item.email}>{item.email}</option>);
            })}
          </select>
          <Button onClick={sumbit} variant="success">Search</Button>
          </>
            :
            <>
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
            {data.map((i,index)=>{
              return(
                  <tr style={{border:"1px solid black"}}>
                    <td style={{border:"1px solid black"}} key={index}>{i.email}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.oil}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.temp}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.gas}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.hours}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.date}</td>
                    <td style={{border:"1px solid black"}} key={index}>{i.oilpress}</td> 
                  </tr>
              )
            })}
          </table>
        <Button variant="success" onClick={()=>setindex(0)} >okay</Button>
        </>
          }
        </Box>
      </Box>
    </div>
  );
};

export default Services;
