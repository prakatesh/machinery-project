import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";

export default function Mainetenance() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <h4>Maintenance Form</h4>
        <Form>
          <Form.Group>
            <Form.Label>Enter Oil Level :</Form.Label>
            <Form.Control type="text" placeholder="Oil Level" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter Temperature Level :</Form.Label>
            <Form.Control type="text" placeholder="Temperature" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter Gas Consumed :</Form.Label>
            <Form.Control type="text" placeholder="Gas Amount" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter Hours Runned :</Form.Label>
            <Form.Control type="number" placeholder="Hours" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter Date :</Form.Label>
            <Form.Control type="date" placeholder="Pressure" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter Oil Pressure :</Form.Label>
            <Form.Control type="text" placeholder="Pressure" />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
