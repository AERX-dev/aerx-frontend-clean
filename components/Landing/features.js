import {
  Heading, 
  Box, 
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

function Features () {
  const { t } = useTranslation('landing');
  return (
    <Box as="section" py={100}>

    <Heading textAlign={"center"}>
    {t('features.title')} 
    </Heading>


    </Box>
  );
}

export default Features;