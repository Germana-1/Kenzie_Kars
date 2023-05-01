import { Container, Flex } from "@chakra-ui/react";

import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { TextH5 } from "../../components/TextComponents";
import { ProfileViewAnnouncerInfoComponent } from "../../components/ProfileViewAnnouncerInfoComponent";
import { ListCardComponent } from "../../components/ListCardComponent";
import { PurpleBackgroundComponent } from "../../components/PurpleBackgroundComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";

export const ProfileViewPage = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.accountType !== "seller" && user?.id === id) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <HeaderComponent />

      <PurpleBackgroundComponent />

      <Container maxW="1200px" pt={"130px"} minH={"85vh"}>
        <ProfileViewAnnouncerInfoComponent />

        <TextH5 fontWeight={"600"} my={"30px"}>
          Anúncios
        </TextH5>

        <Flex justifyContent={"center"}>
          <ListCardComponent filterActive={false} hideTag={false} centered />
        </Flex>
      </Container>

      <FooterComponent />
    </>
  );
};
