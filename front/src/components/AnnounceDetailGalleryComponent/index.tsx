import { Box, Flex, Image } from "@chakra-ui/react";

import car from "../../assets/unsplash_ZVgPUWC9Mjs.png";
import { Colors } from "../../styles/colors";
import { TextH5 } from "../FontComponents";

export const AnnounceDetailGalleryComponent = () => {
  return (
    <Flex
      w={"380px"}
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <TextH5 weigth="600">Fotos</TextH5>

      <Flex gap={"20px"} wrap={"wrap"}>
        <Box
          backgroundColor={Colors.grey7}
          h={"80px"}
          w={"80px"}
          borderRadius={"4px"}
        >
          <Image src={car} w={"inherit"} h={"inherit"} objectFit={"contain"} />
        </Box>

        <Box
          backgroundColor={Colors.grey7}
          h={"80px"}
          w={"80px"}
          borderRadius={"4px"}
        >
          <Image src={car} w={"inherit"} h={"inherit"} objectFit={"contain"} />
        </Box>

        <Box
          backgroundColor={Colors.grey7}
          h={"80px"}
          w={"80px"}
          borderRadius={"4px"}
        >
          <Image src={car} w={"inherit"} h={"inherit"} objectFit={"contain"} />
        </Box>

        <Box
          backgroundColor={Colors.grey7}
          h={"80px"}
          w={"80px"}
          borderRadius={"4px"}
        >
          <Image src={car} w={"inherit"} h={"inherit"} objectFit={"contain"} />
        </Box>

        <Box
          backgroundColor={Colors.grey7}
          h={"80px"}
          w={"80px"}
          borderRadius={"4px"}
        >
          <Image src={car} w={"inherit"} h={"inherit"} objectFit={"contain"} />
        </Box>

        <Box
          backgroundColor={Colors.grey7}
          h={"80px"}
          w={"80px"}
          borderRadius={"4px"}
        >
          <Image src={car} w={"inherit"} h={"inherit"} objectFit={"contain"} />
        </Box>
      </Flex>
    </Flex>
  );
};
