import AdminDashboard from "./AdminDashboard";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Row } from "react-bootstrap";
import '../../../assets/admin.css'
const drawerWidth = 240;

const AdminCard = () => {
    const[array,setarray]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:8000/admin/dashboard`,{
              method : "get",
            }
            ).then((response) => response.json())
            .then((data) =>{
              setarray(data.data)
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
            <h2>Admin Card</h2>


                {array.map((name)=>{
                  return (
                    <>
                    <Row className="column">
                      <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"lightgreen",padding:"5vh"}}>
                        <div style={{fontWeight:"bolder",color:"Red"}}>
                          USER
                        </div>
                        <div style={{fontWeight:"500"}}>
                          <p><span style={{color:"green"}}>UserEmail:</span><span style={{fontWeight:"1000"}}>{name.email}</span></p>
                          <p><span style={{color:"green"}}>OilConsumed:</span><span style={{fontWeight:"1000"}}>{name.oil}</span></p>
                          <p><span style={{color:"green"}}>NextService:</span><span style={{fontWeight:"1000"}}>{name.hour}</span></p>
                        </div>
                      </div>
                    </Row>
                    </>
                  )
                })}

        </Box>
        </Box>
    </div>
    );
};

export default AdminCard;
