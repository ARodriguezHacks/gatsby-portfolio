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
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <BlogLayout>
    <BlogNavbar />
    <div class="blog-container">
      <div className="blog-header">
        <h1>My blog</h1>
        <form>
          <label for="search-bar">Search articles</label>
          <input
            type="text"
            id="search-bar"
            placeholder="Search for articles"
          />
        </form>
      </div>
      <article className="current-article">
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.author}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Link to="/blog">&larr; back to all posts</Link>
      </article>
    </div>
  </BlogLayout>
);

export default PostTemplate;
