import Link from "next/link";
import i18Config from "../../i18n.json";
import useTranslation from "next-translate/useTranslation";
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

  return locales.map((lng) => {
    if (lng === lang) return null;

    return (
      <a href={asPath} locale={lng} key={lng}>
				<Menu>
  <MenuButton _hover={{ bg: "none" }} _active={{bg: "none"}}  as={IconButton} rounded="full" variant="outline" >
	{lng.toUpperCase()}
  </MenuButton>

  <MenuList>
    <MenuItem>en</MenuItem>
    <MenuItem>es</MenuItem>
    <MenuItem>hi_IN</MenuItem>
    <MenuItem>ru</MenuItem>
    <MenuItem>uz_Latn_UZ</MenuItem>
  </MenuList>
</Menu>
       
      </a>
    );
  });
}
