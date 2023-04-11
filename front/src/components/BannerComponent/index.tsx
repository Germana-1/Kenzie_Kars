import { Box, Image, useMediaQuery } from "@chakra-ui/react";

import bannerMobile from "../../assets/bannerMobile.svg";
import bannerWeb from "../../assets/bannerWeb.svg";

export const BannerComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 400px)");
  return (
    <Box position="relative">
      <Image src={isMobile ? bannerMobile : bannerWeb} alt="banner" w="100%" />
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient=" linear(to-t, #000000ed, #00000038) "
        opacity="1"
      />
    </Box>
  );
};
