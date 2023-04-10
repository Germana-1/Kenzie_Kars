import { Container } from "@chakra-ui/react";

import { AnnounceDetailTitle } from "../../components/AnnounceDetailTitle";
import { HeaderComponent } from "../../components/HeaderComponent";

export const AnnounceDetailPage = () => {
  return (
    <>
      <HeaderComponent />
      <Container maxW="1440" centerContent>
        <AnnounceDetailTitle />
      </Container>
    </>
  );
};
