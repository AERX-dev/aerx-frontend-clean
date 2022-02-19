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

import { Widget } from "@uploadcare/react-widget";

import useTranslation from "next-translate/useTranslation";
import { useRef } from "react";
const Page = () => {

  const { t } = useTranslation('account');
  const widgetApi = useRef();
  const widgetApiHeader = useRef();

  function profileImageChange(info) {
    console.log('Upload completed:', info)
  }


  function headerImageChange(info) {
    console.log('Upload completed:', info)
  }

  return (
    <Layout>


      <Box className="px-4 md:px-10" py={4}>
        <Heading as="h1" mb={5}>{t('title')}</Heading>

        <FormControl mb={2}>
          <FormLabel>{t('label.headerPicture')}</FormLabel>
          <Input type="text" mb={2} placeholder="headerPicture" />

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
          <Input type="text" mb={2} placeholder="profilePicture" />

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
            <Input placeholder="username" type="text" />
          </InputGroup>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.email')}</FormLabel>
          <Input type="text" placeholder="email" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.fullName')}</FormLabel>
          <Input type="email" placeholder="fullName" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.aboutMe')}</FormLabel>
          <Textarea type="email" placeholder="aboutMe" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.city')}</FormLabel>
          <Input placeholder="city" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.state')}</FormLabel>
          <Input placeholder="State/Province" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.country')}</FormLabel>
          <Input placeholder="Country" />
        </FormControl>


      

        <Button colorScheme="green" mt={2} size="lg">
          {t('label.save')}
        </Button>
      </Box>
    </Layout>
  )
};

export default Page;