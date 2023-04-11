import { Flex, Spacer } from "@chakra-ui/react";

import { TextH6 } from "../FontComponents";
import { TextB1 } from "../FontComponents";
import { Colors } from "../../styles/colors";

export const AnnounceDetailDescriptionComponent = () => {
  return (
    <Flex
      w={"750px"}
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.white}
    >
      <TextH6 weigth="600">Descrição</TextH6>

      <Spacer />

      <TextB1 weigth="400" color={Colors.grey2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </TextB1>
    </Flex>
  );
};
