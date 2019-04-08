import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import LeftNav from "../components/LeftNav";
import Image from "react-bootstrap/Image";
import "../meetups/style.css";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 2, offset: 3 }}>
            <b>Questioner</b>
          </Col>
          <Col md={{ span: 2, offset: 4 }}>
            <Image
              src="static/img/profile.svg"
              width="64"
              height="64"
              roundedCircle
              // className="circle"
            />
          </Col>
        </Row>

        <Row>
          <LeftNav />
          <Col md={4} xs={12}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="bg-info text-light">Meetings</Card.Title>
                <Card.Text>
                  <Button variant="outline-danger">
                    <Badge className="rounded">50 </Badge>
                  </Button>
                  <span className="text-danger"> Meetings</span>
                </Card.Text>
                <Card.Text>
                  <Button variant="outline-danger">
                    <Badge className="rounded">25 </Badge>
                  </Button>
                  <span className="text-danger"> Completed</span>
                </Card.Text>
                <Card.Text>
                  <Button variant="outline-danger">
                    <Badge className="rounded">20 </Badge>
                  </Button>
                  <span className="text-danger"> Pending</span>
                </Card.Text>
                <Card.Text>
                  <Button variant="outline-danger">
                    <Badge className="rounded">5 </Badge>
                  </Button>
                  <span className="text-danger"> Deleted</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="bg-info text-light">
                  Questions
                </Card.Title>
                <Card.Text>
                  <Button variant="outline-info">
                    <Badge className="rounded">450 </Badge>
                  </Button>
                  <span className="text-info"> Questions</span>
                </Card.Text>
                <Card.Text>
                  <Button variant="outline-info">
                    <Badge className="rounded">120 </Badge>
                  </Button>
                  <span className="text-info"> Commented</span>
                </Card.Text>
                <Card.Text>
                  <Button variant="outline-info">
                    <Badge className="rounded">300 </Badge>
                  </Button>
                  <span className="text-info"> Pending</span>
                </Card.Text>
                <Card.Text>
                  <Button variant="outline-info">
                    <Badge className="rounded">30 </Badge>
                  </Button>
                  <span className="text-info"> Deleted</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 3 }} xs={12}>
            <b className="bg-info text-white">Users</b>
          </Col>
          <Col md={{ span: 4 }} xs={12}>
            <b className="bg-info text-white">Top 10 Tags</b>
            <Table striped bordered hover size="sm">
              <thead>
                <tr className="bg-dark text-white">
                  <th>Tag</th>
                  <th>Appearances</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bootcamp</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Planning</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Success</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>PIP</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Blog Posts</td>
                  <td>50</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
