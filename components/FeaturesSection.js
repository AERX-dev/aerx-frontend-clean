import Image from "next/image";
import keyboard from "../public/images/photo-1555421689-491a97ff2040.jpeg";
import pairProgrammers from "../public/images/photo-1638913665258-ddd2bceafb30.jpeg";
import exchangeValues from "../public/images/icon-park-outline_exchange-four.svg";
import monetizationBlogging from "../public/images/akar-icons_money.svg";
import servicesConstruct from "../public/images/uit_create-dashboard.svg";

export default function FeaturesSection() {
  return (
    <div className="my-12 lg:py-[139px]" id="features">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 lg:gap-10  lg:px-[100px] md:py-[150px] pb-16">
        <div className="flex flex-col w-full space-y-2">
          <div className="rounded-full p-3 sm:p-5 bg-brand-gray w-16 h-16 sm:w-[100px] sm:h-[100px] flex items-center content-center">
            <Image
              src={monetizationBlogging}
              alt="monetization-blogging"
              height={100}
              width={100}
              className="rounded-3xl"
            />
          </div>
          <h2 className="text-xl font-bold leading-9 sm:text-2xl">
            Content monetization and blogging
          </h2>
          <p className="font-normal leading-9 text-brand-text">
            Create, publish and monetize your content with Aerx
          </p>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <div className="rounded-full p-3 sm:p-5 bg-brand-gray w-16 h-16 sm:w-[100px] sm:h-[100px] flex items-center content-center">
            <Image
              src={exchangeValues}
              alt="exchange-values"
              height={100}
              width={100}
              className="rounded-3xl"
            />
          </div>
          <h2 className="text-xl font-bold leading-9 sm:text-2xl">
            Communicate and exchange values
          </h2>
          <p className="font-normal leading-9 text-brand-text">
            Communicate and exchange values with Aerx
          </p>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <div className="rounded-full p-3 sm:p-5 bg-brand-gray w-16 h-16 sm:w-[100px] sm:h-[100px] flex items-center content-center">
            <Image
              src={servicesConstruct}
              alt="services-construct"
              height={100}
              width={100}
              className="rounded-3xl"
            />
          </div>
          <h2 className="text-xl font-bold leading-9 sm:text-2xl">
            Construct and create services
          </h2>
          <p className="font-normal leading-9 text-brand-text">
            Create and construct your services with Aerx
          </p>
        </div>
      </div>
      <div className="lg:space-y-[156px] space-y-16">
        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Image src={keyboard} alt="keyboard" layout="responsive" />
          </div>
          <div className="lg:p-[100px] lg:space-y-[26px] lg:w-1/2 px-4 space-y-4">
            <h2 className="text-4xl font-semibold leading-10 lg:leading-[65px]">
              Content monetization Blogging with COMP Module
            </h2>
            <p className="text-lg font-normal leading-9 text-brand-text">
              In aerx, data on published content will be stored in the
              blockchain (smart contracts store text, images/videos and their
              sources in the blockchain), and the AI algorithm will find
              duplicate content, analyze it, determine the original source and
              link all other duplicate publications to it.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <Image
              src={pairProgrammers}
              alt="pair-programmers"
              layout="responsive"
            />
          </div>
          <div className="lg:p-[100px]  lg:space-y-[26px] lg:w-1/2 px-4 space-y-4">
            <h2 className="text-4xl font-semibold leading-10 lg:leading-[65px]">
              Communicate and exchange values with (VALUENGR)
            </h2>
            <p className="text-lg font-normal leading-9 text-brand-text">
              With VALUENGR, it will be possible to communicate, make
              payments,exchange and purchase/sale of digitized tangible assets,
              and without any intermediaries and without leaving the chat.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Image src={keyboard} alt="keyboard" layout="responsive" />
          </div>
          <div className="lg:p-[100px] lg:space-y-[26px] lg:w-1/2 px-4 space-y-4">
            <h2 className="text-4xl font-semibold leading-10 lg:leading-[65px]">
              Construct and create services with SEC Module
            </h2>
            <p className="text-lg font-normal leading-9 text-brand-text">
              Due to the built-in payment system and the versatility of SEC,
              sellers will be able to open full-fledged online stores inside the
              platform, so they will not have to create additional sites with
              storefronts and connected acquiring and redirect buyers there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
