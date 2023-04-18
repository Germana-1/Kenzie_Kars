import {
  Avatar,
  Flex,
  Heading,
  Image,
  Text,
  Box,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

import { FontSizes } from "../../styles/fontSizes";
import { Colors } from "../../styles/colors";
import { ButtonBrand4 } from "../ButtomComponents";

interface IProps {
  annouce: IAnnouce;
  hideTag: boolean;
}

interface IAnnouce {
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
  isActive: boolean;
  user: {
    name: string;
    avatar: string;
  };
}

export const CardComponent = ({ annouce, hideTag }: IProps) => {
  return (
    <Box
      minW="312px"
      maxW="312px"
      margin="20px"
      position="relative"
      cursor="pointer"
    >
      <Tag
        position={"absolute"}
        top={"0"}
        left={"0"}
        borderRadius={"initial"}
        backgroundColor={annouce.isActive ? Colors.brand1 : Colors.grey4}
        hidden={hideTag ? true : false}
        color={Colors.white}
        fontSize={FontSizes.body2}
      >
        {annouce.isActive ? "Ativo" : "Inativo"}
      </Tag>
      {annouce.isGoodBuy && (
        <Tag
          w="15px"
          h="27"
          bg={Colors.random7}
          borderRadius="2px"
          position="absolute"
          left="286px"
          top="2px"
          hidden={!annouce.isActive && true}
        >
          <TagLabel
            color={Colors.white}
            fontWeight="500"
            fontSize={FontSizes.buttonMediumText}
          >
            $
          </TagLabel>
        </Tag>
      )}

      <Image
        src={annouce.banner}
        alt="Green double couch with wooden legs"
        border={`2px solid ${Colors.grey4}`}
        _hover={{
          border: `2px solid ${
            annouce.isActive ? Colors.brand1 : Colors.grey4
          }`,
        }}
      />
      <Flex display="flex" flexDirection="column" gap="16px" marginTop="16px">
        <Heading size="16px">{`${annouce.brand} - ${annouce.model}`}</Heading>
        <Text
          fontSize="14px"
          fontWeight="400"
          color={Colors.grey2}
          lineHeight="24px"
        >
          {annouce.description}
        </Text>
        <Flex gap="10px" alignItems="center">
          <Avatar src={annouce.user.avatar} w="32px" h="32px" />
          <Text fontSize="14px" fontWeight="500" color={Colors.grey2}>
            {annouce.user.name}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Flex gap="10px">
            <ButtonBrand4 size={"sm"}>{`${annouce.mileage} KM`}</ButtonBrand4>
            <ButtonBrand4 size={"sm"}>{annouce.year}</ButtonBrand4>
          </Flex>
          <ButtonBrand4 size={"sm"}>{`R$ ${annouce.price}`}</ButtonBrand4>
        </Flex>
      </Flex>
    </Box>
  );
};
