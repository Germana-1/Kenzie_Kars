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
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { FontSizes } from "../../styles/fontSizes";
import { Colors } from "../../styles/colors";
import { ButtonBrand4 } from "../ButtomComponents";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { AnnouncementContext } from "../../contexts/announcementContext";

interface IProps {
  announce: IAnnouncement;
  hideTag: boolean;
}

export const CardComponent = ({ announce, hideTag }: IProps) => {
  const { announcementListOne } = useContext(AnnouncementContext);
  const navigate = useNavigate();
  const shortDescription = announce.description.substring(0, 80) + "...";
  const title = `${announce.brand} - ${announce.model}`.substring(0, 37);
  const userName = announce.user?.name.substring(0, 32);
  const price = Number(announce.price).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Box
      minW="312px"
      maxW="312px"
      h="420px"
      position="relative"
      cursor="pointer"
      onClick={() => navigate(`/product/${announce.id}`)}
    >
      <Tag
        position={"absolute"}
        top={"0"}
        left={"0"}
        borderRadius={"initial"}
        backgroundColor={announce.isActive ? Colors.brand1 : Colors.grey4}
        hidden={hideTag ? true : false}
        color={Colors.white}
        fontSize={FontSizes.body2}
      >
        {announce.isActive ? "Ativo" : "Inativo"}
      </Tag>

      {announce.isGoodBuy && (
        <Tag
          w="15px"
          h="27"
          bg={Colors.random7}
          borderRadius="2px"
          position="absolute"
          left="286px"
          top="2px"
          hidden={!announce.isActive && true}
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
        src={announce.banner}
        alt={`${announce.brand} - ${announce.model}`}
        border={`2px solid ${Colors.grey7}`}
        bg={Colors.grey7}
        w="100%"
        h="152px"
        _hover={{
          border: `2px solid ${
            announce.isActive ? Colors.brand1 : Colors.grey4
          }`,
        }}
        objectFit={"cover"}
      />

      <Flex display="flex" flexDirection="column" gap="16px" marginTop="16px">
        <Heading size="16px">{title}</Heading>

        <Text
          fontSize="14px"
          fontWeight="400"
          color={Colors.grey2}
          lineHeight="24px"
          h="48px"
        >
          {shortDescription}
        </Text>

        <Flex gap="10px" alignItems="center">
          <Avatar src={announce.user?.avatar} w="32px" h="32px" />

          <Text fontSize="14px" fontWeight="500" color={Colors.grey2}>
            {userName}
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Flex gap="10px">
            <ButtonBrand4 size={"sm"}>{`${announce.mileage.toLocaleString(
              "pt-BR"
            )} KM`}</ButtonBrand4>
            <ButtonBrand4 size={"sm"}>{announce.year}</ButtonBrand4>
          </Flex>

          <ButtonBrand4 size={"sm"}> {price}</ButtonBrand4>
        </Flex>
      </Flex>
    </Box>
  );
};
