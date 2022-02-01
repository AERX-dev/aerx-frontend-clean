import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import aerxLogo from "../public/images/aerx_logo-removebg.svg";
import Menu from "./Menu";
import MobileButton from "./MobileButton";
import ChangeLanguage from "./ChangeLanguage";

export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { asPath } = useRouter();
  const [toggled, setToggled] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 items-center w-full px-4 pb-4 bg-transparent md:flex-row md:flex md:py-4 md:px-20">
      <div className="flex flex-row items-center justify-center w-full p-2 md:w-auto">
        <Link href={{ pathname: "/", hash: "welcome" }}>
          <a className="w-[78px] h-[75px] bg-transparent hover:bg-white">
            <Image
              src={aerxLogo}
              alt="aerx-logo"
              className="rounded-sm"
              layout="responsive"
              alt="aerx logo"
              priority
              height={100}
              width={100}
            />
          </a>
        </Link>
        <div className="block ml-8 md:hidden">
          <ChangeLanguage />
        </div>
        <MobileButton setToggled={setToggled} toggled={toggled} />
      </div>

      <Menu setToggled={setToggled} toggled={toggled} />
    </nav>
  );
}
