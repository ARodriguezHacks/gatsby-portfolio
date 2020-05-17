import React from "react";
import Layout from "../components/layout";
import BlogNavbar from "../components/blog-navbar";
import usePosts from "../hooks/use-posts";
import NewPostPreview from "../components/new-post-preview";

export default () => {
  const posts = usePosts();
  const firstPost = posts[0];

  return (
    <Layout>
      <BlogNavbar />
      <div className="blog-container">
        <div className="blog-header">
          <h1>My blog</h1>
          <form>
            <label>Search articles</label>
            <input type="text" placeholder="Search for articles" />
          </form>
        </div>
        <NewPostPreview post={firstPost} />
        {posts.map(post => (
          <div className="blog-item" key={post.slug}>
            <h2>{post.title}</h2>
            <p>
              Deserunt velit in minim commodo occaecat id adipisicing dolore
              dolor culpa sit duis. Ad veniam tempor qui aliqua anim ex.
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};
