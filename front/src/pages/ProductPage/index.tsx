import { Box, Container, Flex } from "@chakra-ui/react";

import { ProductTitleComponent } from "../../components/ProductTitleComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { ProductDescriptionComponent } from "../../components/ProductDescriptionComponent";
import { ProductCommentsComponent } from "../../components/ProductCommentsComponent";
import { ProductUserCommentComponent } from "../../components/ProductUserCommentComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { ProductBannerComponent } from "../../components/ProductBannerComponent";
import { ProductGalleryComponent } from "../../components/ProductGalleryComponent";
import { ProductAnnouncerInfoComponent } from "../../components/ProductAnnouncerInfoComponent";

export const ProductPage = () => {
  return (
    <>
      <Box
        bgGradient={
          "linear(0deg, rgba(233,236,239,1) 70%, rgba(69,41,230,1) 70%)"
        }
      >
        <HeaderComponent />
        <Container maxW="1200px" pt={"130px"}>
          <Flex gap={"25px"} wrap={"wrap"} justifyContent={"center"}>
            <Flex direction={"column"} gap={"25px"} maxW={"750px"}>
              <ProductBannerComponent />
              <ProductTitleComponent />
              <ProductDescriptionComponent />
            </Flex>

            <Flex
              direction={"column"}
              gap={"25px"}
              w={{ sm: "750px", xl: "380px" }}
              maxW={"100%"}
            >
              <ProductGalleryComponent />
              <ProductAnnouncerInfoComponent />
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            gap={"25px"}
            mt={"25px"}
            maxW={"750px"}
            mx={{ md: "auto", xl: "initial" }}
          >
            <ProductCommentsComponent />
            <ProductUserCommentComponent />
          </Flex>
        </Container>
        <FooterComponent />
      </Box>
    </>
  );
};
