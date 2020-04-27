import React from "react";
//import Landing from "../components/landing";
import NavBar from "../components/navbar";
// import About from "../components/about";
// import Portfolio from "../components/portfolio";
// import Blog from "../components/blog";
// import Contact from "../components/contact";
import Layout from "../components/layout";
import Section from "../components/section";

export default () => (
  <Layout>
    <NavBar />
    <Section title="Home" id="home" />
    <Section title="About" id="about" />
    <Section title="Portfolio" id="portfolio" />
    <Section title="Blog" id="blog" />
    <Section title="Contact" id="contact" />
  </Layout>
);
