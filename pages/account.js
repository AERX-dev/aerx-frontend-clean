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

const Page = () => {

  const { t } = useTranslation('account');

  return (
    <Layout>
      <Box px={5}>
        <Heading as="h1" mb={5}>{t('title')}</Heading>

        <FormControl mb={2}>
          <FormLabel>{t('label.profilePicture')}</FormLabel>
          <Input type="text" mb={2} />

          <Button size="sm" colorScheme={"blue"} mb={2}>
            {t('label.upload')}
          </Button>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.username')}</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<AtSignIcon color='gray.300' />}
            />
            <Input type="text" />
          </InputGroup>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.email')}</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.fullName')}</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>{t('label.aboutMe')}</FormLabel>
          <Textarea type="email" />
        </FormControl>

        <Button colorScheme="green" mt={2} size="lg">
          {t('label.save')}
        </Button>
      </Box>
    </Layout>
  )
};

export default Page;