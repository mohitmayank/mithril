import React from "react";
import { object } from "prop-types";
import { Link } from "../router";

class Blog extends React.Component {
  static async getInitialProps({ query }) {
    return {
      url: {
        query,
      },
    };
  }

  render() {
    return <div>
      <h1>Blog</h1>
      <p>{this.props.url.query.slug}</p>
      <Link route="/">
        <a>Home</a>
      </Link>
    </div>;
  }
}

Blog.propTypes = {
  url: object,
};

export default Blog;
