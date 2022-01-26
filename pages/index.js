import Head from "next/head";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import NewsLetterSection from "../components/NewsLetterSection";
import TeamSection from "../components/TeamSection";
import LayoutSection from "../components/LayoutSection";

export default function Home() {
  <Head>
    {/* Primary Meta Tags */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>;
  return (
    <LayoutSection>
      <div className="flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <NewsLetterSection />
        <TeamSection />
      </div>
    </LayoutSection>
  );
}
