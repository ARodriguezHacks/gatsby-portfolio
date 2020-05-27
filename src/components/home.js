import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Home = ({ title, id }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "pink-fluid.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage
      id={id}
      className="hero"
      Tag="div"
      fluid={image.sharp.fluid}
      fadeIn="soft"
    >
      <div className="text-box">
        <h1>{title}</h1>
        <h2>Front-End Developer</h2>
      </div>
    </BackgroundImage>
  );
};

export default Home;
