import React, { Component } from "react";

import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

class DetailBlog extends Component {
  showBlog = (props) => {
    if (!props.blog) return null;

    const {
      id,
      title,
      content,
      image,
      created_at,
      updated_at,
      comments_count
    } = this.props.blog;

    return (
      <React.Fragment>
        <Paper className="detail_blog">
          <h4>Id: {id}</h4>
          <Divider light />
          <p>
            <b>Title:</b> {title}
          </p>
          <Divider light />
          <p>
            <b>Content:</b> {content}
          </p>
          <Divider light />
          <p>
            <b>Image:</b> {image}
          </p>
          <Divider light />
          <p>
            <b>Created_at:</b> {created_at}
          </p>
          <Divider light />
          <p>
            <b>updated_at:</b> {updated_at}
          </p>
          <Divider light />
          <p>
            <b>comments_count:</b> {comments_count}
          </p>
          <Divider light />
        </Paper>
      </React.Fragment>
    );
  };
  render() {
    return <div className=" col-md-10">{this.showBlog(this.props)}</div>;
  }
}

export default DetailBlog;
