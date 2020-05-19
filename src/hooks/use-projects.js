import { graphql, useStaticQuery } from "gatsby";

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/contents/portfolio/" } }) {
        edges {
          node {
            frontmatter {
              title
              description
              technologies
              image {
                sharp: childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allMdx.edges.map(post => ({
    title: post.node.frontmatter.title,
    description: post.node.frontmatter.description,
    image: post.node.frontmatter.image,
    technologies: post.node.frontmatter.technologies,
  }));
};

export default useProjects;
