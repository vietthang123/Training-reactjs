import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import { Header, Navigation } from "./Layout/Layout";
import Blogs from "./Blogs";
import DetailBlog from "./DetailBlog";

class Router extends Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    this.getBlog();
  }

  getBlog = () => {
    axios
      .get(`https://api-placeholder.herokuapp.com/api/v2/blogs`)
      .then((res) => {
        this.setState({
          blogs: res.data
        });
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="row justify-content-center">
            <Navigation />

            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return <Blogs blogs={this.state.blogs} />;
                }}
              />

              <Route
                exact
                path="/blogs/{id}"
                render={(props) => {
                  let idBlog = props.location.pathname.replace("/blogs/", "");

                  const blogs = this.state.blogs;
                  let filter;
                  filter = blogs.filter((blog) => blog.id === Number(idBlog));

                  return <DetailBlog blog={filter[0]} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default Router;
