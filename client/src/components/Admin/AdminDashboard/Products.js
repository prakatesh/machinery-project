import AdminDashboard from "./AdminDashboard";
import React from "react";
import Box from "@mui/material/Box";

const drawerWidth = 240;

const Products = () => {
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
          <h2>Products</h2>
        </Box>
      </Box>
    </div>
  );
};

export default Products;
