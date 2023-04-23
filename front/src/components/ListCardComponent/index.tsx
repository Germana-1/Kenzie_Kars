import { Flex } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

import { CardComponent } from "../../components/CardComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { IAnnouncement } from "../../interfaces/announcement.interface";

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
  const { announcementListAll } = useContext(AnnouncementContext);
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    async function getProductList() {
      setAnnouncements(await announcementListAll());
    }
    getProductList();
  }, []);

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
    )
  );
};
