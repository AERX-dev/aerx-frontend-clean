import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from '@chakra-ui/react';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
