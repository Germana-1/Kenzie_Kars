import { Container, Flex } from "@chakra-ui/react";

import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { TextH5 } from "../../components/TextComponents";
import { ProfileViewAnnouncerInfoComponent } from "../../components/ProfileViewAnnouncerInfoComponent";
import { Colors } from "../../styles/colors";
import { ListCardComponent } from "../../components/ListCardComponent";

export const ProfileViewPage = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        bgGradient={`linear(0deg, ${Colors.grey8} 90%, ${Colors.brand1} 90%)`}
      >
        <HeaderComponent />

        <Container maxW="1200px" pt={"130px"}>
          <ProfileViewAnnouncerInfoComponent />

          <TextH5 fontWeight={"600"} my={"30px"}>
            Anúncios
          </TextH5>

          <ListCardComponent filterActive={false} hideTag={false} />
        </Container>

        <FooterComponent />
      </Flex>
    </>
  );
};
