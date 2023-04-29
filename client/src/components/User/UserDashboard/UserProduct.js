import UserDashboard from "./UserDashboard";
import React from "react";
import Box from "@mui/material/Box";
// import { useAuth } from "../../../Context/Auth";
// import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const UserProduct = () => {

  // const navigate=useNavigate()
  // const auth=useAuth()

  // useEffect(()=>{
  //   if(`${auth.user}`==="null")
  //   {
      
  //     alert("please login")
  //     navigate('/login')
  //   }
  // },[])

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
          <h2>User Product</h2>
        </Box>
      </Box>
    </div>
  );
};

export default UserProduct;
