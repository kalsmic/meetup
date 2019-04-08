import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";

class LeftNav extends Component {
  render() {
    return (
      <Col md={3}>
        <ListGroup>
          <ListGroup.Item>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="/meetups">Meetings</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="/tags">Tags</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="/users">Users</Nav.Link>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    );
  }
}

export default LeftNav;
