import { 
	Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
	useDisclosure, 
	Button, 
	Textarea, 
} from "@chakra-ui/react";

function NewPost () {

	const { isOpen, onOpen, onClose } = useDisclosure()



	return (
		<>
		<Button onClick={onOpen}>New Post</Button>

		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent mx={5} rounded="xl">
				<ModalHeader>New Post</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Textarea />
				</ModalBody>

				<ModalFooter>
					<Button variant='ghost' mr={3} onClick={onClose}>
						Close
					</Button>
					<Button colorScheme='blue' >Confirm</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	</>
	)
}

export default NewPost;