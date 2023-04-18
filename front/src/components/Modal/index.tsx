import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { TextH7 } from "../TextComponents";
import { ButtonBrand3Disable } from "../ButtomComponents";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalRegisterAnnoucement = ({ isOpen, onClose }: IModal) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt={"100px"}>
          <ModalHeader>
            <TextH7 fontWeight={500}>Criar anúncio</TextH7>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <ButtonBrand3Disable>Criar anúncio</ButtonBrand3Disable>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
