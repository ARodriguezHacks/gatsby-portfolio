import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/contents/blog/" } }
      ) {
        nodes {
          frontmatter {
            author
            slug
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
