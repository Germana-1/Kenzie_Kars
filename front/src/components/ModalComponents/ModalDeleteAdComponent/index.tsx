import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    UseModalProps,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ButtonGray6, ButtonAlert3 } from "../../ButtomComponents";
import { TextB1, TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { Colors } from "../../../styles/colors";

export const ModalDeleteAd = ({ isOpen, onClose }: UseModalProps) => {
    const { announcementDelete } = useContext(AnnouncementContext);

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                closeOnOverlayClick={false}
            >
                <ModalOverlay />
                <ModalContent
                    mt="100px"
                    as="form"
                    fontFamily="Lexend"
                    zIndex="10000"
                >
                    <ModalHeader>
                        <TextH7 fontWeight={500}>Excluir anúncio</TextH7>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display="flex" flexDirection="column" gap="20px">
                        <TextB2 fontWeight={500} color={Colors.grey0}>
                            Tem certeza que deseja remover este anúncio?
                        </TextB2>
                        <TextB1 fontWeight={400} color={Colors.grey3}>
                            Essa ação não pode ser desfeita. Isso excluirá
                            permanentemente seu anúncio.
                        </TextB1>
                    </ModalBody>
                    <ModalFooter gap="10px">
                        <ButtonGray6 onClick={onClose}>Cancelar</ButtonGray6>
                        <ButtonAlert3
                            onClick={() => announcementDelete()}
                            isDisabled={false}
                            type="submit"
                        >
                            Sim, excluir a anúncio
                        </ButtonAlert3>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
