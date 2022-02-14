import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Image from "next/image";
import Menu from "../Menu";
import MobileButton from "../MobileButton";
import ChangeLanguage from "./change-language";
import ConnectWallet from "./connect-wallet";
import {
	Box,
  Image as ChakraImage, 
	HStack, 
} from "@chakra-ui/react";
import Sidebar from "./sidebar";

export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { asPath } = useRouter();
  const [toggled, setToggled] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent px-4 py-4 md:px-10">
		<Box className="flex flex-row items-center justify-center w-full">
				<div className="flex-1">
        <Link href={{ pathname: "/", hash: "welcome" }}>
            <ChakraImage
              src={"/images/white-logo.svg"}
              alt="Logo"
              className="rounded-sm"
              layout="responsive"
              priority
							width={"80px"}
            />
        </Link>
				</div>
        
				<HStack>
					<ConnectWallet />
          <ChangeLanguage />
				<Sidebar />
				</HStack>
      {/* <Menu setToggled={setToggled} toggled={toggled} /> */}
			</Box>
    </nav>
  );
}
