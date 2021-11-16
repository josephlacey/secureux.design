/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { I18n } from "react-polyglot";
import { AppProvider } from "components/AppProvider";
import { Layout } from "components/Layout";
import createEmotionCache from "lib/createEmotionCache";
import en from "locales/en.json";
import "styles/global.css";

const clientSideEmotionCache: any = createEmotionCache();
const locale = "en";
const messages = { en };

interface UXSecurityProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

export default function UXSecurityWeb(props: UXSecurityProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <I18n locale={locale} messages={messages[locale]}>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </I18n>
    </CacheProvider>
  );
}
