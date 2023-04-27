import { Button, Flex } from "@chakra-ui/react";

import { FilterComponent } from "../../components/FilterComponent";
import { FilterWithInputComponent } from "../FilterWithInputComponent";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcementContext";

export const ListFiltersComponent = () => {
  const {
    setSelectedBrand,
    setSelectedModel,
    setSelectedColor,
    setSelectedYear,
    setSelectedFuel,
    brands,
    models,
    colors,
    years,
    fuel,
  } = useContext(AnnouncementContext);

  const resetFilters = () => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedColor("");
    setSelectedYear(0);
    setSelectedFuel("");
  };

  const filterBrands = new Set(brands);
  const filterModels = new Set(models);
  const filterColors = new Set(colors);
  const filterYears = new Set(years);
  const filterFuel = new Set(fuel);

  return (
    <Flex flexDirection="column" gap="42px" marginTop="16px">
      <FilterComponent
        titleFilter={"Marca"}
        filters={[...filterBrands]}
        setSelected={setSelectedBrand}
      />
      <FilterComponent
        titleFilter={"Modelo"}
        filters={[...filterModels]}
        setSelected={setSelectedModel}
      />
      <FilterComponent
        titleFilter={"Cor"}
        filters={[...filterColors]}
        setSelected={setSelectedColor}
      />
      <FilterComponent
        titleFilter={"Ano"}
        filters={[...filterYears]}
        setSelected={setSelectedColor}
      />
      <FilterComponent
        titleFilter={"Combustível"}
        filters={[...filterFuel]}
        setSelected={setSelectedFuel}
      />
      <FilterWithInputComponent titleFilter={"Km"} />
      <FilterWithInputComponent titleFilter={"Preço"} />
      <Button variant="ghost" onClick={resetFilters}>
        Limpar filtros
      </Button>
    </Flex>
  );
};
