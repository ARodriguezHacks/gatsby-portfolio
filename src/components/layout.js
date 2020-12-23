import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/user-sitemetadata";

const Layout = ({ children }) => {
  const { title, description, image, url } = useSiteMetadata();
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <div className="children">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
