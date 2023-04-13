import { Flex, useMediaQuery } from "@chakra-ui/react";

import { FilterComponent } from "../../components/FilterComponent";
import { FilterWithInputComponent } from "../FilterWithInputComponent";

const brands = ["Fiat", "Ford", "Volkswagen"];
const models = [
  "Civic",
  "Corolla",
  "Cruze",
  "Fit",
  "Gol",
  "Ka",
  "Onix",
  "Pulse",
];
const colors = ["Branco", "Preto", "Prata"];
const years = ["2023", "2022", "2021"];
const fuel = ["Diesel", "Etanol", "Gasolina", "Flex"];

export const ListFiltersComponent = () => {
  return (
    <Flex flexDirection="column" gap="42px" marginTop="16px">
      <FilterComponent titleFilter={"Marca"} filters={brands} />
      <FilterComponent titleFilter={"Modelo"} filters={models} />
      <FilterComponent titleFilter={"Cor"} filters={colors} />
      <FilterComponent titleFilter={"Ano"} filters={years} />
      <FilterComponent titleFilter={"Combustível"} filters={fuel} />
      <FilterWithInputComponent titleFilter={"Km"} />
      <FilterWithInputComponent titleFilter={"Preço"} />
    </Flex>
  );
};
