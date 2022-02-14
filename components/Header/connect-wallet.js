import {
	IconButton,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { IoWalletOutline } from "react-icons/io5";

function ConnectWallet() {

	const { t } = useTranslation('header');

	return (
		<IconButton fontSize="lg" aria-label={ t("ariaWallet") } _hover={{ bg: "none" }} _active={{ bg: "none" }} rounded="full" variant={"outline"}>
			<IoWalletOutline />
		</IconButton>
	)
}

export default ConnectWallet;