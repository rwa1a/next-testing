import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Container from "../components/Container";

const ExamplePage = () => (
  <Layout>
    <Container>
      <h1>Look how easy..</h1>
      <p>
        Now go <Link href="/">Home</Link>!
      </p>
    </Container>
  </Layout>
);

export default ExamplePage;
