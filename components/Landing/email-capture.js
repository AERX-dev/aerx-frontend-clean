import Image from "next/image";
import {
  Heading,
  Box,
  Button,
  Input,
  Grid,
} from "@chakra-ui/react";

import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

function EmailCapture({ rest}) {

  const { t, lang } = useTranslation("common");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");

  async function subscribe(e) {
    e.preventDefault();

    setState("LOADING");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });

      const { success, message } = await res.json();

      setState({ success, message });
      setEmail("");
      if (!success) {
        throw new Error(message);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  }


  return (
    <Box as="section" py={100}>

      <Heading textAlign={"center"} mb={8}>
        Email Subscribe
      </Heading>

      <Box textAlign="center">
        <Grid templateColumns={["repeat(100%)", "calc(100% - 150px) 140px"]} gap="8px" maxWidth={600} margin="0 auto" as="form" onSubmit={subscribe}
          {...rest}>
          <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
          <Button variant="outline" _hover={{ bg: "none" }} _active={{ bg: "none" }} width="100%">
            Submit
          </Button>
        </Grid>
      </Box>

    </Box>
  );
}

export default EmailCapture;