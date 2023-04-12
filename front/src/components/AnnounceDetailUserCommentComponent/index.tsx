import { Avatar, Box, Flex, Textarea, Wrap } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextB2 } from "../FontComponents";
import { CommentSugestionComponent } from "../CommentSuggestionComponent";
import { ButtonBrand1 } from "../ButtomComponents";

export const AnnounceDetailUserCommentComponent = () => {
  return (
    <Flex
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <Flex gap={"10px"} alignItems="center">
        <Avatar w={"32px"} h={"32px"} />
        <TextB2 fontWeight={"500"}>Samuel Leão</TextB2>
      </Flex>

      <Flex direction={"column"} gap={"10px"} position={"relative"}>
        <Textarea
          placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          resize={"none"}
          height={"150px"}
        />
        <Box
          position={{ sm: "absolute" }}
          right={"8px"}
          bottom={"8px"}
          zIndex={1}
        >
          <ButtonBrand1 size="sm" width={"100%"}>
            Comentar
          </ButtonBrand1>
        </Box>
      </Flex>

      <Wrap>
        <CommentSugestionComponent>Gostei muito!</CommentSugestionComponent>
        <CommentSugestionComponent>Incrível</CommentSugestionComponent>
        <CommentSugestionComponent>
          Recomendarei para meus amigos!
        </CommentSugestionComponent>
      </Wrap>
    </Flex>
  );
};
