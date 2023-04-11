import { Flex, useMediaQuery } from "@chakra-ui/react";

import { CardComponent } from "../../components/CardComponent";

export const ListCardComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex
      flexWrap={isMobile ? "nowrap" : "wrap"}
      justifyContent="flex-start"
      overflowX="auto"
      maxW={isMobile ? "100%" : "85%"}
    >
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Flex>
  );
};
