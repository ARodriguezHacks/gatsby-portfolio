import React from "react";
import { Link } from "gatsby";
import PostPreview from "./post-preview";
import usePosts from "../hooks/use-posts";

export default ({ title, id }) => {
  const posts = usePosts();

  return (
    <div id={id}>
      <div className="blog-content">
        <header>
          <h1>{title}</h1>
          <p>Read my latest articles</p>
          <Link to="/blog">Visit Blog</Link>
        </header>
        <div className="post-preview-container portfolio-blog">
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
