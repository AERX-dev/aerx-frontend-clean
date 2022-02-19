// import ProfilePage from "../components/ProfilePage";
import {
  Box,
  Heading,
  useColorModeValue,
  Grid,
  Text,
  Button,
  Image as ChakraImage,
} from "@chakra-ui/react";
import supabase from "../lib/supabase";
import { AiOutlineThunderbolt } from "react-icons/ai";
import NewPost from "../components/Post/new-post";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
const Profile = () => {
  const [first, setFirst] = useState(true);
  const [profile, setProfile] = useState({});
  const profileId = "samullman.testnet";

  async function getProfile() {

    const { data, error } = await supabase
      .from('profiles')
      .select(`
        *, 
        follows(*), 
        posts!posts_profileId_fkey(*)
      `)
      .eq('walletId', profileId);

    if (!error && data.length) {
      setProfile(data[0]);
    } else {
      createProfile(profileId);
    }
  }

  async function createProfile(profileId) {
    console.log("profileId", profileId)
    const { data, error } = await supabase
      .from('profiles')
      .insert([
        { walletId: profileId }
      ]);

    if (!error && data.length) {
      setProfile(data[0]);
    } else {
      console.log(error)
      alert("Error creating profile");
    }
  }

  useEffect(() => {
    if (first) {
      getProfile();
      setFirst(false);
    }
  }, [])


  const bg = useColorModeValue("white", "gray.800");
  const picBg = useColorModeValue("gray.200", "gray.700");
  const postBg = useColorModeValue("gray.50", "gray.900");
  const imageBg = useColorModeValue("gray.100", "#0a0a0a");

  function profileImage() {
    if (profile.profileImage) {
      return (
        <ChakraImage src={profile.profileImage} alt="profile" height="100%" width="100%" objectFit="cover" />
      )
    }
  }

  function headerImage() {
    if (profile.profileImage) {
      return (
        <ChakraImage src={profile.headerImage} alt="header" height="100%" width="100%" objectFit="cover" />
      )
    }
  }



  return <Layout>

    <Box height="250px" bg={imageBg} width="100%" position="fixed">
      {headerImage()}
    </Box>

    <Box maxWidth={1000} margin="0 auto" className="px-4 md:px-10" py={4} zIndex={10} position={"relative"} minHeight="100vh">
      <Grid templateColumns={["repeat(100%)", "repeat(100%)", "220px calc(100% - 200px)"]} gap="20px">
        <Box overflow={"hidden"} borderWidth={2} height="320px" rounded="lg" width="100%" maxWidth={["100%", "400px", "225px"]} bg={picBg} margin="0 auto">
          {profileImage()}

        </Box>

        <Box pr={8}>
          <Box bg={bg} p={4} rounded="lg" borderWidth={2} mb={4}>
            <Heading>
              {profile.fullName}
            </Heading>

            <Text mb={4}>
              {profile.aboutMe}
            </Text>

            <Box >
              <NewPost />
            </Box>
          </Box>

          {
            [1, 2, 3, 4].map(el => {
              return <Box key={el + "pro"} bg={postBg} rounded="lg" borderWidth={2} mb={4}>
                <Box height="150px">
                </Box>
                <Box borderTop={2} p={4}>
                  <AiOutlineThunderbolt style={{ display: "inline" }} /> {[10, 20, 30, 40][Math.floor(Math.random() * 4)]}
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