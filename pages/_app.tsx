/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { I18n } from "react-polyglot";
import { AppProvider } from "../components/common/AppProvider";
import createEmotionCache from "../lib/createEmotionCache";
import en from "../locales/en.json";
import "../styles/global.css";
import "@fontsource/roboto/400.css";

const clientSideEmotionCache: any = createEmotionCache();
const locale = "en";
const messages = { en };

interface SecureUXProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

export default function SecureUXWeb(props: SecureUXProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <I18n locale={locale} messages={messages[locale]}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </I18n>
    </CacheProvider>
  );
}
