import Head from "next/head";
import { HeroSection, EmailCapture } from "../components/Landing";
import FeaturesSection from "../components/FeaturesSection";
import NewsLetterSection from "../components/NewsLetterSection";
import TeamSection from "../components/TeamSection";
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
        <EmailCapture />

        {/* old code here */}
        <FeaturesSection />
        <NewsLetterSection />
        <TeamSection />
        {/* old code here */}
      </div>
    </Layout>
  );
}
