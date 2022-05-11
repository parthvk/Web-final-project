import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../services/userService";
import "./ForgotPassword.scss";
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
// import emailService from "../../services/emailService";

class ForgotPassword extends Component {
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
    const { email } = this;
    const { data } = await getUser(email.value);
    if (data.length === 0) {
      //if user doesn't exist or password doesn't match
      console.log("User Not found");
      return;
    }
    this.setState({ find: true });
    // localStorage.setItem("user", email.value);
    // localStorage.setItem("password", data[0].Password);
    // this.props.addUser();
    // emailService((email = email.value), (password = data[0].Password));
    // console.log("Test");
    // console.log(email.value);
    // console.log(data[0].Password);
    // emailService(email = email.value, (password = data[0].Password));

    // $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
    //   type: "POST",
    //   data: JSON.stringify({
    //     service_id: "service_wmqbn35",
    //     template_id: "template_js1rl2v",
    //     user_id: "ZYDepprE9D06NyKGc",
    //     template_params: {
    //       email: email.value,
    //       password: data[0].Password,
    //     },
    //   }),
    //   contentType: "application/json",
    // })
    //   .done(function () {
    //     alert("Your mail is sent!");
    //   })
    //   .fail(function (error) {
    //     alert("Oops... " + JSON.stringify(error));
    //   });

    fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_wmqbn35",
        template_id: "template_js1rl2v",
        user_id: "ZYDepprE9D06NyKGc",
        template_params: {
          email: email.value,
          password: data[0].Password,
        },
      }),
    })
      .then(() => {
        alert("Your Email is sent!");
      })
      .catch((err) => {
        if (err) throw err;
      });
    // <emailService email={email.value} password={data[0].Password} />;
    // window.location.replace("/login");
  };

  //  handleSubmit = (e) => {
  //   e.preventDefault(); // Prevents default refresh by the browser
  //   emailService(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
  //   .then((result) => {
  //   alert("Message Sent, We will get back to you shortly", result.text);
  //   },
  //   (error) => {
  //   alert("An error occurred, Please try again", error.text);
  //   });
  //   };

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

              <p></p>
              <Button type="submit" bsStyle="primary">
                Reset Password
              </Button>
              <p></p>
              <span>
                <Link to="/login">Login</Link>
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

export default ForgotPassword;
