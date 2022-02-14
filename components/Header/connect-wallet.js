import {
	IconButton,
} from "@chakra-ui/react";

import { IoWalletOutline } from "react-icons/io5";

function ConnectWallet() {
	return (
		<IconButton fontSize="lg" _hover={{ bg: "none" }} _active={{ bg: "none" }} rounded="full" variant={"outline"}>
			<IoWalletOutline />
		</IconButton>
	)
}

export default ConnectWallet;