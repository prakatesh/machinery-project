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
  const [index1,setindex1]=useState(0)



  const [date,setdate]=useState('')
  const [sample,setsample]=useState()
  const [review,setreview]=useState()
  const [value,setvalue]=useState()
  const [email,setemail]=useState()
  const [item,setitem]=useState()

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
  
  function change(email,date,sample,value)
  {
    setemail(email)
    setdate(date)
    setsample(sample)
    setindex1(1)
    setitem(value)
    if(value===1)
    {
      setvalue('Oil consumed')
    }
    else if(value===2)
    {
      setvalue('Temperature Level')
    }
    else if(value===3)
    {
      setvalue('Gas/Diesel consumed')
    }
    else if(value===4)
    {
      setvalue('Hours Runned')
    }
    else if(value===5)
    {
      setvalue('Oil Pressure')
    }
  }

  async function send()
  {
    const data=
    {
      email:email,
      date:date,
      sample:sample,
      review:review,
      item:item
    }
    await fetch("http://localhost:8000/admin/review",{
      body : JSON.stringify(data),
      method : "post",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    ).then((response) => response.json())
    .then((data) =>{
      if(data.data==="data")
    {
      alert("the review information is send")
      setindex1(0)
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
                  <tr style={{border:"1px solid black",cursor:"pointer"}}>
                    <td style={{border:"1px solid black"}}  value={i.email} key={index}>{i.email}</td>
                    <td style={{border:"1px solid black"}} onClick={()=>change(i.email,i.date,i.oil,1)} value={i.oil} key={index}>{i.oil}</td>
                    <td style={{border:"1px solid black"}} onClick={()=>change(i.email,i.date,i.temp,2)} value={i.temp} key={index}>{i.temp}</td>
                    <td style={{border:"1px solid black"}} onClick={()=>change(i.email,i.date,i.gas,3)} value={i.gas} key={index}>{i.gas}</td>
                    <td style={{border:"1px solid black"}} onClick={()=>change(i.email,i.date,i.hours,4)} value={i.hours} key={index}>{i.hours}</td>
                    <td style={{border:"1px solid black"}}  value={i.date} key={index}>{i.date}</td>
                    <td style={{border:"1px solid black"}} onClick={()=>change(i.email,i.date,i.oilpress,5)} value={i.oilpress} key={index}>{i.oilpress}</td> 
                  </tr>
              )
            })}
          </table>
        <Button variant="success" onClick={()=>setindex(0)} >okay</Button>
        </>
          }<br/>
          {index1===1?
          <>
          <p><label for="w3review">Review on date {date} and for {value} over {sample}</label></p>
  <textarea id="w3review" value={review} onChange={(e)=>setreview(e.target.value)}  rows="4" cols="50"/>
  <br/>
  <Button onClick={send} variant="success">Send</Button>
  </>:""}
        </Box>
      </Box>
    </div>
  );
};

export default Services;
