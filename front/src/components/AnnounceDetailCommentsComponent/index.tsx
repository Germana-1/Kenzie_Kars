import { Flex } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextH6 } from "../FontComponents";
import { CommentComponent } from "../CommentComponent";

export const AnnounceDetailCommentsComponent = () => {
  return (
    <Flex
      w={"750px"}
      direction={"column"}
      gap={"50px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.white}
    >
      <TextH6 weigth="600">Comentários</TextH6>

      <CommentComponent />
      <CommentComponent />
      <CommentComponent />
    </Flex>
  );
};
