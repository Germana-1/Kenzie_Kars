import { Avatar, Flex } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextB1, TextB2 } from "../TextComponents";

interface IUserCommentary {
  id: string;
  name: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  announcementId: string;
  userId: string;
}

export const CommentComponent = (user: IUserCommentary) => {
  const getTotalDays = (value: string) => {
    const date1 = new Date(value);
    const date2 = new Date();
    const diffInMs = date2.getTime() - date1.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const days = diffInDays.toString();

    return days;
  };

  return (
    <Flex
      direction={"column"}
      gap={"20px"}
      borderRadius={"4px"}
      backgroundColor={Colors.white}
    >
      <Flex gap={"10px"} alignItems="center">
        <Avatar w="32px" h="32px" />

        <TextB2 fontWeight="500">{user.name}</TextB2>
        <TextB2 fontWeight="500" color={Colors.grey3}>
          ●
        </TextB2>
        <TextB2 fontWeight="500" color={Colors.grey3}>
          há {getTotalDays(user.updatedAt)} dias
        </TextB2>
      </Flex>

      <TextB1 fontWeight="400" color={Colors.grey2}>
        {user.comment}
      </TextB1>
    </Flex>
  );
};
