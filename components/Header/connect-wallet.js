import {
	IconButton,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { IoWalletOutline } from "react-icons/io5";
import { login, logout } from '../../pages/auth'
import { useRouter } from 'next/router'

function ConnectWallet() {
	const router = useRouter();
	const { t } = useTranslation('header');

	// if (window!=='undefined' && !window.walletConnection.isSignedIn()) {
		return (
			<IconButton fontSize="lg" aria-label={t("ariaWallet")} _hover={{ bg: "none" }} _active={{ bg: "none" }} rounded="full" variant={"outline"}
				onClick={() => {
					login();
				}}>
				<IoWalletOutline />
			</IconButton>
		)
	// }
}

export default ConnectWallet;