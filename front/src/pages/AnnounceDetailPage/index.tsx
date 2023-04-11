import { Box, Container, Flex } from "@chakra-ui/react";

import { AnnounceDetailTitleComponent } from "../../components/AnnounceDetailTitleComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { AnnounceDetailDescriptionComponent } from "../../components/AnnounceDetailDescriptionComponent";
import { AnnounceDetailCommentsComponent } from "../../components/AnnounceDetailCommentsComponent";
import { AnnounceDetailUserCommentComponent } from "../../components/AnnounceDetailUserCommentComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { AnnouceDetailMainPicComponent } from "../../components/AnnouceDetailMainPicComponent";
import { AnnounceDetailGalleryComponent } from "../../components/AnnounceDetailGalleryComponent";

export const AnnounceDetailPage = () => {
  return (
    <>
      <Box
        bgGradient={
          "linear(0deg, rgba(233,236,239,1) 70%, rgba(69,41,230,1) 70%)"
        }
      >
        <HeaderComponent />
        <Container maxW="1440" pt={"130px"}>
          <Flex gap={"25px"}>
            <Flex direction={"column"} gap={"25px"}>
              <AnnouceDetailMainPicComponent />
              <AnnounceDetailTitleComponent />
              <AnnounceDetailDescriptionComponent />
            </Flex>

            <Flex direction={"column"} gap={"25px"}>
              <AnnounceDetailGalleryComponent />
              <AnnounceDetailGalleryComponent />
            </Flex>
          </Flex>

          <Flex direction={"column"} gap={"25px"} mt={"25px"}>
            <AnnounceDetailCommentsComponent />
            <AnnounceDetailUserCommentComponent />
          </Flex>
        </Container>
        <FooterComponent />
      </Box>
    </>
  );
};
