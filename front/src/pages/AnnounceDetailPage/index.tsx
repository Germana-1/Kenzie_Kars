import { Container } from "@chakra-ui/react";

import { AnnounceDetailTitleComponent } from "../../components/AnnounceDetailTitleComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { AnnounceDetailDescriptionComponent } from "../../components/AnnounceDetailDescriptionComponent";
import { AnnounceDetailCommentsComponent } from "../../components/AnnounceDetailCommentsComponent";
import { AnnounceDetailUserCommentComponent } from "../../components/AnnounceDetailUserCommentComponent";

export const AnnounceDetailPage = () => {
  return (
    <>
      <HeaderComponent />
      <Container maxW="1440" centerContent>
        <AnnounceDetailTitleComponent />
        <AnnounceDetailDescriptionComponent />
        <AnnounceDetailCommentsComponent />
        <AnnounceDetailUserCommentComponent />
      </Container>
    </>
  );
};
