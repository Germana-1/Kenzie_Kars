import { Avatar, Flex } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextB1, TextB2 } from "../FontComponents";

export const CommentComponent = () => {
  return (
    <Flex
      direction={"column"}
      gap={"20px"}
      borderRadius={"4px"}
      backgroundColor={Colors.white}
    >
      <Flex gap={"10px"} alignItems="center">
        <Avatar w="32px" h="32px" />

        <TextB2 weigth="500">Júlia Lima</TextB2>
        <TextB2 weigth="500" color={Colors.grey3}>
          ●
        </TextB2>
        <TextB2 weigth="500" color={Colors.grey3}>
          há 3 dias
        </TextB2>
      </Flex>

      <TextB1 weigth="400" color={Colors.grey2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </TextB1>
    </Flex>
  );
};
