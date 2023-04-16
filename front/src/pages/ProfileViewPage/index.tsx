import { Avatar, Box, Container, Flex } from "@chakra-ui/react";

import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { ListCardComponent } from "../../components/ListCardComponent";
import { TextB1, TextH5, TextH6 } from "../../components/TextComponents";
import { ButtonBrand4 } from "../../components/ButtomComponents";
import { Colors } from "../../styles/colors";
import { ProfileViewAnnouncerInfoComponent } from "../../components/ProfileViewAnnouncerInfoComponent";

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

          <TextH5 fontWeight={"600"}>Anúncios</TextH5>

          <ListCardComponent />
        </Container>

        <FooterComponent />
      </Flex>
    </>
  );
};
