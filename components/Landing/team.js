import Image from "next/image";
import {
  Heading,
  Box,
  Button,
  Flex
} from "@chakra-ui/react";

function Team() {
  const team = [
    {
      name: "Pav ",
      title: "Founder",
    },

    {
      name: "John Doe",
      title: "Design",
    },

    {
      name: "Flo Wolf",
      title: "Backend Developer",
    },

    {
      name: "Alias",
      title: "Fullstack Developer",
    },

    {
      name: "Sam Ullman",
      title: "Fullstack Developer",
    },

    {
      name: "Sam Ullman",
      title: "Fullstack Developer",
    },
    {
      name: "Sam Ullman",
      title: "Fullstack Developer",
    },
  ]
  return (
    <Box as="section" py={100}>

      <Heading textAlign={"center"} mb={12}>
        Team
      </Heading>

      <Flex maxWidth={800} margin="0 auto" flexWrap="wrap" justifyContent={"center"} gap={5}>
        {
          team.map(el => {
           return <Box p={4} key={el.title} >
              <Box height="120px" width="120px" bg="gray.500" rounded="full">
              </Box>

            </Box>
          })
        }

      </Flex>


    </Box>
  );
}

export default Team;