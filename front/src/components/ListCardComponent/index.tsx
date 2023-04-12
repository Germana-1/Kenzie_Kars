import { Flex, useMediaQuery } from "@chakra-ui/react";

import { CardComponent } from "../../components/CardComponent";
import { useEffect, useState } from "react";
import { mockedData } from "../../_mockedData";

export interface IAnnouce {
  id: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  color: string;
  price: number;
  priceFipe: number;
  fuelType: string;
  description: string;
  banner: string;
  isGoodBuy: boolean;
  user: {
    name: string;
    avatar: string;
  };
}

export const ListCardComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [annouceList, setAnnouceList] = useState<IAnnouce[]>([]);

  useEffect(() => {
    setAnnouceList(mockedData);
  }, []);

  return (
    <Flex
      as="ul"
      flexWrap={isMobile ? "nowrap" : "wrap"}
      justifyContent="flex-start"
      overflowX="auto"
      maxW={isMobile ? "100%" : "85%"}
    >
      {annouceList.map((annouce) => (
        <CardComponent annouce={annouce} key={annouce.id} />
      ))}
    </Flex>
  );
};
