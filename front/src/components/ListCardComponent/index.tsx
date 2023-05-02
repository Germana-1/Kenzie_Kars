import { Flex } from "@chakra-ui/react";
import { useContext } from "react";

import { CardComponent } from "../../components/CardComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { IAnnouncement } from "../../interfaces/announcement.interface";

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
  const { announcements } = useContext(AnnouncementContext);

  return (
    <Flex
      wrap={{ sm: "nowrap", md: "wrap" }}
      overflowX={"auto"}
      gap={"25px"}
      maxW={centered ? "986.95px" : "100%"}
    >
      {filterActive
        ? announcements.map(
            (announce: IAnnouncement) =>
              announce.isActive && (
                <CardComponent
                  announce={announce}
                  hideTag={hideTag}
                  key={announce.id}
                />
              )
          )
        : announcements.map((announce: IAnnouncement) => (
            <CardComponent
              announce={announce}
              hideTag={hideTag}
              key={announce.id}
            />
          ))}
    </Flex>
  );
};
