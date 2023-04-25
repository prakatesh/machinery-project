import UserDashboard from "./UserDashboard";
import React from "react";
import Box from "@mui/material/Box";

const drawerWidth = 240;

const UserServices = () => {
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
          <h2>User Services</h2>
        </Box>
      </Box>
    </div>
  );
};

export default UserServices;
