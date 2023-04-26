import {
  Flex,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  ModalProps,
  FormControl,
  Input,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";

import {
  ButtonBrand1,
  ButtonBrand4,
  ButtonGray6,
} from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../../utils/announcementDataNormalizer";
import { FipeContext } from "../../../contexts/fipeContext";
import { IFipeModel } from "../../../interfaces/fipe.interface";
import { Colors } from "../../../styles/colors";
import { stringFormater } from "../../../utils/stringFormater";

export const ModalRegisterAnnoucement = ({ isOpen, onClose }: ModalProps) => {
  const { announcementRegister } = useContext(AnnouncementContext);
  const { getAllBrands, getAllModelsByBrand } = useContext(FipeContext);

  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<IFipeModel[]>([]);
  const [carDetail, setCarDetail] = useState<IFipeModel>({} as IFipeModel);
  const [image, setImage] = useState<number[]>([]);
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");

  const { register, handleSubmit } = useForm();

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

  async function getModels(value: string) {
    const res = await getAllModelsByBrand(value);
    setModels(res);
  }

  async function getCarDetails(value: string) {
    const car = models.filter((model) => model.name === value);
    setCarDetail(car[0]);
  }

  useEffect(() => {
    (async () => {
      const res = await getAllBrands();
      const brands = Object.keys(res);
      setBrands(brands);
    })();
  }, []);

  const formLabelCSS = {
    fontSize: "14px",
    fontWeight: "500",
  };

  const inputCSS = {
    fontSize: "16px",
    fontWeight: "400",
    border: `1.5px solid ${Colors.grey7}`,
    borderRadius: "4px",
    "&:focus": {
      borderColor: Colors.brand1,
    },
    "&:disabled": {
      opacity: "1",
      backgroundColor: Colors.grey7,
      cursor: "not-allowed",
    },
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent
          mt="100px"
          as="form"
          fontFamily="Lexend"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ModalHeader>
            <TextH7 fontWeight={500}>Criar anúncio</TextH7>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2 fontWeight={500}>Informações do veículo</TextB2>

            <FormControl isRequired>
              <Flex direction="column" gap="15px">
                <Box>
                  <FormLabel css={formLabelCSS}>Marca</FormLabel>
                  <Select
                    css={inputCSS}
                    {...register("brand", {
                      onChange: (e) => {
                        getModels(e.target.value);
                      },
                    })}
                  >
                    {brands.map((brand, i) => (
                      <option key={i} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </Select>
                </Box>

                <Box flexDir="column" gap="1px">
                  <FormLabel css={formLabelCSS}>Modelo</FormLabel>
                  <Select
                    css={inputCSS}
                    isDisabled={models.length ? false : true}
                    {...register("model", {
                      onChange: (e) => getCarDetails(e.target.value),
                    })}
                  >
                    {models.map((model, i) => (
                      <option key={i} value={model.name}>
                        {model.name}
                      </option>
                    ))}
                  </Select>
                </Box>
              </Flex>
            </FormControl>

            {carDetail.id && (
              <>
                <Flex gap="15px">
                  <Flex flexDir="column" gap="1px">
                    <FormLabel css={formLabelCSS}>Ano</FormLabel>
                    <Input
                      readOnly
                      css={inputCSS}
                      value={carDetail.year}
                      {...register("year")}
                    />
                  </Flex>

                  <Flex flexDir="column" gap="1px">
                    <FormLabel css={formLabelCSS}>Combustível</FormLabel>
                    <Input
                      readOnly
                      css={inputCSS}
                      value={(() => {
                        switch (carDetail.fuel) {
                          case 1:
                            return "Flex";
                          case 2:
                            return "Híbrido";
                          case 3:
                            return "Elétrico";
                        }
                      })()}
                      {...register("fuelType")}
                    />
                  </Flex>
                </Flex>

                <Flex gap="15px">
                  <Flex flexDir="column" gap="1px">
                    <FormLabel css={formLabelCSS}>Preço FIPE</FormLabel>
                    <Input
                      readOnly
                      css={inputCSS}
                      value={carDetail.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                      {...register("priceFipe")}
                    />
                  </Flex>

                  <FormControl isRequired>
                    <FormLabel css={formLabelCSS}>Preço</FormLabel>
                    <Input
                      css={inputCSS}
                      value={price}
                      {...register("price", {
                        onChange: (e) =>
                          setPrice(e.target.value.replace(/[^\d]/g, "")),
                        onBlur: (e) =>
                          stringFormater(e.target.value, true, setPrice),
                      })}
                    />
                  </FormControl>
                </Flex>

                <FormControl isRequired>
                  <Flex gap="15px">
                    <Flex flexDir="column" gap="1px">
                      <FormLabel css={formLabelCSS}>Quilometragem</FormLabel>
                      <Input
                        css={inputCSS}
                        value={mileage}
                        {...register("mileage", {
                          onChange: (e) =>
                            setMileage(e.target.value.replace(/[^\d]/g, "")),
                          onBlur: (e) =>
                            stringFormater(e.target.value, false, setMileage),
                        })}
                      />
                    </Flex>

                    <Flex flexDir="column" gap="1px">
                      <FormLabel css={formLabelCSS}>Cor</FormLabel>
                      <Input css={inputCSS} {...register("color")} />
                    </Flex>
                  </Flex>
                </FormControl>

                <FormControl isRequired>
                  <Box>
                    <FormLabel css={formLabelCSS}>Descrição</FormLabel>
                    <Textarea
                      css={inputCSS}
                      resize="none"
                      {...register("description")}
                    />
                  </Box>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel css={formLabelCSS}>
                    Imagem de capa (URL){" "}
                  </FormLabel>
                  <Input
                    css={inputCSS}
                    placeholder="Ex: http://www.imagestock.com"
                    autoComplete="off"
                    {...register("banner")}
                  />
                </FormControl>

                {image.map((_, i) => {
                  if (i >= 6) return null;

                  return (
                    <Box key={i}>
                      <FormLabel>{`${i + 1}º Imagem da galeria`}</FormLabel>
                      <Input
                        css={inputCSS}
                        placeholder="Ex: http://www.imagestock.com"
                        autoComplete="off"
                        {...register(`image${i + 1}`)}
                      />
                    </Box>
                  );
                })}

                <ButtonBrand4
                  alignSelf="flex-start"
                  fontSize="14px"
                  onClick={() => setImage((prevImages) => [...prevImages, 1])}
                >
                  Adicionar imagem
                </ButtonBrand4>
              </>
            )}
          </ModalBody>

          <ModalFooter gap="10px">
            <ButtonGray6 onClick={onClose}>Cancelar</ButtonGray6>

            <ButtonBrand1 isDisabled={false} type="submit">
              Criar anúncio
            </ButtonBrand1>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
