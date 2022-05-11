import React, { Component } from "react";
import { addNewUser, getUser } from "../../services/userService";
import MyNavLink from "../MyNavLink";
import "./register.scss";
import Background from "../../components/Background/Background";
import MapContainer from "../../components/MapContainer/MapContainer";
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";

class Register extends Component {
  //set state of Register
  state = { isSame: false, existed: false, confirm: false };

  /** add user to database
   *
   * @param event
   * @returns {Promise<void>}
   */
  addUser = async (event) => {
    event.preventDefault();
    const { username, password, mail } = this;
    const { data } = await getUser(mail.value);
    if (data.length !== 0) {
      //check whether cur user is existed
      this.setState({ existed: true });
      return;
    }
    if (!this.state.isSame) return;
    await addNewUser({
      Username: username.value,
      Mail: mail.value,
      Password: password.value,
    });
    this.props.addUser();
  };

  /** confirm two passwords are same or not
   *
   */
  confirmPassword = () => {
    this.setState({ confirm: true });
    const { password, re_password } = this;
    if (password.value !== re_password.value) {
      this.setState({ isSame: false });
    } else {
      this.setState({ isSame: true });
    }
  };

  render() {
    return (
      <div>
        <Background className="bgimg" />
        <br />
        <div className="divLogin">
          <Row className="Register">
            <form onSubmit={this.addUser}>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  type="text"
                  name="username"
                  placeholder="Enter your user name"
                  inputRef={(c) => (this.username = c)}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  inputRef={(c) => (this.mail = c)}
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
              <FormGroup>
                <ControlLabel>Confirm Password</ControlLabel>
                <FormControl
                  type="password"
                  name="password"
                  placeholder="Please confirm password here"
                  inputRef={(c) => (this.re_password = c)}
                  onChange={this.confirmPassword}
                />
                {/*control the visibility and content of warning line depending on user's input*/}
                <span
                  style={{
                    display:
                      (!this.state.isSame && this.state.confirm) ||
                      this.state.existed
                        ? "block"
                        : "none",
                  }}
                >
                  {this.state.existed ? (
                    <MyNavLink to="/login">
                      User already existed,please Login
                    </MyNavLink>
                  ) : (
                    "Please enter same password!"
                  )}
                </span>
              </FormGroup>
              <p></p>
              <Button type="submit" bsStyle="primary">
                Register
              </Button>
            </form>
          </Row>
        </div>
        <MapContainer />
      </div>
    );
  }
}

export default Register;
