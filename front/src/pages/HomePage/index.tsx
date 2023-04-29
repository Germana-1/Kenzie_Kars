import {
  Box,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Show,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

import { HeaderComponent } from "../../components/HeaderComponent";
import { BannerComponent } from "../../components/BannerComponent";
import { ListCardComponent } from "../../components/ListCardComponent";
import { ListFiltersComponent } from "../../components/ListFiltersComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { ButtonBrand1 } from "../../components/ButtomComponents";
import { FontSizes } from "../../styles/fontSizes";

export const HomePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDirection={"column"}>
      <HeaderComponent />
      <BannerComponent />
      <Flex
        w="96%"
        margin={"70px auto 0"}
        justifyContent="space-between"
        alignItems={isMobile ? "center" : "start"}
        flexDir={isMobile ? "column" : "row"}
      >
        <Box minW={"400px"}>
          <Show above="768px">
            <ListFiltersComponent />
          </Show>
        </Box>

        <Flex w={"1325px"} maxW={"100%"} justifyContent={"center"}>
          <ListCardComponent filterActive hideTag />
        </Flex>

        <Show below="768px">
          <Flex margin="90px" alignItems="center">
            <ButtonBrand1 width="279px" onClick={onOpen}>
              Filtros
            </ButtonBrand1>
          </Flex>

          <Flex>
            <Modal onClose={onClose} isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent
                display="flex"
                alignItems="center"
                marginTop="80px"
                borderRadius="0"
              >
                <ModalHeader
                  fontSize={FontSizes.heading7}
                  fontFamily={"Lexend"}
                  fontWeight="500"
                  alignSelf="start"
                  p={"15px"}
                >
                  Filtro
                </ModalHeader>
                <ModalCloseButton />

                <ListFiltersComponent />

                <Flex marginTop="42px" marginBottom="32px">
                  <ButtonBrand1 width="279px" onClick={onClose}>
                    Ver anúncios
                  </ButtonBrand1>
                </Flex>
              </ModalContent>
            </Modal>
          </Flex>
        </Show>
      </Flex>
      <FooterComponent />
    </Flex>
  );
};
