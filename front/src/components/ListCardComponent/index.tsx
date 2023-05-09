<<<<<<< HEAD
import { Box, Button, Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Colors } from "../../styles/colors";
import { StyledReactPaginate } from "./style";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SearchNotFound } from "../SearchNotFound";
=======
import { Flex } from "@chakra-ui/react";
import { useContext } from "react";

import { CardComponent } from "../../components/CardComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { useParams } from "react-router-dom";
>>>>>>> parent of 6c0db8f (feat: add cards paging front)

interface IListCardComponent {
  centered?: boolean;
  filterActive: boolean;
  hideTag: boolean;
}

export const ListCardComponent = ({
  filterActive,
  hideTag,
  centered,
}: IListCardComponent) => {
  const { id } = useParams();
  const { announcements } = useContext(AnnouncementContext);
  let data = announcements;

  if (id) data = announcements.filter((el) => el.user?.id === id);

  return (
    <Flex
      wrap={{ sm: "nowrap", md: "wrap" }}
      overflowX={"auto"}
      gap={"25px"}
      maxW={centered ? "986.95px" : "100%"}
    >
      {filterActive
        ? data.map(
            (announce: IAnnouncement) =>
              announce.isActive && (
                <CardComponent
                  announce={announce}
                  hideTag={hideTag}
                  key={announce.id}
                />
              )
          )
        : data.map((announce: IAnnouncement) => (
            <CardComponent
              announce={announce}
              hideTag={hideTag}
              key={announce.id}
            />
          ))}
    </Flex>
  );
};
