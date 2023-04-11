import { Box, Image } from "@chakra-ui/react";

import car from "../../assets/unsplash_ZVgPUWC9Mjs.png";
import { Colors } from "../../styles/colors";

export const AnnouceDetailMainPicComponent = () => {
  return (
    <Box
      backgroundColor={Colors.grey10}
      h={"350px"}
      w={"750px"}
      borderRadius={"4px"}
    >
      <Image src={car} w={"inherit"} h={"inherit"} objectFit={"contain"} />
    </Box>
  );
};
