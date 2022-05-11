import React, { Component } from "react";
import "./TravelCard.scss";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";

//Designing the card
class TravelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setValue: "",
      bookmark: true,
      path: this.props.id,
    };
  }

  //changing status
  changeStatus(_id, path, title, rating, status) {
    fetch(`http://localhost:5000/places/${_id}`, {
      method: "PUT",
      body: JSON.stringify({
        path: path,
        title: title,
        rating: rating,
        status: !status,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        alert("Bookmark Status Changed");
        this.props.updateState();
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  render() {
    return (
      <div className="new-card">
        <Card sx={{ maxWidth: "400px", maxHeight: "500px" }}>
          {/* //Image on the card */}
          <CardMedia
            component="img"
            height="200px"
            src={
              require("../../img/images/" + this.state.path + ".jpg").default
            }
            alt=""
          />

          <CardContent>
            <div className="topContent">
              {/* City Name */}
              <Typography gutterBottom variant="h5" component="div">
                <h5 className="title">{this.props.title}</h5>
              </Typography>
              <div className="rating">
                {/* Ratings */}
                <Rating
                  name="simple-controlled"
                  onChange={(event, newValue) => {
                    this.props.setValue(newValue);
                  }}
                  precision={0.1}
                  readOnly
                  defaultValue={this.props.value}
                />
              </div>
              <div className="bookmark">
                {this.state.bookmark ? (
                  <div
                    onClick={() =>
                      this.setState({ bookmark: !this.state.bookmark })
                    }
                  >
                    <BookmarkBorderOutlinedIcon
                      sx={{ fontSize: 40, color: blue[500] }}
                    />
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      this.setState({ bookmark: !this.state.bookmark })
                    }
                  >
                    <BookmarkIcon sx={{ fontSize: 40, color: blue[500] }} />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default TravelCard;
