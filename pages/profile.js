// import ProfilePage from "../components/ProfilePage";
import {
  Box,
  Heading,  
  useColorModeValue,
} from "@chakra-ui/react";

import Layout from "../components/Layout";

const Profile = () => {
  const picBg = useColorModeValue("gray.200", "gray.700");
  return <Layout>
    <Box px={5}>
      <Heading>Profile</Heading>

      <Box height="320px" rounded="lg" width="225px" bg={ picBg }>

      </Box>
    </Box>
  </Layout>
};

export default Profile;