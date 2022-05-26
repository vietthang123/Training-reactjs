import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

class Blog extends Component {
  render() {
    const{
      id,
      title,
      content,
      image,
      created_at,
      updated_at,
      comments_count
    } = this.props.info;

    console.log(this.props.info);

    return (
      <Paper className="blog">
        <p className="" cols="10">
          <b>
            <span className="">{id}</span>
          </b>
        </p>
        <p className="blog_title" cols="10">
          <b>
            <span className="blog-preview">
              {title}
            </span>
          </b>
        </p>
        <Divider light />
        <p className="blog_body">
          <span className="blog-preview">
            {content}
          </span>
        </p>
        <Divider light />
        <p className="blog_category">
          <b>{image}</b>
        </p>
        <Divider light />
        <p className="blog_datestamp">
          <b>{created_at}</b>
        </p>
        <p className="blog_datestamp">
          <b>{updated_at}</b>
        </p>
        <Divider light />
        <p className="blog_category">
          <b>{comments_count}</b>
        </p>
        <Divider light />
        <div className="blog_button">
          <ul className="buttons">
            <li>
              <Link to={`/blog/${id}`} className="btn btn-primary">
                {" "}
                Show{" "}
              </Link>
            </li>
          </ul>
        </div>
      </Paper>
    );
  }
}
export default Blog;
