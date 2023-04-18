import { Container } from "@chakra-ui/react";

import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { TextH5 } from "../../components/TextComponents";
import { ProfileViewAnnouncerInfoComponent } from "../../components/ProfileViewAnnouncerInfoComponent";
import { ListCardComponent } from "../../components/ListCardComponent";
import { PurpleBackgroundComponent } from "../../components/PurpleBackgroundComponent";

export const ProfileViewPage = () => {
  return (
    <>
      <HeaderComponent />

      <PurpleBackgroundComponent />

      <Container maxW="1200px" pt={"130px"}>
        <ProfileViewAnnouncerInfoComponent />

        <TextH5 fontWeight={"600"} my={"30px"}>
          Anúncios
        </TextH5>

        <ListCardComponent filterActive={false} hideTag={false} />
      </Container>

      <FooterComponent />
    </>
  );
};
