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
  ButtonGray6,
  ButtonAlert3,
} from "../../ButtomComponents";
import { TextB1, TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../../utils/announcementDataNormalizer";
import { FipeContext } from "../../../contexts/fipeContext";
import { Colors } from "../../../styles/colors";

export const ModalDeleteAccount = ({ isOpen, onClose }: ModalProps) => {
  const { announcementRegister } = useContext(AnnouncementContext);
  const { getAllBrands } = useContext(FipeContext);
  const [brands, setBrands] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    const numberOnly = /[^\d,]/g;

    data.mileage = +data.mileage;
    data.year = +data.year;
    data.price = parseFloat(data.price.replace(numberOnly, "").replace(",", "."));
    data.priceFipe = parseFloat(data.priceFipe.replace(numberOnly, "").replace(",", "."));

    const normalizedData = announcementDataNormalizer(data);
    announcementRegister(normalizedData);
  }

  useEffect(() => {
    (async () => {
      const res = await getAllBrands();
      const brands = Object.keys(res);
      setBrands(brands);
    })();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent mt="100px" as="form" fontFamily="Lexend" onSubmit={handleSubmit(onSubmit)} zIndex="10000">
          <ModalHeader>
            <TextH7 fontWeight={500}>Excluir conta</TextH7>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2 fontWeight={500} color={Colors.grey0}>
              Tem certeza que deseja excluir a sua conta?
            </TextB2>
            <TextB1 fontWeight={400} color={Colors.grey3}>
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
            </TextB1>
          </ModalBody>
          <ModalFooter gap="10px">
            <ButtonGray6 onClick={onClose}>Cancelar</ButtonGray6>
            <ButtonAlert3 isDisabled={false} type="submit">
              Sim, excluir a conta
            </ButtonAlert3>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
