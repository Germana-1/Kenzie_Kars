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
import { IAnnouce } from "../ListCardComponent";

interface IProps {
  annouce: IAnnouce;
}

export const CardComponent = ({ annouce }: IProps) => {
  return (
    <Box minW="312px" maxW="312px" margin="20px" position="relative">
      <Tag
        w="15px"
        h="27"
        bg={Colors.random7}
        borderRadius="2px"
        position="absolute"
        left="286px"
        top="2px"
      >
        <TagLabel
          color={Colors.white}
          fontWeight="500"
          fontSize={FontSizes.buttonMediumText}
        >
          $
        </TagLabel>
      </Tag>
      <Image
        src={annouce.banner}
        alt="Green double couch with wooden legs"
        border={`2px solid ${Colors.grey10}`}
        _hover={{ cursor: "pointer", border: `2px solid ${Colors.brand1}` }}
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
            <Text
              bg={Colors.brand4}
              color={Colors.brand1}
              fontSize="14px"
              fontWeight="500"
              padding="4px"
            >
              {`${annouce.mileage} KM`}
            </Text>
            <Text
              bg={Colors.brand4}
              color={Colors.brand1}
              fontSize="14px"
              fontWeight="500"
              padding="4px"
            >
              {annouce.year}
            </Text>
          </Flex>
          <Text fontSize="16px" fontWeight="500" color={Colors.grey1}>
            {`R$${annouce.price}`}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
