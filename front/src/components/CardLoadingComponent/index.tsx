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

import { FontSizes } from "../../styles/fontSizes";
import { Colors } from "../../styles/colors";
import { ButtonBrand4, ButtonGray10 } from "../ButtomComponents";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import fallbackImg from "../../assets/selected_car.jpg";

interface IProps {
  announce: IAnnouncement;
  hideTag: boolean;
}

export const CardLoadingComponent = () => {
  return (
    <Box
      minW="312px"
      maxW="312px"
      h="420px"
      position="relative"
      cursor="pointer"
    >
      <Tag
        position={"absolute"}
        top={"2px"}
        left={"2px"}
        borderRadius={"initial"}
        backgroundColor={"red"}
        color={Colors.white}
        fontSize={FontSizes.body2}
      >
        {"Ativo"}
      </Tag>

      <Image
        src={"announce.banner"}
        fallbackSrc={fallbackImg}
        border={`2px solid ${Colors.grey7}`}
        bg={Colors.grey7}
        w="100%"
        h="152px"
        whiteSpace={"nowrap"}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        objectFit={"cover"}
      />

      <Flex display="flex" flexDirection="column" gap="16px" marginTop="16px">
        <Heading
          size="16px"
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
        >
          {"aaaaaaaaaaaaaaaaaaaaaaa"}
        </Heading>

        <Text
          fontSize="14px"
          fontWeight="400"
          color={Colors.grey2}
          lineHeight="24px"
          overflow="hidden"
          textOverflow="ellipsis"
          display="-webkit-box"
        >
          {"aaaaaaaaaaaaaaaaaaaaaaaaaa"}
        </Text>

        <Flex gap="10px" alignItems="center">
          <Avatar src={"announce.user?.avatar"} w="32px" h="32px" />

          <Text fontSize="14px" fontWeight="500" color={Colors.grey2}>
            {"userName"}
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Flex gap="10px">
            <ButtonBrand4 size={"sm"}>{"aaaaaa"}</ButtonBrand4>
            <ButtonBrand4 size={"sm"}>{"aaaaaaaaaa"}</ButtonBrand4>
          </Flex>

          <ButtonBrand4 size={"sm"}> {"price"}</ButtonBrand4>
        </Flex>
      </Flex>
    </Box>
  );
};
