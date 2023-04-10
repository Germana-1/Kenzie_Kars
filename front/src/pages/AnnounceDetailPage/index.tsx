import { Container } from "@chakra-ui/react";

import { AnnounceDetailTitleComponent } from "../../components/AnnounceDetailTitleComponent";
import { HeaderComponent } from "../../components/HeaderComponent";

export const AnnounceDetailPage = () => {
  return (
    <>
      <HeaderComponent />
      <Container maxW="1440" centerContent>
        <AnnounceDetailTitleComponent />
      </Container>
    </>
  );
};
