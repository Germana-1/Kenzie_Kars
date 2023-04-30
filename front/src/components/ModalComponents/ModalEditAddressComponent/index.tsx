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
  ButtonGray6,
  ButtonGray5,
} from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../../utils/announcementDataNormalizer";
import { FipeContext } from "../../../contexts/fipeContext";
import { InputFormComponent } from "../../InputFormComponent/InputFormRegisterUserComponent";
import { Colors } from "../../../styles/colors";

export const ModalEditAddress = ({ isOpen, onClose }: ModalProps) => {
  const { announcementRegister } = useContext(AnnouncementContext);
  const { getAllBrands } = useContext(FipeContext);
  const [brands, setBrands] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    zipCode: "",
    state: "",
    city: "",
    street: "",
    number: "",
    complement: "",
  });

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


  const { register, handleSubmit, formState: { errors }, } = useForm();

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
            <TextH7
              fontWeight={800}
              fontFamily={"Lenxend"}
              color={Colors.brand1}
            >
              Editar endereço
            </TextH7>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2 fontWeight={500}>Informações de endereço</TextB2>
            <FormControl>
              <Flex direction="column" gap="15px">
                <Box>
                  <Flex flexDir={"column"} gap={5}>
                    <InputFormComponent
                      mask={"99999.999"}
                      labelText={"CEP"}
                      placeholder={"00000.000"}
                      register={register}
                      name="address.zipCode"
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                    <Flex gap={3}>
                      <Flex flexDir={"column"} gap={2}>
                        <InputFormComponent
                          labelText={"Estado"}
                          placeholder={"Digitar Estado"}
                          register={register}
                          name="address.state"
                          onChange={handleInputChange}
                          autoComplete="off"
                        />
                      </Flex>
                      <Flex flexDir={"column"} gap={2}>
                        <InputFormComponent
                          labelText={"Cidade"}
                          placeholder={"Digitar Cidade"}
                          register={register}
                          name="address.city"
                          onChange={handleInputChange}
                          autoComplete="off"
                        />
                      </Flex>
                    </Flex>
                    <InputFormComponent
                      labelText={"Rua"}
                      placeholder={"Digitar Rua"}
                      register={register}
                      name="address.street"
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                    <Flex gap={3}>
                      <Flex flexDir={"column"} gap={2}>
                        <InputFormComponent
                          labelText={"Número"}
                          type="number"
                          placeholder={"Digitar Numero"}
                          register={register}
                          name="address.number"
                          onChange={handleInputChange}
                          autoComplete="off"
                        />
                      </Flex>
                      <Flex flexDir={"column"} gap={2}>
                        <InputFormComponent
                          labelText={"Complemento"}
                          placeholder={"Ex: apart 307"}
                          register={register}
                          onChange={handleInputChange}
                          name="address.complement"
                          autoComplete="off"
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter gap="10px">
            <ButtonGray6 fontWeight={500} color={Colors.grey2} onClick={onClose}>
              Cancelar
            </ButtonGray6>
            <ButtonGray5 isDisabled={!isFormValid} type="submit">
              Salvar Alterações
            </ButtonGray5>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
