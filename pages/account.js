import Layout from "../components/Layout";
// import Account from "../components/Account";
import {useState, useEffect} from 'react';
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
import useTranslation from "next-translate/useTranslation";
import { getTotalSupply, sendToken } from "../lib/tokenContract";
import { registerUserIfNotRegistered } from "../lib/auth";
import { nearStore } from "../stores/near";

const Page = () => {
  const [state, setState] = useState({
    username:"",
    email: "",
    fullName: "",
    aboutMe: ""
  });
  const nearState = nearStore(state=>state);
  const { t } = useTranslation('account');
  
  useEffect(()=>{
  }, []);

  function handleChange (event, currentVal) {
    console.log(event.target);
    const value = event.nativeEvent.data;
    setState({
      ...state,
      [event.target.placeholder]: currentVal+value
    });
  
    event.preventDefault();
  }

  function handleSave (event) {    
    //1. Put the values from our fields into a JSON
    //2. Send the json over to IPFS & get the link for the data
    //3. Put the link to JSON's ipfs into NFTTokenMetadata object
    if(nearState.tokenContract){
      registerUserIfNotRegistered(nearState);
    }
    event.preventDefault();
  }

  return (
    <Layout>


      <Box className="px-4 md:px-10" py={4}>
        <Heading as="h1" mb={5}>{t('title')}</Heading>

        <FormControl mb={2}>
          <FormLabel>{t('label.headerPicture')}</FormLabel>
          <Input type="text" mb={2} placeholder="headerPicture" />

          <Button size="sm" colorScheme={"teal"} mb={2}>
            {t('label.upload')}
          </Button>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.profilePicture')}</FormLabel>
          <Input type="text" mb={2} placeholder="profilePicture" />

          <Button size="sm" colorScheme={"blue"} mb={2}>
            {t('label.upload')}
          </Button>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.username')}</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'>
              <AtSignIcon color='gray.300' />
            </InputLeftElement>
            <Input placeholder="username" type="text" value={state.username} onChange={(e)=>handleChange(e, state.username)}/>
          </InputGroup>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.email')}</FormLabel>
          <Input type="email" placeholder="email" value={state.emaill} onChange={(e)=>handleChange(e, state.email)} />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.fullName')}</FormLabel>
          <Input type="text" placeholder="fullName" value={state.fullName} onChange={(e)=>handleChange(e, state.fullName)} />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.aboutMe')}</FormLabel>
          <Textarea type="text" placeholder="aboutMe" value={state.aboutMe} onChange={(e)=>handleChange(e, state.aboutMe)} />
        </FormControl>

        <Button colorScheme="green" mt={2} size="lg" onClick={handleSave}>
          {t('label.save')}
        </Button>
      </Box>
    </Layout>
  )
};

export default Page;