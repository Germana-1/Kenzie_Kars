import { Flex } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextH6 } from "../FontComponents";
import { CommentComponent } from "../CommentComponent";

export const AnnounceDetailCommentsComponent = () => {
  const comments = [1, 2, 3];

  return (
    <Flex
      w={"750px"}
      direction={"column"}
      gap={"50px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <TextH6 fontWeight="600">Comentários</TextH6>

      {comments.map((el) => {
        return <CommentComponent />;
      })}
    </Flex>
  );
};
