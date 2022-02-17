// import ProfilePage from "../components/ProfilePage";
import {
  Box,
  Heading,
  useColorModeValue,
  Grid,
  Text,
  Button, 

} from "@chakra-ui/react";

import { AiOutlineThunderbolt } from "react-icons/ai";
import NewPost from "../components/Post/new-post";
import Layout from "../components/Layout";

const Profile = () => {
  const picBg = useColorModeValue("gray.200", "gray.700");
  const postBg = useColorModeValue("gray.50", "gray.900");
  const imageBg = useColorModeValue("gray.100", "#0a0a0a");
  return <Layout>

    <Box height="250px" bg={imageBg } width="100%" position="absolute">
    </Box>

    <Box className="px-4 md:px-10" py={4} zIndex={10} position={"relative"} minHeight="100vh">
      <Grid templateColumns={["repeat(100%)", "repeat(100%)", "220px calc(100% - 200px)"]} gap="20px">
        <Box>
          <Box height="320px" rounded="lg" maxWidth={["100%", "400px", "225px"]} bg={picBg} margin="0 auto">

          </Box>
        </Box>

        <Box pr={8}>
          <Heading>
            Full Name
          </Heading>

          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>

          <Box mb={4}>
          <NewPost />
          </Box>

          {
            [1, 2, 3, 4].map(el => {
              return <Box key={el + "pro"} bg={ postBg } rounded="lg" borderWidth={2} mb={4}>
              <Box height="150px">
              </Box>
                <Box borderTop={2} p={4}>
                  <AiOutlineThunderbolt style={{display: "inline"}} /> {[10, 20, 30, 40][Math.floor(Math.random()*4)]}
                </Box>
              </Box>
            })
          }
        </Box>
      </Grid>



    </Box>
  </Layout>
};

export default Profile;