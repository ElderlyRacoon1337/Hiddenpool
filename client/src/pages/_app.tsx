import '@/styles/globals.scss';
import { themeOptions } from '@/utils/theme';
import { CssBaseline, ThemeProvider } from 'cutie-ui';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themeOptions={themeOptions}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
