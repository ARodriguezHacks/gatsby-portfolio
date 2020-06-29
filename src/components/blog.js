import React from "react";
import { Link } from "gatsby";
import PostPreview from "./post-preview";
import usePostsPreview from "../hooks/use-posts-preview";

export default ({ title, id }) => {
  const posts = usePostsPreview();

  return (
    <div id={id}>
      <div className="blog-wrapper">
        <header>
          <h2 className="section-heading">{title}</h2>
          <Link to="/blog">Visit Blog &rarr;</Link>
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
