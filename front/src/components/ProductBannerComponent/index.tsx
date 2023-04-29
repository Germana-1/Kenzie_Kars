import { Flex, Image } from "@chakra-ui/react";

import car from "../../assets/unsplash_ZVgPUWC9Mjs.png";
import { Colors } from "../../styles/colors";
import { IAnnouncement } from "../../interfaces/announcement.interface";

interface IProps {
  announcement: IAnnouncement;
}

export const ProductBannerComponent = ({ announcement }: IProps) => {
  return (
    <Flex
      h={"350px"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={Colors.grey10}
      borderRadius={"4px"}
    >
      <Image
        src={announcement.banner}
        w={"inherit"}
        h={"inherit"}
        objectFit={"cover"}
      />
    </Flex>
  );
};
