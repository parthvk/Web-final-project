import React, { Component } from "react";
import front1 from "../../img/abc.jpg";
import front2 from "../../img/abc1.jpg";
import front3 from "../../img/abc2.jpg";
import "./slider.scss";
import Weather from "../../pages/Weather/Weather.js";

class Slider extends Component {
  render() {
    return (
      // used bootstrap carousel for this part of content
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        {/* First Div of the carousel*/}
        <div className="carousel-inner">
          <div class="carousel-item active">
            <img src={front1} className="d-block w-100" alt="..." />

            <div className="carousel-caption d-none d-md-block">
              <div class="search">
                <Weather />
              </div>
            </div>
          </div>
          {/* Second Div of the carousel*/}
          <div className="carousel-item">
            <img src={front2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Always best places and blogs</h4>
              <p className="white-text">
                Feel, be, share and love the difference!
              </p>
            </div>
          </div>
          {/* Third Div of the carousel*/}
          <div className="carousel-item">
            <img src={front3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Sign up and be the difference</h4>
              <p className="white-text">
                A travel app with office located in the heart of Boston
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
export default Slider;
