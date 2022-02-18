import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Image from "next/image";
import ChangeLanguage from "./change-language";
import ConnectWallet from "./connect-wallet";
import ToggleMode from "./toggle-mode";
import {
  Box,
  Image as ChakraImage,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Sidebar from "./sidebar";
import useTranslation from "next-translate/useTranslation";


function Header () {
  const { colorMode } = useColorMode()
  const { t } = useTranslation('header');
  const bg = useColorModeValue("#ffffffdd", "#0a0a0add");

  return (
    <Box bg={bg} as="nav" backdropFilter={"blur(8px)"} className="sticky top-0 z-50 w-full bg-transparent px-4 py-4 md:px-10">
      <Box className="flex flex-row items-center justify-center w-full">
        <div className="flex-1">
          <Link href={{ pathname: "/" }}>
            <ChakraImage
              src={colorMode === "light" ? "/images/dark-logo.svg" : "/images/white-logo.svg"}
              alt={t('logoAlt')}
              className="rounded-sm"
              layout="responsive"
              cursor={"pointer"}
              width={"80px"}
            />
          </Link>
        </div>


        <HStack>
          {/* <ToggleMode /> */}
          <ChangeLanguage />
          <ConnectWallet/>
          {/* <Sidebar /> */}
        </HStack>
      </Box>
    </Box>
  );
}

export default Header;