import { Flex, useMediaQuery } from "@chakra-ui/react";

import { FilterComponent } from "../../components/FilterComponent";

const brands = ["Fiat", "Ford", "Volkswagen"];
const colors = ["Branco", "Preto", "Prata"];
const years = ["2023", "2022", "2021"];

export const ListFiltersComponent = () => {
  return (
    <Flex flexDirection="column" gap="42px" marginTop="16px">
      <FilterComponent titleFilter={"Marca"} filters={brands} />
      <FilterComponent titleFilter={"Cor"} filters={colors} />
      <FilterComponent titleFilter={"Ano"} filters={years} />
    </Flex>
  );
};
