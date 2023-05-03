import { Flex } from "@chakra-ui/react";
import { useContext } from "react";

import { CardComponent } from "../../components/CardComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { useParams } from "react-router-dom";

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
