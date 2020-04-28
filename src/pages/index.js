import React from "react";
import NavBar from "../components/navbar";
import Layout from "../components/layout";
import Section from "../components/section";
import Home from "../components/home";
import About from "../components/about";

export default () => (
  <Layout>
    <Home title="Home" id="home" />
    <About title="About" id="about" />
    <Section title="Portfolio" id="portfolio" />
    <Section title="Blog" id="blog" />
    <Section title="Contact" id="contact" />
  </Layout>
);
