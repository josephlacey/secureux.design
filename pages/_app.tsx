import { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { AppProvider } from "components/AppProvider";
import { Layout } from "components/Layout";
import "styles/global.css";
import Favicon from "public/images/favicon.ico";
import SiteIcon from "public/images/uxs-icon-1.png";

const UXSecurityWeb = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" type="image/png" href={Favicon.src} />

      <meta name="twitter:site" content="@open_archive" />
      <meta name="twitter:title" content="Human Rights Centered Design" />
      <meta
        name="twitter:description"
        content="An online, open source curriculum focusing on how to center human rights throughout the research, design, and development processes."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={SiteIcon.src} />

      <meta property="og:title" content="Human Rights Centered Design" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.humanrightscentered.design"
      />
      <meta
        name="og:description"
        content="An online, open source curriculum focusing on how to center human rights throughout the research, design, and development processes."
      />
      <meta property="og:image" content={SiteIcon.src} />
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
