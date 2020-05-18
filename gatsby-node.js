exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/contents/blog/" } }) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }
  const posts = result.data.allMdx.edges;

  posts.forEach(post => {
    actions.createPage({
      path: post.node.frontmatter.slug,
      component: require.resolve("./src/templates/blog-post.js"),
      context: {
        slug: post.node.frontmatter.slug,
      },
    });
  });
};
