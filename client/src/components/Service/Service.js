/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "@mui/material";
import React from "react";
import ServiceCard from "./ServiceCard";
import Navbar from "../Navbar/Navbar";

function Service() {
  return (
    <div>
      <Navbar />
      <Container>
        <ServiceCard />
      </Container>
    </div>
  );
}

export default Service;
