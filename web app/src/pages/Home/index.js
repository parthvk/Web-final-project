import React, { Component } from "react";
import Slider from "../../components/Slider/Slider";
import MapContainer from "../../components/MapContainer/MapContainer";
class Home extends Component {
  //

  render() {
    return (
      <div>
        <Slider />
        {/* Bootstrap carousel for this part of the content*/}

        {/*Our value and story below*/}
        <section className="section bg-c-light border-top">
          {/*About our story and value*/}
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">About Us</h3>
                <div className="underline mx-auto"></div>
              </div>
              {/*Our value*/}
              <div className="col-md-4 text-center">
                <h6>Our Mission</h6>
                <p>
                  At Travel Ducks, we believe that at the end you regret places
                  that you didn't go. We enable people to find places to visit.
                </p>
              </div>
              {/*Our value*/}
              <div className="col-md-4 text-center">
                <h6>Our Story</h6>
                <p>
                  We are four college students who are enthusiast travelers and
                  like to share our travel stories. Creating a platform just for
                  travel and sharing those experiences is like one down in our
                  bucketlist. We want to create a business where quality was
                  never sacrificed for convenience.
                </p>
              </div>
              {/*Our story*/}
              <div className="col-md-4 text-center">
                <h6>Our Value</h6>
                <p>
                  The better the place the you are, the better you will feel,
                  the better decisions you will make, and the easier it will be
                  to conquer the obstacles of life. So take a break.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*What customers say about us*/}
        {/* <Cards /> */}
        {/* <Customer /> */}
        <hr></hr>
        <div className="col-md-12 mb-4 text-center">
          <h3 className="main-heading">Your Location</h3>
          <div className="underline mx-auto"></div>
        </div>
        <MapContainer />
        {/* <Footer/>                     */}
      </div>
    );
  }
}

export default Home;
