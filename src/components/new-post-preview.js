import React from "react";
import { Link } from "gatsby";

const NewPostPreview = ({ post }) => (
  <article className="current-article-preview">
    <h3>{post.title}</h3>
    <small>{post.date}</small>
    <p>{post.excerpt}</p>
    <Link to={`/${post.slug}`}>read this post &rarr;</Link>
  </article>
);

export default NewPostPreview;
