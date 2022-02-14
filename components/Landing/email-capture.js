import Image from "next/image";
import {
  Heading, 
  Box, 
  Button,
  Input,  
  Grid, 
} from "@chakra-ui/react";

function EmailCapture () {
  return (
    <Box as="section" py={100}>

    <Heading textAlign={"center"} mb={8}>
      Email Subscribe
    </Heading>

   
    <Box textAlign="center">
      <Grid templateColumns={["repeat(100%)", "calc(100% - 150px) 140px"]} gap="8px" maxWidth={600} margin="0 auto">
      <Input type="email" placeholder="Enter your email" />
      <Button variant="outline" _hover={{bg: "none"}} _active={{bg: "none"}} width="100%">
        Submit
      </Button>
      </Grid>
    </Box>

    </Box>
  );
}

export default EmailCapture;