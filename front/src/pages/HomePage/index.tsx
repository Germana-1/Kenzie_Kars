import { Flex } from "@chakra-ui/react";

import { HeaderComponent } from "../../components/HeaderComponent";

import { BannerComponent } from "../../components/BannerComponent";
import { CardComponent } from "../../components/CardComponent";

export const HomePage = () => {
  return (
    <Flex flexDirection={"column"}>
      <HeaderComponent />
      <BannerComponent />
      <Flex justifyContent="flex-start" w="fit-content" overflowX="auto">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Flex>
    </Flex>
  );
};
