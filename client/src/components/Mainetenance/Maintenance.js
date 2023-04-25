import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Mainetenance() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card className="text-center my-4 bg-warning">
              <Card.Body>
                <Card.Title>Maintenance Form</Card.Title>
                <Card.Text className="justify-content-md-center">
                  <div style={{ display: "block", width: "100%", padding: 30 }}>
                    <Form>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Oil Level :
                        </Form.Label>
                        <Form.Control type="text" placeholder="Oil Level" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Temperature Level :
                        </Form.Label>
                        <Form.Control type="text" placeholder="Temperature" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Gas Consumed :
                        </Form.Label>
                        <Form.Control type="text" placeholder="Gas Amount" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Hours Runned :
                        </Form.Label>
                        <Form.Control type="number" placeholder="Hours" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Date :
                        </Form.Label>
                        <Form.Control type="date" placeholder="Pressure" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Oil Pressure :
                        </Form.Label>
                        <Form.Control type="text" placeholder="Pressure" />
                      </Form.Group>
                      <br />
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
