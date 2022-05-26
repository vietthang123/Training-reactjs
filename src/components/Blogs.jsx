import React, { Component } from "react";
import Listing from "./Listing";
import "./Blog.css";

class Blogs extends Component {
  state = {};
  render() {
    return (
      <form className="col-md-10">
        <legend className="text-center">Blog List Page</legend>
        <Listing blogs={this.props.blogs} />
      </form>
    );
  }
}

export default Blogs;
