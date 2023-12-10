import { useState } from 'react';
import Head from 'next/head';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '@/next-i18next.config';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'YeongdeokSea',
  },
  palette: {
    primary: {
      main: '#6F40FF',
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Hoodie Plan</title>
        <meta name='description' content='Copyright © 2023 Team Hoodie All rights reserved' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
