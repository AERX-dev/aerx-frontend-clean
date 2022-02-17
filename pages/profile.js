// import ProfilePage from "../components/ProfilePage";
import {
  Box,
  Heading,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";

import Layout from "../components/Layout";

const Profile = () => {
  const picBg = useColorModeValue("gray.200", "gray.700");
  return <Layout>


    <Box height="250px" bg="green.200" width="100%" position="absolute">

    </Box>

    <Box className="px-4 md:px-10" py={4} zIndex={10} position={"relative"} minHeight="100vh">
      <Grid templateColumns={["repeat(100%)", "150px calc(100% - 130px)", "220px calc(100% - 200px)"]} gap="20px">
        <Box height="320px" rounded="lg" maxWidth="225px" bg={picBg}>

        </Box>

        <Box>
          <Heading>
            Full Name
          </Heading>

        </Box>

        
      </Grid>



    </Box>
  </Layout>
};

export default Profile;