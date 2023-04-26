import UserDashboard from "./UserDashboard";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";

const drawerWidth = 240;

const Profile = () => {
  // const [array,setarry]=useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/user/Profile",{
        method:"get"
    }).then((res)=>res.json())
    .then((data)=>{
        // console.log(data.data)
        // setarry(data.data)
      
    })
  },[])
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
          <h2>Profile</h2>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
