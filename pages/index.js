import Head from "next/head";
import { HeroSection, EmailCapture, Features } from "../components/Landing";
import Layout from "../components/Layout";

export default function Home() {
  <Head>
    {/* Primary Meta Tags */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>;
  return (
    <Layout>
      <div className="flex flex-col">
        <HeroSection />
        <Features />
        <EmailCapture />
      </div>
    </Layout>
  );
}
