import {
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
        margin={"0 auto"}
        justifyContent="space-between"
        alignItems={isMobile ? "center" : "start"}
        flexDir={isMobile ? "column" : "row"}
      >
        <Show above="768px">
          <ListFiltersComponent />
        </Show>
        <ListCardComponent filterActive hideTag />
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
                  fontWeight="500"
                  alignSelf="start"
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
