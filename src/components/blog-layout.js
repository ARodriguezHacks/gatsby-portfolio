import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/user-sitemetadata";

const BlogLayout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="children">{children}</div>
    </React.Fragment>
  );
};

export default BlogLayout;
