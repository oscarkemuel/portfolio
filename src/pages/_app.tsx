import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import NextNProgress from "nextjs-progressbar";
import { Provider } from "urql";

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Footer } from '../components/Footer';
import { client, ssrCache } from '../lib/apollo';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <GlobalStyle />
      <NextNProgress color="var(--red)"  />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </Provider>
  );
};

export default MyApp;