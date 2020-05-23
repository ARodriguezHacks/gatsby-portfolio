import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import Home from "../components/home";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Blog from "../components/blog";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, fab);

export default () => (
  <Layout>
    <Navbar />
    <Home title="Angie Rodriguez" id="home" />
    <About title="About" id="about" />
    <Portfolio title="Portfolio" id="portfolio" />
    <Blog title="Blog" id="blog" />
    <Contact title="Contact" id="contact" />
  </Layout>
);
