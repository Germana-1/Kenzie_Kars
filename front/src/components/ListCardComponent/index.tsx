import { Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useContext } from "react";

import { CardComponent } from "../../components/CardComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { SearchNotFound } from "../SearchNotFound";

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
    >
      {!!filterActive &&
        data.map(
            (announce: IAnnouncement) =>
              announce.isActive && (
                <CardComponent
                  announce={announce}
                  hideTag={hideTag}
                  key={announce.id}
                />
              )
          )
      }
      {data.length ? 
        data.map((announce: IAnnouncement) => (
          <CardComponent
            announce={announce}
            hideTag={hideTag}
            key={announce.id}
          />
        )) : 
          <SearchNotFound/>
        }
    </Flex>
  );
};