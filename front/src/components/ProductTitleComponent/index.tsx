import { Box, Flex, Spacer } from "@chakra-ui/react";

import { ButtonBrand1, ButtonBrand4 } from "../ButtomComponents";
import { TextH6, TextH7 } from "../TextComponents";
import { Colors } from "../../styles/colors";

export const ProductTitleComponent = () => {
  return (
    <Flex
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <TextH6 fontWeight="600">Mercedes Benz A 200 CGI ADVANCE SEDAN</TextH6>

      <Spacer />

      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        wrap={"wrap"}
        gap={"20px"}
      >
        <Flex gap={"10px"}>
          <ButtonBrand4 size="sm" cursor={"default"}>
            2013
          </ButtonBrand4>
          <ButtonBrand4 size="sm" cursor={"default"}>
            0 KM
          </ButtonBrand4>
        </Flex>

        <TextH7 fontWeight="500">R$ 00.000,00</TextH7>
      </Flex>

      <Box>
        <ButtonBrand1>Comprar</ButtonBrand1>
      </Box>
    </Flex>
  );
};
