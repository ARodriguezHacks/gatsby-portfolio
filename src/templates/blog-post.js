import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
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
  <Layout>
    <BlogNavbar />
    <h1>{post.frontmatter.title}</h1>
    <p>{post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/blog">&larr; back to all posts</Link>
  </Layout>
);

export default PostTemplate;
