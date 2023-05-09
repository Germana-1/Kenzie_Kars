import { Avatar, Flex, Textarea } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextB1, TextB2 } from "../TextComponents";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { UserContext } from "../../contexts/userContext";
import { useContext, useState } from "react";
import { ButtonBrand1, ButtonGray6 } from "../ButtomComponents";
import { FontSizes } from "../../styles/fontSizes";

interface IUserCommentary {
  comment: {
    id: string;
    name: string;
    avatar: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
    announcementId: string;
    userId: string;
    user: {
      avatar: string;
      name: string;
    };
  };
}

export const CommentComponent = ({ comment }: IUserCommentary) => {
  const { user } = useContext(UserContext);
  const [editComment, setEditComment] = useState(false);

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
      <Flex alignItems="center" justifyContent={"space-between"}>
        <Flex gap={"10px"} alignItems={"center"}>
          <Avatar w="32px" h="32px" src={comment.user.avatar} />

          <TextB2 fontWeight="500">{comment.user.name}</TextB2>
          <TextB2 fontWeight="500" color={Colors.grey3}>
            ●
          </TextB2>
          <TextB2 fontWeight="500" color={Colors.grey3}>
            há {getTotalDays(comment.updatedAt)} dias
          </TextB2>
        </Flex>

        {comment.userId == user?.id && (
          <Flex gap={"10px"} fontSize={"18px"}>
            <EditIcon
              cursor={"pointer"}
              onClick={() => setEditComment(!editComment)}
            />
            <DeleteIcon cursor={"pointer"} />
          </Flex>
        )}
      </Flex>

      {editComment ? (
        <>
          <Textarea
            fontWeight={FontSizes.body2}
            resize={"none"}
            rows={5}
            color={Colors.grey2}
            value={comment.comment}
          />
          <Flex justifyContent={"flex-end"} gap={"10px"}>
            <ButtonGray6>Cancelar</ButtonGray6>
            <ButtonBrand1>Salvar</ButtonBrand1>
          </Flex>
        </>
      ) : (
        <TextB1 fontWeight="400" color={Colors.grey2}>
          {comment.comment}
        </TextB1>
      )}
    </Flex>
  );
};
