import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../services/userService";
import "./login.scss";
import {
  Row,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  HelpBlock,
} from "react-bootstrap";
import MapContainer from "../../components/MapContainer/MapContainer";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/Background/Background";

class Login extends Component {
  //set state of Login
  state = { find: false, submitted: false };

  /** find user
   * If user is verified successfully,put user info into localStorage
   * @param event
   * @returns {Promise<void>}
   */
  findUser = async (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this;
    const { data } = await getUser(email.value);
    console.log("data===", data[0]._id);
    if (data.length === 0 || data[0].Password !== password.value)
      //if user doesn't exist or password doesn't match
      return;
    this.setState({ find: true });
    localStorage.setItem("user", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("userId", data[0]._id);

    this.props.getUser();
    console.log(this.props.getUser(), "hiheheeirieureiru");
    console.log(localStorage.getItem("userId"));
  };

  render() {
    const { find, submitted } = this.state;
    return (
      <div>
        <Background className="bgimg" />
        <div className="divLogin">
          <Row className="Login">
            <form onSubmit={this.findUser}>
              <span style={{ display: submitted && !find ? "block" : "none" }}>
                E-mail or password is wrong.
              </span>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  inputRef={(c) => (this.email = c)}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  inputRef={(c) => (this.password = c)}
                />
              </FormGroup>
              <p></p>
              <Button type="submit" bsStyle="primary">
                Sign-In
              </Button>
              <p></p>
              <span>
                Forgot Password?
                <Link to="/forgot">Reset Password</Link>
              </span>
              <p></p>
              <span>
                Don't have account?
                <Link to="/register">Create Account</Link>
              </span>
            </form>
          </Row>
        </div>
        <hr />
        <MapContainer />
      </div>
    );
  }
}

export default Login;
