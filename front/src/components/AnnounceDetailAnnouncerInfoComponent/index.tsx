import { Avatar, Flex } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextB1, TextH6 } from "../FontComponents";
import { ButtonGray0 } from "../ButtomComponents";

export const AnnounceDetailAnnouncerInfoComponent = () => {
  return (
    <Flex
      w={"380px"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <Avatar size={"xl"} />

      <TextH6 fontWeight="600">Samuel Leão</TextH6>
      <TextB1 fontWeight="400" color={Colors.grey2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </TextB1>

      <ButtonGray0>Ver todos anúncios</ButtonGray0>
    </Flex>
  );
};
