import Image from "next/image";
import {
  Heading,
  Box,
  Button,
  Image as ChakraImage,
  useColorMode, 
} from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

function HeroSection() {
  const { t } = useTranslation('landing');
  const { colorMode } = useColorMode()
  return (
    <Box as="section" py={100}>
      <Heading textAlign={"center"} size="2xl" mb={2}>
        {t('heroSection.title')} 

        <ChakraImage
              src={colorMode === "light" ? "/images/dark-logo.svg" : "/images/white-logo.svg"}
              alt={t('logoAlt')}
              className="rounded-sm"
              layout="responsive"
              priority
              display="inline"
              cursor={"pointer"}
              width={"100px"}
              position="relative" 
              bottom="2px"
              marginLeft="12px"
            />
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