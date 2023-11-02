import { useState } from 'react';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '@/next-i18next.config';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
