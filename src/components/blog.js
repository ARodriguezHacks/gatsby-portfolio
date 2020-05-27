import React from "react";
import { Link } from "gatsby";
import PostPreview from "./post-preview";
import usePosts from "../hooks/use-posts";

export default ({ title, id }) => {
  const posts = usePosts();

  return (
    <div id={id}>
      <div className="blog-wrapper">
        <header>
          <h2>{title}</h2>
          <p>Read my latest articles</p>
          <Link to="/blog">Visit Blog</Link>
        </header>
        <section className="blog-preview-container">
          <div className="blog-preview-content">
            {posts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
