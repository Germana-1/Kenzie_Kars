import { Flex, Show } from "@chakra-ui/react";

import { HeaderComponent } from "../../components/HeaderComponent";

import { BannerComponent } from "../../components/BannerComponent";

import { ListCardComponent } from "../../components/ListCardComponent";

import { ListFiltersComponent } from "../../components/ListFiltersComponent";

import { FooterComponent } from "../../components/FooterComponent";

export const HomePage = () => {
  return (
    <Flex flexDirection={"column"}>
      <HeaderComponent />
      <BannerComponent />
      <Flex w="100%" justifyContent="space-between">
        <Show above="768px">
          <ListFiltersComponent />
        </Show>

        <ListCardComponent />
      </Flex>
      <FooterComponent />
    </Flex>
  );
};
