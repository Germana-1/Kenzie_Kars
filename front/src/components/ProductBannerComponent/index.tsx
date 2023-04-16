import { Flex, Image } from "@chakra-ui/react";

import car from "../../assets/unsplash_ZVgPUWC9Mjs.png";
import { Colors } from "../../styles/colors";

export const ProductBannerComponent = () => {
  return (
    <Flex
      h={"350px"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={Colors.grey10}
      borderRadius={"4px"}
    >
      <Image src={car} w={"inherit"} h={"inherit"} objectFit={"contain"} />
    </Flex>
  );
};
