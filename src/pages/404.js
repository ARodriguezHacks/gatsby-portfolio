import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

const NotFoundPage = () => (
  <Layout>
    <Navbar />
    <section>
      <div>
        <p>The page you are looking for doesn't exist, or has been removed.</p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
