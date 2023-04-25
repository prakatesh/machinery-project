import UserDashboard from "./UserDashboard";
import Box from "@mui/material/Box";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Mainetenance = () => {

  const navigate=useNavigate()

  const [oil,setoil]=React.useState('')
  const [temp,settemp]=React.useState('')
  const [gas,setgas]=React.useState('')
  const [hours,sethours]=React.useState('')
  const [date,setdate]=React.useState('')
  const [oilpress,setoilpress]=React.useState('')


  async function submit(e)
  {
    e.preventDefault()
    const data={oil:oil,temp:temp,gas:gas,hours:hours,date:date,oilpress:oilpress}
    console.log(data)
    await fetch("http://localhost:8000/user/manage",{
          body : JSON.stringify(data),
          method : "POST",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
        ).then((response) => response.json())
        .then((data) =>{
          console.log(data)
          if(data==="done")
        {
          navigate('/')
        }
      })
  }

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
                          Enter Oil Consumed% :
                        </Form.Label>
                        <Form.Control type="text" value={oil} onChange={(e)=>setoil(e.target.value)} placeholder="Oil Level" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Temperature Level :
                        </Form.Label>
                        <Form.Control type="text" value={temp} onChange={(e)=>settemp(e.target.value)} placeholder="Temperature" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Gas Consumed/Diesel :
                        </Form.Label>
                        <Form.Control type="text" value={gas} onChange={(e)=>setgas(e.target.value)} placeholder="Gas Amount" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Hours Runned :
                        </Form.Label>
                        <Form.Control  value={hours} onChange={(e)=>sethours(e.target.value)} type="number" placeholder="Hours" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label  className="fw-bold">
                          Enter Date :
                        </Form.Label>
                        <Form.Control  value={date} onChange={(e)=>setdate(e.target.value)} type="date" placeholder="Pressure" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fw-bold">
                          Enter Oil Pressure :
                        </Form.Label>
                        <Form.Control  value={oilpress} onChange={(e)=>setoilpress(e.target.value)} type="text" placeholder="Pressure" />
                      </Form.Group>
                      <br />
                      <Form.Control  type="file" placeholder="upload" />
                      <br />
                      <Button onClick={submit} variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Box>
      </Box>
    </div>
  );
};

export default Mainetenance;

