import { Box, Flex, Image, useDisclosure } from "@chakra-ui/react";

import car from "../../assets/unsplash_ZVgPUWC9Mjs.png";
import { Colors } from "../../styles/colors";
import { TextH6 } from "../FontComponents";
import { ModalCarGalleryComponent } from "../ModalCarGalleryComponent";

export const AnnounceDetailGalleryComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cars = [1, 2, 3, 4, 5, 6];

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
          {cars.map((el, i) => {
            return (
              <Box
                backgroundColor={Colors.grey7}
                h={"80px"}
                w={"80px"}
                borderRadius={"4px"}
                cursor={"pointer"}
                onClick={onOpen}
                key={i}
              >
                <Image
                  src={car}
                  w={"inherit"}
                  h={"inherit"}
                  objectFit={"contain"}
                  onClick={onOpen}
                />
              </Box>
            );
          })}
        </Flex>
      </Flex>

      <ModalCarGalleryComponent isOpen={isOpen} onClose={onClose} />
    </>
  );
};
