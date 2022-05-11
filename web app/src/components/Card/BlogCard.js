import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Popup from "./Popup";
import { useState } from "react";
import axios from "axios";
import "./BlogCard.scss";

//Expands the card on View Blogs page
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [buttonPopup, setButtonPopup] = React.useState(false);
  const [title, setTitle] = useState(props.blogTitle);
  const [desc, setDesc] = useState(props.blogParagraph);
  const [updateMode, setUpdateMode] = useState(false);

  //Changes the status for expand button
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //Updates the title and description of the blog
  const handleUpdateButton = async (e) => {
    e.preventDefault();
    setUpdateMode(false);
    console.log("blog card title=", title);

    console.log("title", title);
    console.log("desc", desc);
    await axios.put(`/api/posts/${props.id}`, {
      title,
      desc,
    });

    console.log("Before handle update");
    const update = props.handleUpdate(props.id);
  };

  return (
    //Materia UI used to develop the cards
    <Card sx={{ maxWidth: 345 }}>
      {/* Text field is shown when edit button is clicked */}
      {updateMode ? (
        <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.Avatar}
            </Avatar>
          }
          title={props.blogTitle}
        />
      )}

      {/* Shows the image of the blog */}
      <CardMedia //Image on the card
        component="img"
        height="200px"
        image={props.blogImage}
        alt="Image"
      />

      {/* Shows the author and creation date */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b> Created At </b> : {new Date(props.blogDescription).toDateString()}{" "}
          <br />
          <b> Blog Owner </b> : {props.username}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" onClick={() => setButtonPopup(true)}>
          <ShareIcon />
        </IconButton>

        {/* Code for sharing  */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="socialmedia">
            <h1>
              <a href="https://www.facebook.com/" className="facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </h1>
            <h1>
              <a href="https://web.whatsapp.com/" className="whatsapp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </h1>
            <h1>
              <a href="https://twitter.com/" className="twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </h1>
            <h1>
              <a href="https://www.instagram.com/" className="instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </h1>
          </div>
          <button className="btnclose" onClick={() => setButtonPopup(false)}>
            close
          </button>
        </Popup>

        {/* Delete button and edit button */}
        {props.username === localStorage.getItem("user") ? (
          <div
            className="delete-blog p-2"
            onClick={() => props.deleteBlog(props.id)}
          >
            <i class="fa-solid fa-trash-can fa-lg"></i>
          </div>
        ) : null}

        {props.username !== localStorage.getItem("user") ? null : (
          <div className="update-blog p-2">
            {updateMode ? (
              <i
                class="singlePostIcon fa-solid fa-ban fa-lg"
                onClick={() => setUpdateMode(false)}
              ></i>
            ) : (
              <i
                className="singlePostIcon far fa-edit fa-lg"
                onClick={() => setUpdateMode(true)}
              ></i>
            )}
          </div>
        )}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <Typography paragraph>{props.blogParagraph}</Typography>
          )}

          {updateMode ? (
            <button className="singlePostButton" onClick={handleUpdateButton}>
              Update
            </button>
          ) : null}
        </CardContent>
      </Collapse>
    </Card>
  );
}
