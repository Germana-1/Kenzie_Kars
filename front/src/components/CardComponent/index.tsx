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
  return (
    <Box
      minW="312px"
      maxW="312px"
      margin="20px"
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
        alt="Green double couch with wooden legs"
        border={`2px solid ${Colors.grey4}`}
        _hover={{
          border: `2px solid ${
            announce.isActive ? Colors.brand1 : Colors.grey4
          }`,
        }}
      />

      <Flex display="flex" flexDirection="column" gap="16px" marginTop="16px">
        <Heading size="16px">{`${announce.brand} - ${announce.model}`}</Heading>

        <Text
          fontSize="14px"
          fontWeight="400"
          color={Colors.grey2}
          lineHeight="24px"
        >
          {announce.description}
        </Text>

        <Flex gap="10px" alignItems="center">
          <Avatar src={announce.user?.avatar} w="32px" h="32px" />

          <Text fontSize="14px" fontWeight="500" color={Colors.grey2}>
            {announce.user?.name}
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Flex gap="10px">
            <ButtonBrand4 size={"sm"}>{`${announce.mileage} KM`}</ButtonBrand4>
            <ButtonBrand4 size={"sm"}>{announce.year}</ButtonBrand4>
          </Flex>

          <ButtonBrand4 size={"sm"}>{`R$ ${announce.price}`}</ButtonBrand4>
        </Flex>
      </Flex>
    </Box>
  );
};
