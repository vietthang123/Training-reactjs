import React, { Component } from "react";
import ListBlog from "./ListBlog";
import "./Blog.css";

class Blogs extends Component {
  state = {};
  render() {
    return (
      <form className="col-md-10">
        <legend className="text-center">Blog List Page</legend>
        <ListBlog blogs={this.props.blogs} />
      </form>
    );
  }
}

export default Blogs;
