import {
  Avatar,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Colors } from "../../styles";

export const CardComponent = () => {
  return (
    <Card w="312px" margin="20px">
      <Image
        src="https://www.automaistv.com.br/wp-content/uploads/2022/01/fiat_mobi_like_52_edited-990x594.jpg"
        alt="Green double couch with wooden legs"
      />
      <CardBody display="flex" flexDirection="column" gap="16px">
        <Heading size="16px">Mobi</Heading>
        <Text
          fontSize="14px"
          fontWeight="400"
          color={Colors.grey2}
          lineHeight="24px"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </Text>
        <Flex gap="10px" alignItems="center">
          <Avatar
            src="https://www.automaistv.com.br/wp-content/uploads/2022/01/fiat_mobi_like_52_edited-990x594.jpg"
            w="32px"
            h="32px"
          />
          <Text fontSize="14px" fontWeight="500" color={Colors.grey2}>
            Samuel Leão
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
              0 KM
            </Text>
            <Text
              bg={Colors.brand4}
              color={Colors.brand1}
              fontSize="14px"
              fontWeight="500"
              padding="4px"
            >
              2019
            </Text>
          </Flex>
          <Text fontSize="16px" fontWeight="500" color={Colors.grey1}>
            R$ 00.000,00
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
