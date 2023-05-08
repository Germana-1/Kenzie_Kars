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
import { ModalEditAd } from "../../components/ModalComponents/ModalEditAdComponent";
import { ModalDeleteAd } from "../../components/ModalComponents/ModalDeleteAdComponent";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { ModalHomeFIltersComponent } from "../../components/ModalComponents/ModalHomeFiltersComponent";

export const HomePage = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        editAdModalOpen,
        setEditAdModalOpen,
        deleteAdModalOpen,
        setDeleteAdModalOpen,
    } = useContext(AnnouncementContext);

    return (
        <Flex flexDirection={"column"}>
            <HeaderComponent />
            <BannerComponent />
            <Flex
                w="full"
                m={"70px auto 0"}
                alignItems={isMobile ? "center" : "start"}
                justifyContent={"space-between"}
                flexDir={isMobile ? "column" : "row"}
                px={10}
                gap={50}
            >
                <Show above="1000px">
                    <ListFiltersComponent />
                </Show>
                <Flex
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <ListCardComponent filterActive hideTag />
                    <Show below="1000px">
                        <Flex margin="90px" alignItems="center">
                            <ButtonBrand1 width="279px" onClick={onOpen}>
                                Filtros
                            </ButtonBrand1>
                        </Flex>
                    </Show>
                </Flex>
            </Flex>
            <FooterComponent />
            <ModalHomeFIltersComponent 
              onClose={onClose} 
              isOpen={isOpen} 
            />
            <ModalEditAd
                isOpen={editAdModalOpen}
                onClose={() => setEditAdModalOpen(false)}
            />
            <ModalDeleteAd
                isOpen={deleteAdModalOpen}
                onClose={() => setDeleteAdModalOpen(false)}
            />
        </Flex>
    );
};
