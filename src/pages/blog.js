import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import BlogNavbar from "../components/blog-navbar";
import usePosts from "../hooks/use-posts";

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <BlogNavbar />
      <div className="blog-container">
        <div className="blog-header-desktop">
          {/* <form>
            <label for="search-bar">Search articles</label>
            <input
              type="text"
              id="search-bar"
              placeholder="Search for articles"
            />
          </form> */}
        </div>

        {posts.map(post => (
          <div className="blog-item" key={post.slug}>
            <h3>
              <Link to={`/${post.slug}`} className="article-link">
                {post.title}
              </Link>
            </h3>
            <small>{post.date}</small>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};
