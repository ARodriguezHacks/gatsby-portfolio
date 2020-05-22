import React from "react";
import { Link } from "gatsby";

const NewPostPreview = ({ post }) => (
  <article className="article">
    <h3>{post.title}</h3>
    <p>{post.excerpt}</p>
    <Link to={`/${post.slug}`}>read this post &rarr;</Link>
  </article>
);

export default NewPostPreview;
