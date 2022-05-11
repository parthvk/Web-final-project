import React, { Component } from "react";
import imagebg from "../../img/images/Miami.jpg";

//Background for login and register page
class Background extends Component {
  render() {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide1"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imagebg} className=" w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Travel, Breathe and Be the Difference!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
