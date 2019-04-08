import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Meetups from "./meetups/meetups";
import Dashboard from "./dashboard/Dashoard";
import Comments from "./comments/comments";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/meetups" component={Meetups} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/comments" component={Comments} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
