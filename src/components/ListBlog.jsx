import React, { Component } from "react";
import Blog from "./Blog";
import "./Blog.css";

class ListBlog extends Component {
  showBlogs = () => {
    const blogs = this.props.blogs;
    if (blogs.length === 0) return null;
    return (
      <div classname="blog_list_item">
        <React.Fragment>
          {Object.keys(blogs).map((blog) => (
            <Blog key={blogs} info={this.props.blogs[blog]} />
          ))}
        </React.Fragment>
      </div>
    );
  };

  render() {
    return <div classname="blog_list">{this.showBlogs()}</div>;
  }
}

export default ListBlog;
