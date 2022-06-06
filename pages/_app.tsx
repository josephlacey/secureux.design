import { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { AppProvider } from "components/AppProvider";
import { Layout } from "components/Layout";
import "styles/global.css";
import Favicon from "public/images/favicon.ico";

const UXSecurityWeb = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" type="image/png" href={Favicon.src} />
    </Head>
    <AppProvider>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  </>
);

export default UXSecurityWeb;
