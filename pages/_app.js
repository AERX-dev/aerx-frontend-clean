import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from '@chakra-ui/react';
import { initContract } from './auth'

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    window.nearInitPromise = initContract();
  }
  return (
    <ChakraProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
