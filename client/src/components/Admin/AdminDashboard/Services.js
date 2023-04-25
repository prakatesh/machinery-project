import SideNav from "./SideNav";
import React from "react";
import Box from "@mui/material/Box";

const drawerWidth = 240;

const Services = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <h2>Services</h2>
        </Box>
      </Box>
    </div>
  );
};

export default Services;
