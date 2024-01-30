import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { CardClassKey, CssBaseline } from '@mui/material';
import theme from '@/src/utils/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import { CardProps } from '@/src/interfaces';

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<CardProps[]>([]);

  const addToTheCart = (product: CardProps) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} cart={cart} addToTheCart={addToTheCart} />
    </ThemeProvider>
  );
}