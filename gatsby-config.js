module.exports = {
  siteMetadata: {
    title: "Angie Rodriguez Developer Portfolio",
    description: "Portfolio and blog website of Angie Rodriguez",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "contents/blog",
      },
    },
  ],
};
