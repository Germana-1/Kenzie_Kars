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
import { TextB1, TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../../utils/announcementDataNormalizer";
import { FipeContext } from "../../../contexts/fipeContext";
import { Colors } from "../../../styles/colors";
import { Link } from "react-router-dom";

export const ModalSucess = ({ isOpen, onClose }: ModalProps) => {
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
        <ModalContent
          mt="100px"
          as="form"
          fontFamily="Lexend"
          onSubmit={handleSubmit(onSubmit)}
          zIndex="10000"
        >
          <ModalHeader>
            <TextH7>Sucesso!</TextH7>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2>
              Sua conta foi criada com sucesso!
            </TextB2>
            <TextB1>
              Agora você poderá ver seus negócios crescendo em grande escala
            </TextB1>
          </ModalBody>
          <ModalFooter gap="10px">
            <Link to='/login'>
              <ButtonBrand1>Ir para o login</ButtonBrand1>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
