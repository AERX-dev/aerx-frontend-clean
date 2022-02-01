import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/aerx_log.png";
import facebook from "../public/images/facebook.svg";
import twitter from "../public/images/twitter.svg";
import linkedIn from "../public/images/linkedIn.svg";
import footerLogo from "../public/images/aerx_logo-removebg.svg";
import footerLogoImg from "../public/images/aerx_logo-removebg.jpg";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-5 lg:gap-4 py-10 lg:px-[100px] lg:py-[100px] lg:h-[450px] bg-white border-2 border-red-400">
      <div className="flex flex-col items-start w-full px-5 sm:flex-row lg:col-span-2 sm:px-16 lg:px-0 lg:flex-col">
        <div className="relative h-[82px] w-20 sm:w-44 mb-[27px]">
          <Image src={footerLogoImg} alt="footer-logo" layout="fill" />
        </div>
        <div>
          <p className="text-lg font-normal leading-9 sm:ml-6 text-brand-text">
            Made to equip their digital space by creating a more appropriate
            atmosphere for their page, community or blog.
          </p>
        </div>
      </div>
      <div className="w-full px-5 sm:px-16 lg:px-0">
        <h5 className="text-xl sm:text-2xl font-semibold leading-9 text-black mb-4 pt-4 lg:mb-[58px] lg:pt-[15px]">
          Sitemap
        </h5>
        <ul className="flex flex-row flex-wrap px-4 text-lg font-normal leading-9 list-disc lg:space-x-0 lg:flex-col text-brand-text marker:text-brand-social">
          <li className="ml-0">
            <Link href="/#welcome">
              <a className="hover:text-brand">Home</a>
            </Link>
          </li>
          <li className="ml-7">
            <Link href="/#features">
              <a className="hover:text-brand">Features</a>
            </Link>
          </li>
          <li className="ml-7">
            <Link href="/#aboutUs">
              <a className="hover:text-brand">About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full px-5 sm:px-16 lg:px-0 ">
        <h5 className="text-xl sm:text-2xl font-semibold leading-9 text-black mb-4 pt-4 lg:mb-[58px] lg:pt-[15px]">
          Quick Links
        </h5>
        <ul className="flex flex-row flex-wrap px-4 text-lg font-normal leading-9 list-disc lg:space-x-0 lg:flex-col text-brand-text marker:text-brand-social">
          <li className="ml-0">
            <Link href="#">
              <a className="hover:text-brand">COMP Module</a>
            </Link>
          </li>
          <li className="ml-7">
            <Link href="#">
              <a className="hover:text-brand">VALUENGR</a>
            </Link>
          </li>
          <li className="ml-7">
            <Link href="#">
              <a className="hover:text-brand">SEC Module</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full px-5 sm:px-16 lg:px-0">
        <h5 className="text-xl sm:text-2xl font-semibold leading-9 text-black mb-4 pt-4 lg:mb-[58px] lg:pt-[15px]">
          Get in Touch
        </h5>
        <div className="flex flex-row space-x-4">
          <Link href="#">
            <a className="hover:bg-brand/10 hover:py-1 hover:px-1">
              <Image
                src={facebook}
                alt="facebook-logo"
                height={30}
                width={30}
              />
            </a>
          </Link>

          <Link href="#">
            <a className="hover:bg-brand/10 hover:py-1 hover:px-1">
              <Image src={twitter} alt="twitter-logo" height={30} width={30} />
            </a>
          </Link>
          <Link href="#">
            <a className="hover:bg-brand/10 hover:py-1 hover:px-1">
              <Image
                src={linkedIn}
                alt="linkedIn-logo"
                height={30}
                width={30}
              />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
