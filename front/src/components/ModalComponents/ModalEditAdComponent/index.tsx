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
  FormLabel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import {
  ButtonGray6,
  ButtonGray5,
  ButtonBrand1,
  ButtonGray10,
  ButtonBrand4,
} from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../../utils/announcementDataNormalizer";
import { FipeContext } from "../../../contexts/fipeContext";
import { InputFormComponent } from "../../InputFormComponent/InputFormRegisterUserComponent";
import { Colors } from "../../../styles/colors";

export const ModalEditAd = ({ isOpen, onClose }: ModalProps) => {
  const { announcementRegister, handleClick } = useContext(AnnouncementContext);
  const { getAllBrands } = useContext(FipeContext);
  const [brands, setBrands] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    mileage: "",
    color: "",
    priceFipe: "",
    price: "",
    images: "",
    banner: "",
    description: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const descriptionValue = watch("description");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const [showInput, setShowInput] = useState(false);
  const handleButtonClick = () => {
    setShowInput(true);
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
      <Modal isOpen={isOpen} onClose={() => {
        setShowInput(false);
        onClose();
      }} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent
          mt="100px"
          as="form"
          fontFamily="Lexend"
          onSubmit={handleSubmit(onSubmit)}
          zIndex="10000"
        >
          <ModalHeader>
            <TextH7 fontWeight={500}>Editar anúncio</TextH7>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2 fontWeight={500}>Informações do veículo</TextB2>
            <FormControl>
              <Flex direction="column" gap="15px">
                <Box>
                  <Flex flexDir={"column"} gap={5}>
                    <InputFormComponent
                      labelText={"Marca"}
                      placeholder={"Mercedes Benz"}
                      register={register}
                      name="brand"
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                    <Flex flexDir={"column"} gap={2}>
                      <InputFormComponent
                        labelText={"Modelo"}
                        placeholder={"A 200 CGI ADVANCE SEDAN"}
                        register={register}
                        name="model"
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                      <Flex mt="15px" gap={2}>
                        <InputFormComponent
                          labelText={"Combustivel"}
                          placeholder={"Gasolina / Etanol"}
                          register={register}
                          name="fuelType"
                          onChange={handleInputChange}
                          autoComplete="off"
                        />
                        <InputFormComponent
                          type="number"
                          labelText={"Ano"}
                          placeholder={"2018"}
                          register={register}
                          name="year"
                          onChange={handleInputChange}
                          autoComplete="off"
                        />
                      </Flex>
                      <Flex mt="15px" gap={2}>
                        <InputFormComponent
                          type="number"
                          labelText={"Quilometragem"}
                          placeholder={"30.000"}
                          register={register}
                          name="mileage"
                          onChange={handleInputChange}
                          autoComplete="off"
                        />
                        <InputFormComponent
                          labelText={"Cor"}
                          placeholder={"Branco"}
                          register={register}
                          onChange={handleInputChange}
                          name="color"
                          autoComplete="off"
                        />
                      </Flex>
                      <Flex mt="15px" gap={2}>
                        <InputFormComponent
                          type="number"
                          labelText={"Preço tabela FIPE"}
                          placeholder={"R$ 48.000,00"}
                          register={register}
                          onChange={handleInputChange}
                          name="priceFipe"
                          autoComplete="off"
                        />
                        <InputFormComponent
                          type="number"
                          labelText={"Preço"}
                          placeholder={"R$ 50.000,00"}
                          register={register}
                          onChange={handleInputChange}
                          name="price"
                          autoComplete="off"
                        />
                      </Flex>
                      <FormControl mt="15px">
                        <InputFormComponent
                          hasTextArea={true}
                          labelText={"Descrição"}
                          onChange={handleInputChange}
                          register={register}
                          name="description"
                          autoComplete="off"
                        />
                      </FormControl>
                    </Flex>
                    <FormControl>
                      <FormLabel>Publicado</FormLabel>
                      <Flex gap={3}>
                        <ButtonGray10 w={"full"}>
                          Sim
                        </ButtonGray10>
                        <ButtonBrand1 w={"full"}>
                          Não
                        </ButtonBrand1>
                      </Flex>
                    </FormControl>
                    <Flex flexDir={"column"} gap={2}>
                      <InputFormComponent
                        labelText={"Imagem da capa"}
                        placeholder={"https://image.com"}
                        register={register}
                        name="banner"
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                    </Flex>
                    <Flex flexDir={"column"} gap={5}>
                      <InputFormComponent
                        labelText={"1° Imagem da galeria"}
                        placeholder={"https://image.com"}
                        register={register}
                        name="images"
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                    </Flex>
                    <Flex flexDir={"column"} gap={5}>
                      <InputFormComponent
                        labelText={"2° Imagem da galeria"}
                        placeholder={"https://image.com"}
                        register={register}
                        name="images"
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                      {showInput && (<InputFormComponent
                        labelText={"3° Imagem da galeria"}
                        placeholder={"https://image.com"}
                        register={register}
                        name="images"
                        onChange={handleInputChange}
                        autoComplete="off"
                      />)}

                      <Flex justifyContent="space-between">
                        <ButtonBrand4 onClick={handleButtonClick} size={"sm"}>
                          Adicionar campo para imagem da galeria
                        </ButtonBrand4>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter gap="10px">
            <ButtonGray6 fontWeight={500} color={Colors.grey2} onClick={() => handleClick('delete')}>
              Excluir anúncio
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