import React, { Component } from "react";
import BlogCard from "../../components/Card/BlogCard";
import axios from "axios";

class ViewBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      view: false,
    };
  }

  // to load all post when page is loaded
  componentDidMount() {
    fetch(`http://localhost:5000/api/posts/`)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  // method to delete blog using id
  deleteBlog = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`).then(() => {
      fetch("http://localhost:5000/api/posts")
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            data,
          }).catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    });
  };

  handleUpdate = (id) => {
    console.log("Inside handle update");
    fetch("http://localhost:5000/api/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  };

  getUser = () => {
    this.setState({ user: localStorage.getItem("user") });
    console.log("Weareeeegettingdata", this.state.user);
  };

  render() {
    //const updateBlog = {title, desc};

    const PF = "http://localhost:5000/images/";
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <div style={{ marginTop: "20px" }} className="Cards"></div>
          <div>
            <p></p>
            <div className="travelcards">
              {this.state.data &&
                this.state.data.map((element, id) => {
                  const { _id, title, desc, photo, username, createdAt } =
                    element;
                  // Displays user specific blogs
                  return username === localStorage.getItem("user") ? (
                    <BlogCard
                      key={photo}
                      Avatar={username.charAt(0).toUpperCase()}
                      blogImage={PF + photo}
                      blogTitle={title}
                      blogDescription={createdAt}
                      blogParagraph={desc}
                      id={_id}
                      deleteBlog={() => this.deleteBlog(_id)}
                      username={username}
                      handleUpdate={() => this.handleUpdate(_id)}
                    />
                  ) : null;
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewBlog;
