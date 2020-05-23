import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const useProfile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-pic-1.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <Image fluid={data.file.childImageSharp.fluid} alt="random pic" />
    </>
  );
};

export default useProfile;
