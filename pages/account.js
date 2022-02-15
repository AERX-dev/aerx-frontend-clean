import Layout from "../components/Layout";
// import Account from "../components/Account";

import {
  Box, 
  Heading, 
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

const Page = () => {

  const { t } = useTranslation('account');

  return (
    <Layout>
      <Box px={5}>
        <Heading as="h1">{t('title')}</Heading>
      </Box>
    </Layout>
  )
};

export default Page;