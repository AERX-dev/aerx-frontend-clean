import Image from "next/image";
import heroImage from "../public/images/undraw_developer_activity_re_39tg.svg";
import heroAnimation from "../public/images/animation_500_kycpvvj8 1.svg";
export default function HeroSection() {
  return (
    <section
      className="flex flex-col lg:flex-row lg:h-[850px] lg:-mt-[145px]"
      id="welcome"
    >
      <div className="flex flex-col px-4 py-14 w-full lg:w-1/2 lg:px-[100px] lg:pt-[200px] space-y-6 lg:space-y-9">
        <h1 className="font-semibold text-[40px] lg:text-[64px] lg:leading-[85px]">
          Welcome to <span className="text-brand">Aerx</span> modular social
          Network
        </h1>
        <p className="text-lg font-normal leading-9 text-brand-text">
          Made to equip their digital space by creating a more appropriate
          atmosphere for their page, community or blog. In other words, make
          her/him more authentic.
        </p>
        <button className="px-[40px] lg:px-[73px] py-6 btn btn-brand w-fit font-medium lg:leading-[27px]">
          Get Started
        </button>
      </div>
      <div className="w-full lg:w-1/2 md:h-full lg:p-20 lg:pt-36 bg-brand/10 rounded-bl-4xl">
        <Image
          src={heroImage}
          alt="hero"
          layout="responsive"
          height={400}
          width={400}
        />
      </div>
    </section>
  );
}
