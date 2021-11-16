import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { AppProvider } from "components/AppProvider";
import { Layout } from "components/Layout";
import "styles/global.css";

const UXSecurityWeb = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <CssBaseline />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppProvider>
);

export default UXSecurityWeb;
