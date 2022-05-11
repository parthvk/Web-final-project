import React, { Component } from "react";
import "./layout.scss";
import { Button } from "react-bootstrap";
import MyBlog from "../MyBlog/MyBlog";

class UserDetail extends Component {
  logOut = () => {
    localStorage.clear();
    this.props.removeUser();
  };

  /** initialize state
   *
   */
  componentDidMount() {
    const user = localStorage.getItem("user");
  }

  render() {
    return (
      <div>
        <MyBlog />
        <div className="but1">
          <p></p>
          <Button onClick={this.logOut} bsStyle="primary">
            Log-Out
          </Button>
        </div>
      </div>
    );
  }
}

export default UserDetail;
