import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Section from "../components/section";
import Home from "../components/home";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Blog from "../components/blog";

export default () => (
  <Layout>
    <Navbar />
    <Home title="Home" id="home" />
    <About title="About" id="about" />
    <Portfolio title="Portfolio" id="portfolio" />
    <Blog title="Blog" id="blog" />
    <Section title="Contact" id="contact" />
  </Layout>
);
