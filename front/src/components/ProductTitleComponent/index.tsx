import { Box, Flex, Spacer } from "@chakra-ui/react";

import { ButtonBrand1, ButtonBrand4 } from "../ButtomComponents";
import { TextH6, TextH7 } from "../TextComponents";
import { Colors } from "../../styles/colors";

export const ProductTitleComponent = ({ announcementDetail }: any) => {
  return (
    <Flex
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <TextH6 fontWeight="600">{announcementDetail.model}</TextH6>

      <Spacer />

      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        wrap={"wrap"}
        gap={"20px"}
      >
        <Flex gap={"10px"}>
          <ButtonBrand4 size="sm" cursor={"default"}>
            {announcementDetail.year}
          </ButtonBrand4>
          <ButtonBrand4 size="sm" cursor={"default"}>
            {announcementDetail.mileage} KM
          </ButtonBrand4>
        </Flex>

        <TextH7 fontWeight="500">R$ {announcementDetail.price}</TextH7>
      </Flex>

      <Box>
        <ButtonBrand1>Comprar</ButtonBrand1>
      </Box>
    </Flex>
  );
};
