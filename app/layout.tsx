// pages/_app.tsx
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default RootLayout;
