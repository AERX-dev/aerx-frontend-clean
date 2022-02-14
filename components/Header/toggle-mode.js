import {
	IconButton,
	useColorMode,
} from "@chakra-ui/react";

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function ConnectWallet() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<IconButton onClick={ toggleColorMode } fontSize="lg" _hover={{ bg: "none" }} _active={{ bg: "none" }} rounded="full" variant={"outline"}>
			{ colorMode === "light" ? <IoSunnyOutline /> : <IoMoonOutline /> }
		</IconButton>
	)
}

export default ConnectWallet;