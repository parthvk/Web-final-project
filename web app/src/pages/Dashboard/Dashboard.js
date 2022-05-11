import React, { Component } from "react";
import PropTypes from "prop-types";
import TravelCard from "../../components/Card/TravelCard";
import image1 from "../../img/images/Lasvegas2.jpg";
import "./Dashboard.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      view: false,
    };
  }

  // Fetches all the paged on page load
  componentDidMount() {
    fetch("http://localhost:5000/places")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  // Updates the places Change of state
  updateState = () => {
    fetch("http://localhost:5000/places")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div style={{ marginTop: "20px" }} className="Cards"></div>
          <div>
            <p></p>
            {/* Iterates over all the cards fetched using fetch API */}
            <div className="travelcards">
              {this.state.data &&
                this.state.data.map((element, id) => {
                  const { _id, path, title, rating, bookmarkstatus } = element;

                  return (
                    <TravelCard
                      key={path}
                      id={element.path}
                      image={image1}
                      title={title}
                      value={rating}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
