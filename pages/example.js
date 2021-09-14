import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import AlmostJquery from "../components/AlmostJquery";
import Container from "../components/Container";
import ServerlessButton from "../components/ServerlessButton";

const ExamplePage = () => (
  <Layout>
    <Container>
      <h1>Look how easy..</h1>
      <AlmostJquery />
      <ServerlessButton />
      <p>
        Now go <Link href="/">Home</Link>!
      </p>
    </Container>
  </Layout>
);

export default ExamplePage;
