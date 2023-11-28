import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import '@/assets/css/main.css';
import { StyledEngineProvider, CssBaseline } from '@mui/material';

import ReduxProvider from '@/redux/ReduxProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ZAIBA</title>
        <Link rel="stylesheet" href="@/assets/css/main.css" />
        <Link rel="stylesheet" href="@/assets/css/font-awesome-pro.css" />
      </Head>
      
      <ReactQueryProvider>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <ReduxProvider>
            <Component {...pageProps} />
          </ReduxProvider>
        </StyledEngineProvider>
      </ReactQueryProvider>
    </>

  )
}