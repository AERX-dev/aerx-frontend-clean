import Layout from "../components/Layout";
// import Account from "../components/Account";

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
} from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import supabase from '../lib/supabase';
import { Widget } from "@uploadcare/react-widget";

import useTranslation from "next-translate/useTranslation";
import { useRef, useState, useEffect } from "react";

const Page = () => {
  const profileId = "samullman.testnet"
  const [profile, setProfile] = useState({});
  const [first, setFirst] = useState(true);
  const { t } = useTranslation('account');

  const widgetApi = useRef();
  const widgetApiHeader = useRef();

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
    document.querySelectorAll(".header-picture")[0].value = info.cdnUrl;
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
      } else {
        console.log(error)
      }
  }
  return (
    <Layout>


      <Box className="px-4 md:px-10" py={4}>
        <Heading as="h1" mb={5}>{t('title')}</Heading>

        <FormControl mb={2}>
          <FormLabel>{t('label.headerPicture')}</FormLabel>
          <Input className="header-picture" type="text" defaultValue={ profile.headerImage }  mb={2} placeholder="headerPicture" />

          <Button size="sm" onClick={() => { widgetApiHeader.current.openDialog() }} colorScheme={"teal"} mb={2}>
            {t('label.upload')}
          </Button>

          <Box height={0} width={0} opacity={0}>
            <Widget ref={widgetApiHeader} onChange={headerImageChange}
              publicKey='9a62ac3cb175e8d52479' id='file' />
          </Box>

        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.profilePicture')}</FormLabel>
          <Input className="profile-picture" type="text" defaultValue={ profile.profileImage }  mb={2} placeholder="profilePicture" />

          <Button size="sm" colorScheme={"blue"} mb={2} onClick={() => { widgetApi.current.openDialog() }}>
            {t('label.upload')}
          </Button>

          <Box height={0} width={0} opacity={0}>
            <Widget ref={widgetApi} onChange={profileImageChange}
              publicKey='9a62ac3cb175e8d52479' id='file' />
          </Box>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.username')}</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'

            >
              <AtSignIcon color='gray.300' />
            </InputLeftElement>
            <Input placeholder="username" defaultValue={ profile.username } type="text" onChange={update} data-path="username" />
          </InputGroup>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.email')}</FormLabel>
          <Input type="text" defaultValue={ profile.email } placeholder="email" onChange={update} data-path="email" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.fullName')}</FormLabel>
          <Input type="email" defaultValue={ profile.fullName } placeholder="fullName" onChange={update} data-path="fullName" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.aboutMe')}</FormLabel>
          <Textarea type="email" defaultValue={ profile.aboutMe }  placeholder="aboutMe" onChange={update} data-path="aboutMe" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.city')}</FormLabel>
          <Input placeholder="city" defaultValue={ profile.city }  onChange={update} data-path="city" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.state')}</FormLabel>
          <Input placeholder="State/Province" defaultValue={ profile.state }  onChange={update} data-path="state" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.country')}</FormLabel>
          <Input placeholder="Country" defaultValue={ profile.country }  onChange={update} data-path="country" />
        </FormControl>




        <Button colorScheme="green" mt={2} size="lg" onClick={save}>
          {t('label.save')}
        </Button>
      </Box>
    </Layout>
  )
};

export default Page;