import { Container, Flex } from "@chakra-ui/react";

import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { TextH5 } from "../../components/TextComponents";
import { ProfileViewAnnouncerInfoComponent } from "../../components/ProfileViewAnnouncerInfoComponent";
import { ListCardComponent } from "../../components/_deletar";

export const ProfileViewPage = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        bgGradient={
          "linear(0deg, rgba(233,236,239,1) 90%, rgba(69,41,230,1) 90%)"
        }
      >
        <HeaderComponent />

        <Container maxW="1200px" pt={"130px"}>
          <ProfileViewAnnouncerInfoComponent />

          <TextH5 fontWeight={"600"} my={"30px"}>
            Anúncios
          </TextH5>

          <ListCardComponent />
        </Container>

        <FooterComponent />
      </Flex>
    </>
  );
};
