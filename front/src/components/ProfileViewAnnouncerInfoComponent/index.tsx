import { Avatar, Box, Flex } from "@chakra-ui/react";

import { TextB1, TextH6 } from "../TextComponents";
import { ButtonBrand1OutlineBrand1, ButtonBrand4 } from "../ButtomComponents";
import { Colors } from "../../styles/colors";

export const ProfileViewAnnouncerInfoComponent = () => {
  return (
    <Flex
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <Avatar size={"xl"} />

      <Flex gap={"10px"} alignItems={"center"}>
        <TextH6 fontWeight={"600"}>Samuel Leão</TextH6>
        <ButtonBrand4 size={"sm"} cursor={"default"}>
          Anunciante
        </ButtonBrand4>
      </Flex>

      <TextB1 fontWeight={"400"} color={Colors.grey2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </TextB1>

      <ButtonBrand1OutlineBrand1 alignSelf={"flex-start"}>
        Criar anúncio
      </ButtonBrand1OutlineBrand1>
    </Flex>
  );
};
