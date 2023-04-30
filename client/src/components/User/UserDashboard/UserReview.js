import UserDashboard from "./UserDashboard";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useAuth } from "../../../Context/Auth";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const UserProduct = () => {

  const [array,setarray]=useState([])
  const [reviewUser,setreviewUser]=useState('')
  const [index,setindex]=useState(0)

  const navigate=useNavigate()
  const auth=useAuth()

  useEffect(()=>{
    if(`${auth.user}`==="null")
    {
      
      alert("please login")
      navigate('/login')
    }

    fetch(`http://localhost:8000/user/review/${auth.user}`,{
          method : "get",
        }
        ).then((response) => response.json())
        .then((data) =>{
          if(data.data.length===0)
          {
            setindex(1)
          }
            setarray(data.data)
            console.log(array)
        
      })


  },[])


 

  async function send(date)
  {

    const data={comment:reviewUser,email:`${auth.user}`,date:date}
    fetch(`http://localhost:8000/user/comment`,{
      body : JSON.stringify(data),
          method : "put",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
        ).then((response) => response.json())
        .then((data) =>{
          console.log(data)
          if(data.data==="done")
          {
            navigate('/user/dashboard')
          }
          // setarray(data.data)
          // console.log(data.data)
      })
  }

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
          <h2>User review</h2>

          {index===1?<h1>No review from admin</h1>:
          array.map((i)=>{
            return(
              <>
              <h6>{i.review}</h6><br/>
              <p><label for="w3review">Review on date {i.date} and for {i.item} over {i.sample}</label></p>
  <textarea id="w3review" value={reviewUser} onChange={(e)=>setreviewUser(e.target.value)}  rows="4" cols="50"/>
  <br/>
<Button onClick={()=>send(i.date)} variant="success">Send</Button> 
              </>
            )
          })
          
          }
          

          {/* {array.review}
          <p><label for="w3review">Review on date {array.date} and for {array.value} over {array.sample}</label></p>
  <textarea id="w3review" value={reviewUser} onChange={(e)=>setreviewUser(e.target.value)}  rows="4" cols="50"/>
  <br/>
  <Button onClick={send} variant="success">Send</Button> */}
        </Box>
      </Box>
    </div>
  );
};

export default UserProduct;
