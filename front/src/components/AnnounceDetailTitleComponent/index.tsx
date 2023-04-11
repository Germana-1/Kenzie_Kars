import { Box, Flex, Spacer } from "@chakra-ui/react";

import { ButtonBrand1, ButtonBrand4 } from "../ButtomComponents";
import { TextH5, TextH7 } from "../FontComponents";
import { Colors } from "../../styles/colors";

export const AnnounceDetailTitleComponent = () => {
  return (
    <Flex
      w={"750px"}
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <TextH5 weigth="600">Mercedes Benz A 200 CGI ADVANCE SEDAN</TextH5>

      <Spacer />

      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex gap={"10px"}>
          <ButtonBrand4 size="sm">2013</ButtonBrand4>
          <ButtonBrand4 size="sm">0 KM</ButtonBrand4>
        </Flex>

        <TextH7 weigth="500">R$ 00.000,00</TextH7>
      </Flex>

      <Box>
        <ButtonBrand1>Comprar</ButtonBrand1>
      </Box>
    </Flex>
  );
};
