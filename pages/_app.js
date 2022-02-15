import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from '@chakra-ui/react';
import { initNearConnection } from '../lib/auth'
import { nearStore } from '../stores/near.js';
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const state = nearStore( state => state );
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (isLoading) {
      initNearConnection( state );
      setIsLoading(false);
    }
  })
  
  return (
    <ChakraProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
