import Image from "next/image";
import {
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

function HeroSection() {
  const { t } = useTranslation('landing');

  return (
    <Box as="section" py={100}>

      <Heading textAlign={"center"}>
        {t('heroSection.title')}
      </Heading>

      <Heading textAlign={"center"} mb={8}>
        {t('heroSection.subheading')}
      </Heading>

      <Box textAlign="center">
        <Button variant="outline" _hover={{ bg: "none" }} _active={{ bg: "none" }}>
          {t('heroSection.buttonText')}
        </Button>
      </Box>

    </Box>
  );
}

export default HeroSection;