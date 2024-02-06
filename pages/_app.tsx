import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import '@/assets/css/main.css';
import Script from 'next/script';
import { StyledEngineProvider, CssBaseline } from '@mui/material';

import ReduxProvider from '@/redux/ReduxProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}></Script >
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