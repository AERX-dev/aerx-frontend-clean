import Layout from "../components/Layout";
// import Account from "../components/Account";

import {
  Box
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

const Page = () => {

  const { t } = useTranslation('account');

  return (
    <Layout>
      <Box>
        <h1>{t('title')}</h1>
      </Box>
    </Layout>
  )
};

export default Page;