import Link from "next/link";
import i18Config from "../../i18n.json";
import useTranslation from "next-translate/useTranslation";
import setLanguage from 'next-translate/setLanguage';

import { useRouter } from "next/router";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";

const { locales } = i18Config;

export default function ChangeLanguage() {
  const { t, lang } = useTranslation();
  const { asPath } = useRouter();

  return (
    <Menu size="xs">
        <MenuButton _hover={{ bg: "none" }} _active={{ bg: "none" }} as={IconButton} rounded="full" variant="outline" >
          {lang.toUpperCase()}
        </MenuButton>

        <MenuList  maxWidth={"100px"}>
          <MenuItem onClick={async () => await setLanguage('en')}><b>en</b> English</MenuItem>
          <MenuItem onClick={async () => await setLanguage('es')}>Spanish</MenuItem>
          {/* <MenuItem onClick={async () => await setLanguage('hi_IN')}>hi_IN</MenuItem> */}
          <MenuItem onClick={async () => await setLanguage('ru')}>Russian</MenuItem>
          {/* <MenuItem onClick={async () => await setLanguage('uz_Latn_UZ')}>uz_Latn_UZ</MenuItem> */}
        </MenuList>
      </Menu>
  )
}
