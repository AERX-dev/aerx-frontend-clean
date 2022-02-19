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
import useTranslation from "next-translate/useTranslation";
import { getTotalSupply } from "../lib/tokenContract";

const Page = () => {

  const { t } = useTranslation('account');

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

        <Button colorScheme="green" mt={2} size="lg">
          {t('label.save')}
        </Button>
      </Box>
    </Layout>
  )
};

export default Page;