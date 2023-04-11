import { Avatar, Flex } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextB2 } from "../FontComponents";

export const AnnounceDetailUserCommentComponent = () => {
  return (
    <Flex
      w={"750px"}
      direction={"column"}
      gap={"50px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.white}
    >
      <Flex gap={"10px"} alignItems="center">
        <Avatar w={"32px"} h={"32px"} />
        <TextB2 weigth="500">Samuel Leão</TextB2>
      </Flex>
    </Flex>
  );
};
