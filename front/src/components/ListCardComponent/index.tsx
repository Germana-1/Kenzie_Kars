import { Flex } from "@chakra-ui/react";
import { useContext } from "react";

import { CardComponent, IAnnounce } from "../../components/CardComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";

interface IListCardComponent {
  filterActive: boolean;
  hideTag: boolean;
  justify?: string;
}

export const ListCardComponent = ({
  filterActive,
  hideTag,
  justify,
}: IListCardComponent) => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    announcements && (
      <Flex
        justifyContent={{ sm: "space-between", md: justify || "flex-end" }}
        wrap={{ sm: "nowrap", md: "wrap" }}
        overflowX={"auto"}
        maxW={"100%"}
      >
        {filterActive
          ? announcements.map(
              (announce: IAnnounce) =>
                announce.isActive && (
                  <CardComponent
                    announce={announce}
                    hideTag={hideTag}
                    key={announce.id}
                  />
                )
            )
          : announcements.map((announce: IAnnounce) => (
              <CardComponent
                announce={announce}
                hideTag={hideTag}
                key={announce.id}
              />
            ))}
      </Flex>
    )
  );
};
