import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import {
  ButtonBrand1,
} from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";

export const ModalError = ({ isOpen, onClose }: ModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          mt="100px"
          as="form"
          fontFamily="Lexend"
          zIndex="10000"
        >
          <ModalHeader>
            <TextH7>Erro!</TextH7>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="20px" p={5}>
            <TextB2>
              CEP Inválido
            </TextB2>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
