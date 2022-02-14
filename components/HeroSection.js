import Image from "next/image";
import {
  Heading, 
  Box, 
  Button, 
} from "@chakra-ui/react";

function HeroSection() {
  return (
    <Box as="section" py={100}>

    <Heading textAlign={"center"}>
      WELCOME TO AERX
    </Heading>

    <Heading textAlign={"center"} mb={8}>
      A modular social network. 
    </Heading>

    <Box textAlign="center">
      <Button variant="outline" _hover={{bg: "none"}} _active={{bg: "none"}}>
        Get Started
      </Button>
    </Box>

    </Box>
  );
}

export default HeroSection;