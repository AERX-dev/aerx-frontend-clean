import Layout from "../components/Layout";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  InputGroup,
  InputLeftElement,
  Image as ChakraImage,
  Grid,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import supabase from '../lib/supabase';
import { Widget } from "@uploadcare/react-widget";

import { profileStore } from "../stores/profile";

import useTranslation from "next-translate/useTranslation";
import { useRef, useState, useEffect, useReducer } from "react";




const Page = () => {
  const profileId = "samullman.testnet"
  const profileState = profileStore(state => state);
  const [ profileLoaded, setProfileLoaded ] = useState(false);
  const [ profile, setProfile ] = useState(profileState.profile || {posts: [], follows: []});
  const { t } = useTranslation('account');

  const widgetApi = useRef();
  const widgetApiHeader = useRef();

  function profileImageChange(info) {
    let newProfile = profile;
    newProfile.profileImage = info.cdnUrl;
    setProfile(newProfile);
    document.querySelectorAll(".profile-picture")[0].value = info.cdnUrl;
  }

  function headerImageChange(info) {
    let newProfile = profile;
    newProfile.headerImage = info.cdnUrl;
    setProfile(newProfile);
  }

  function update(e) {
    let path = e.currentTarget.dataset.path;
    let newProfile = profile;
    newProfile[path] = e.currentTarget.value;
    setProfile(newProfile);
  }

  async function save() {
    let profileToSave = profile;
    delete profileToSave.follows;
    delete profileToSave.posts;
    const { data, error } = await supabase
      .from('profiles')
      .update(profile)
      .match({ walletId: profileId })

    if (!error && data.length) {
      setProfile(data[0]);
      profileState.setProfile(data[0]);
    } else {
      console.log(error)
    }
  }

  function headerImage() {

    if (profile.headerImage) {
      return <Box height="220px" rounded="lg" overflow="hidden" mb={3}>
        <ChakraImage src={profile.headerImage} alt="header" width="100%" objectFit="cover" height="100%" />
      </Box>
    } else {
      <Box height="220px" bg={ picBg } rounded="lg" overflow="hidden" mb={3}></Box>
    }

  }

  function profileImage() {
    if (profile.profileImage) {
      return <ChakraImage height="320px" rounded="lg" maxWidth={["100%", "400px", "225px"]} margin="0 auto" src={profile.profileImage} alt="header" objectFit="cover" />
    }
  }


  const picBg = useColorModeValue("gray.200", "gray.700");


  function hiddenValue () {
    if ( profileState.profile ) {
      return <input type="hidden" value={ profileState.profile.walletId } />
    }
  }


  if ( profileState.profile && profileLoaded === false ) {
    setProfile(profileState.profile);
    setProfileLoaded(true);
  }

  if ( profileState.profile != profile && profileState.profile ) {
    setProfile(profileState.profile);
  }

  return (
    <Layout>
          { hiddenValue() }
        <Box className="px-4 md:px-10" py={2} maxWidth={1100} margin="0 auto">
        <Heading as="h1" mb={3}>{t('title')}</Heading>

        <FormControl mb={2}>
          <FormLabel>{t('label.headerPicture')}</FormLabel>
          {headerImage()}

          <Button size="sm" onClick={() => { widgetApiHeader.current.openDialog() }} colorScheme={"teal"} mb={2}>
            {t('label.upload')}
          </Button>

          <Box height={0} width={0} opacity={0}>
            <Widget ref={widgetApiHeader} onChange={headerImageChange}
              publicKey='9a62ac3cb175e8d52479' id='file' />
          </Box>

        </FormControl>


        <Grid templateColumns={["repeat(100%)", "repeat(100%)", "220px calc(100% - 200px)"]} gap="20px">
          <Box overflow={"hidden"} rounded="lg" maxWidth={["100%", "400px", "225px"]} margin="0 auto">

            <FormControl mb={2}  >
              <FormLabel>{t('label.profilePicture')}</FormLabel>
              <Box bg={ picBg } height="320px" rounded="lg"  width={["100%", "400px", "225px"]} mb={2}>
                {profileImage()}

              </Box>

              <Button size="sm" colorScheme={"blue"} mb={2} onClick={() => { widgetApi.current.openDialog() }}>
                {t('label.upload')}
              </Button>

              <Box height={0} width={0} opacity={0}>
                <Widget ref={widgetApi} onChange={profileImageChange}
                  publicKey='9a62ac3cb175e8d52479' id='file' />
              </Box>
            </FormControl>

          </Box>

          <Box pl={[0, 0, 1]} pr={8}>

            <FormControl mb={2}>
              <FormLabel>{t('label.fullName')}</FormLabel>
              <Input type="email" defaultValue={profile.fullName} placeholder="fullName" onChange={update} data-path="fullName" />
            </FormControl>

            <FormControl mb={2}>
              <FormLabel>{t('label.username')}</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'

                >
                  <AtSignIcon color='gray.300' />
                </InputLeftElement>
                <Input placeholder="username" defaultValue={profile.username} type="text" onChange={update} data-path="username" />
              </InputGroup>
            </FormControl>

            <FormControl mb={2}>
              <FormLabel>{t('label.email')}</FormLabel>
              <Input type="text" defaultValue={profile.email} placeholder="email" onChange={update} data-path="email" />
            </FormControl>



            <FormControl mb={2}>
              <FormLabel>{t('label.aboutMe')}</FormLabel>
              <Textarea type="email" defaultValue={profile.aboutMe} placeholder="aboutMe" onChange={update} data-path="aboutMe" />
            </FormControl>

            <FormControl mb={2}>
              <FormLabel>{t('label.city')}</FormLabel>
              <Input placeholder="city" defaultValue={profile.city} onChange={update} data-path="city" />
            </FormControl>

            <FormControl mb={2}>
              <FormLabel>{t('label.state')}</FormLabel>
              <Input placeholder="State/Province" defaultValue={profile.state} onChange={update} data-path="state" />
            </FormControl>

            <FormControl mb={2}>
              <FormLabel>{t('label.country')}</FormLabel>
              <Input placeholder="Country" defaultValue={profile.country} onChange={update} data-path="country" />
            </FormControl>




            <Button colorScheme="green" mt={2} size="lg" onClick={save}>
              {t('label.save')}
            </Button>
          </Box>
        </Grid>




      </Box>
    </Layout>
  )
};

export default Page;