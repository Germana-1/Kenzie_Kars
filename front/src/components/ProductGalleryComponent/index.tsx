import { Flex } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextH6 } from "../FontComponents";
import { GalleryCarousel } from "../GalleryCarouselComponent";

export const ProductGalleryComponent = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <Flex
        direction={"column"}
        gap={"20px"}
        p={"28px 44px"}
        borderRadius={"4px"}
        backgroundColor={Colors.grey10}
      >
        <TextH6 fontWeight="600">Fotos</TextH6>

        <Flex gap={"20px"} wrap={"wrap"} justifyContent={"center"}>
          <GalleryCarousel items={images} />
        </Flex>
      </Flex>
    </>
  );
};
