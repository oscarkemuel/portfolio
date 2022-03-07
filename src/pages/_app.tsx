import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import NextNProgress from "nextjs-progressbar";

import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <NextNProgress color="var(--red)"  />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;