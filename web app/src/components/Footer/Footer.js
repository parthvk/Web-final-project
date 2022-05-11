import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <section className="section footer">
        {/*There are three columns for contents in footer*/}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*First Column*/}
              <h6>TRAVEL DUCKS</h6>
              <p className="text">
                Penguin Press <br />
                Travel Ducks
                <br />
              </p>
            </div>
            {/*Second Column*/}
            <div className="col-md-4">
              <h6>Contact Info</h6>
              <div>
                <p className=" mb-1">
                  75 Saint Alponsous Street, Boston, MA 02115
                </p>
              </div>
              <div>
                <p className=" mb-1">+1 888 7727 828</p>
              </div>
              <div>
                <p className=" mb-1">admin@placehoppers.com</p>
              </div>
            </div>
            {/*Third Column*/}
            <div className="col-md-4">
              <h6>Customer Service Hours</h6>
              <div>
                <p className=" mb-1">Monday - Thursday</p>
              </div>
              <div>
                <p className=" mb-1">10:00AM - 11:00PM</p>
              </div>
              <div>
                <p className=" mb-1">Friday - Sunday</p>
              </div>
              <div>
                <p className=" mb-1">12:00AM - 03:00AM</p>
              </div>
            </div>
            <hr />
            <p>© 2022 Travel Ducks. All rights reserved.</p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
