import {
	IconButton,
	SkeletonCircle, 
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { IoWalletOutline, IoExitOutline } from "react-icons/io5";
import { login, logout } from '../../lib/auth'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
function ConnectWallet() {
	const router = useRouter();
	const { t } = useTranslation('header');
	const [ mounted, setMounted ] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return <SkeletonCircle />;

	return !window.walletConnection ?
	<IconButton fontSize="lg" aria-label={t("ariaWallet")} _hover={{ bg: "none" }} _active={{ bg: "none" }} rounded="full" variant={"outline"}
	onClick={() => {
		login();
	}}>
	<IoWalletOutline />
</IconButton>
	: 	<IconButton fontSize="lg" aria-label={t("ariaWallet")} _hover={{ bg: "none" }} _active={{ bg: "none" }} rounded="full" variant={"outline"}
	onClick={() => {
		logout();
	}}>
	<IoExitOutline />
</IconButton>;

}

export default ConnectWallet;