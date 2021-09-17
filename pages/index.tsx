import Head from "next/head";
import Link from "next/link";
import { Container, Typography } from "@material-ui/core";
import { Layout } from "../components/common/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SecureUX.Design</title>
      </Head>
      <Container>
        <Typography variant="h3">Home</Typography>
        <br />
        <br />
        <Link href="/test">Go to Test Page</Link>
      </Container>
    </Layout>
  );
}
