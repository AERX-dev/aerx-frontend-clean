import Image from "next/image";
import {
  Heading,
  Box,
  Button,
  SimpleGrid,
  Image as ChakraImage,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

function Features() {
  const letterColor = useColorModeValue("#71809654", "#000000cf");
  return (
    <Box as="section" py={100}>

      <Heading textAlign={"center"} mb={12}>
        Features
      </Heading>

      <SimpleGrid maxWidth={800} spacing={10} margin="0 auto" columns={[1, 1, 2]} px={5}>

        <Box>
          <Center height="100%" >
            <Heading textAlign="center" position="relative">
              Monetize your content easily.

              <Box color={letterColor} fontWeight={400} fontSize="100px" position="absolute" top={-10} left={2} zIndex={-1}>
                01
              </Box>
            </Heading>
          </Center>
        </Box>

        <Box>
          <ChakraImage src="/money.png" alt="money" />
        </Box>


        <Box>
          <Center height="100%" >
            <Heading textAlign="center" position="relative">
              Monetize your content easily.

              <Box color={letterColor} fontWeight={400} fontSize="100px" position="absolute" top={-10} left={2} zIndex={-1}>
                02
              </Box>
            </Heading>
          </Center>
        </Box>

        <Box >
          <ChakraImage src="/money.png" alt="money" />
        </Box>


        <Box>
          <Center height="100%" >
            <Heading textAlign="center" position="relative">
              Monetize your content easily.

              <Box color={letterColor} fontWeight={400} fontSize="100px" position="absolute" top={-10} left={2} zIndex={-1}>
                03
              </Box>
            </Heading>
          </Center>
        </Box>

        <Box >
          <ChakraImage src="/money.png" alt="money" />
        </Box>

      </SimpleGrid>


    </Box>
  );
}

export default Features;