import Head from "next/head";
import { HeroSection, Section01, Section02, Section03, Section04, Section05, Section06, Section07, ChannelSection } from "../components/Landing";
import Layout from "../components/Layout";
import { Box } from "@chakra-ui/react";
export default function Home() {
  <Head>
    {/* Primary Meta Tags */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>;
  return (
    <Layout>
      <Box className="flex flex-col" bg="#251343" color="white"> 
        <HeroSection />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <ChannelSection />
      </Box>
    </Layout>
  );
}
