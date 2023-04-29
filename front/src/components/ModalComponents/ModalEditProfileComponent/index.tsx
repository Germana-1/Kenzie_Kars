import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  FormControl,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";

import {
  ButtonBrand1,
  ButtonGray6,
  ButtonAlert3,
} from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../../utils/announcementDataNormalizer";
import { FipeContext } from "../../../contexts/fipeContext";
import { InputFormComponent } from "../../InputFormComponent/InputFormRegisterUserComponent";
import { Colors } from "../../../styles/colors";
import { UserContext } from "../../../contexts/userContext";

export const ModalEditProfile = ({ isOpen, onClose }: ModalProps) => {
  const { announcementRegister } = useContext(AnnouncementContext);
  const { getAllBrands } = useContext(FipeContext);
  const { handleClick } = useContext(UserContext);
  const [brands, setBrands] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birthdate: "",
    description: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  async function onSubmit(data: any) {
    const numberOnly = /[^\d,]/g;

    data.mileage = +data.mileage;
    data.year = +data.year;
    data.price = parseFloat(
      data.price.replace(numberOnly, "").replace(",", ".")
    );
    data.priceFipe = parseFloat(
      data.priceFipe.replace(numberOnly, "").replace(",", ".")
    );

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

  const descriptionValue = watch("description");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const allValuesAreEmpty = Object.values(formValues).every(
      (value) => value === ""
    );
    setIsFormValid(!allValuesAreEmpty);
  }, [formValues]);

  useEffect(() => {
    setIsFormValid(!!descriptionValue);
  }, [descriptionValue]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent
          mt="100px"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          zIndex="10000"
        >
          <ModalHeader>
            <TextH7 fontWeight={800} fontFamily="Lexend" color={Colors.brand1}>
              Editar perfil
            </TextH7>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2 fontWeight={500}>Informações do pessoais</TextB2>
            <FormControl isRequired>
              <Flex direction="column" gap="15px">
                <Box>
                  <Flex flexDir={"column"} gap={5}>
                    <InputFormComponent
                      labelText={"Nome"}
                      placeholder={"Samuel Leão Silva"}
                      register={register}
                      name="name"
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                    <InputFormComponent
                      labelText={"Email"}
                      placeholder={"samuel@kenzie.com.br"}
                      register={register}
                      name="email"
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                    <InputFormComponent
                      mask={"999.999.999-99"}
                      labelText={"CPF"}
                      placeholder={"000.000.000-00"}
                      register={register}
                      name="cpf"
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                    <InputFormComponent
                      mask={"(99) 99999-9999"}
                      labelText={"Celular"}
                      placeholder={"(DDD) 90000-0000"}
                      register={register}
                      name="phone"
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                    <InputFormComponent
                      mask={"99/99/9999"}
                      labelText={"Data de Nascimento"}
                      placeholder={"00/00/0000"}
                      register={register}
                      name="birthdate"
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                    <InputFormComponent
                      hasTextArea={true}
                      labelText={"Descrição"}
                      placeholderTextArea={"Digitar descrição"}
                      register={register}
                      name="description"
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                  </Flex>
                </Box>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter gap="10px">
            <ButtonGray6 onClick={onClose}>Cancelar</ButtonGray6>
            <ButtonAlert3 onClick={() => handleClick("delete")}>
              Excluir Perfil
            </ButtonAlert3>
            <ButtonBrand1 isDisabled={!isFormValid} type="submit">
              Salvar Alterações
            </ButtonBrand1>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
