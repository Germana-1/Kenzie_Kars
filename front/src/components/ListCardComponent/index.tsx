import { Flex } from "@chakra-ui/react";

import { CardComponent } from "../../components/CardComponent";
import { mockedData } from "../../_mockedData";

interface IListCardComponent {
  filterActive: boolean;
  hideTag: boolean;
  justify: string;
}

export const ListCardComponent = ({
  filterActive,
  hideTag,
  justify,
}: IListCardComponent) => {
  return (
    <Flex
      justifyContent={{ sm: "space-between", lg: justify || "flex-end" }}
      wrap={{ sm: "nowrap", lg: "wrap" }}
      overflowX={"auto"}
      maxW={"100%"}
    >
      {filterActive
        ? mockedData.map(
            (annouce) =>
              annouce.isActive && (
                <CardComponent
                  annouce={annouce}
                  hideTag={hideTag}
                  key={annouce.id}
                />
              )
          )
        : mockedData.map((annouce) => (
            <CardComponent
              annouce={annouce}
              hideTag={hideTag}
              key={annouce.id}
            />
          ))}
    </Flex>
  );
};
