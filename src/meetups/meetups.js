import React, { Component } from "react";
import Header from "../components/header";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MeetupSummaryPanel from "./meetup_summary_panel";
import MeetingList from "./meeting_list";
import "./style.css";

class Meetups extends Component {
  render() {
    return (
      <div>
        <Header />
        <Row>
          <Col sm={3} />

          <Col sm={6} className="middle-panel">
            <MeetupSummaryPanel />
            <MeetingList />
          </Col>

          <Col sm={3} />
        </Row>
      </div>
    );
  }
}

export default Meetups;
