import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { FontSizes } from "../../styles/fontSizes";
import { Colors } from "../../styles/colors";

export const AnnounceDetailTitle = () => {
  return (
    <Flex
      w={"750px"}
      direction={"column"}
      gap={"20px"}
      borderRadius={"4px"}
      p={"28px 44px"}
    >
      <Text fontSize={FontSizes.heading_5_600} fontWeight={"600"} mb={"25px"}>
        Mercedes Benz A 200 CGI ADVANCE SEDAN
      </Text>

      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex gap={"10px"}>
          <Button
            size={"sm"}
            fontSize={FontSizes.body_2_500}
            fontWeight={"500"}
            backgroundColor={Colors.brand4}
            color={Colors.brand1}
          >
            2013
          </Button>
          <Button
            size={"sm"}
            fontSize={FontSizes.body_2_500}
            fontWeight={"500"}
            backgroundColor={Colors.brand4}
            color={Colors.brand1}
          >
            0 KM
          </Button>
        </Flex>

        <Text fontSize={FontSizes.heading_7_500} fontWeight={"500"}>
          R$ 00.000,00
        </Text>
      </Flex>

      <Box>
        <Button backgroundColor={Colors.brand1} color={Colors.grey9}>
          Comprar
        </Button>
      </Box>
    </Flex>
  );
};
