import React from "react";
import data from "../../assets/data/ServiceData";
import { Container } from "@mui/material";

const ServiceCard = () => {
  const cardData = data.map((d) => {
    return (
      <div className="col-md-4 d-block">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={d.img} alt="Card" height="200px" />
          <div className="card-body">
            <h5 className="card-title text-center">{d.name}</h5>
          </div>
        </div>
        <br />
      </div>
    );
  });
  return (
    <Container>
      <br />
      <div className="row">{cardData}</div>
    </Container>
  );
};

export default ServiceCard;
