import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

// const HeroBackground = () => {
//   return (
//     <>
//       <BackgroundImage />
//     </>
//   );
// };

const Home = ({ title, id }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "pink-fluid.jpg" }) {
        sharp: childImageSharp {
          # Specify the image processing specifications right in the query.
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
        <h2>Web Developer</h2>
        <p>
          I am a front-end developer with a passion for web design and love to
          create for web and mobile devices.
        </p>
      </div>
    </BackgroundImage>
  );
};

export default Home;
