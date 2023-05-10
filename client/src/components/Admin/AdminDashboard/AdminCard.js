import AdminDashboard from "./AdminDashboard";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Col } from "react-bootstrap";

const drawerWidth = 240;

const AdminCard = () => {

    useEffect(()=>{
    
        fetch(`http://localhost:8000/admin/dashboard`,{
              method : "get",
            }
            ).then((response) => response.json())
            .then((data) =>{
            //   setarry(data.data)
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


            <Col md={4}>
              <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",backgroundColor:"#F9D114",padding:"5vh"}}>
                <div style={{fontWeight:"bolder"}}>
                  NEXT OIL SERVICE
                </div>
                <div style={{fontWeight:"500"}}>
                  array[1]
                </div>
              </div>
            </Col>


        </Box>
        </Box>
    </div>
    );
};

export default AdminCard;
