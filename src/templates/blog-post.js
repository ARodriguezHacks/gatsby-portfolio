import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import BlogLayout from "../components/layout";
import BlogNavbar from "../components/blog-navbar";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <BlogLayout>
    <BlogNavbar />
    <div className="blog-container">
      <div className="blog-header-desktop">
        <div>
          <h1>Blog</h1>
          <Link to="/blog">&larr; back to all posts</Link>
        </div>
        {/* <form>
          <label for="search-bar">Search articles</label>
          <input
            type="text"
            id="search-bar"
            placeholder="Search for articles"
          />
        </form> */}
      </div>
      <article className="current-article">
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Link to="/blog">&larr; back to all posts</Link>
      </article>
    </div>
  </BlogLayout>
);

export default PostTemplate;
