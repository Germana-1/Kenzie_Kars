import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextB2, TextH7 } from "../../TextComponents";
import {
  ButtonBrand1,
  ButtonBrand4,
  ButtonGray6,
} from "../../ButtomComponents";
import { InputFormComponent } from "../../InputFormComponent";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../../utils/announcementDataNormalizer";
import { registerAnnouncementSchema } from "../../../schemas/announcement.schema";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalRegisterAnnoucement = ({ isOpen, onClose }: IModal) => {
  const { announcementRegister } = useContext(AnnouncementContext);
  const [image, setImage] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerAnnouncementSchema),
  });

  const onSubmit = (data: any) => {
    const normalizedData = announcementDataNormalizer(data);
    announcementRegister(normalizedData);
  };

  const handleModel = () => {};

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent
          mt={"100px"}
          fontFamily={"Lexend"}
          as={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <ModalHeader>
            <TextH7 fontWeight={500}>Criar anúncio</TextH7>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody display={"flex"} flexDirection={"column"} gap={"20px"}>
            <TextB2 fontWeight={500}>Informações do veículo</TextB2>

            <InputFormComponent
              labelText={"Modelo"}
              name="model"
              register={register}
              errors={errors}
              onBlur={() => console.log("arihaaaaaaa")}
            />

            <InputFormComponent
              labelText={"Marca"}
              name="brand"
              register={register}
              errors={errors}
              isDisabled
            />

            <Flex gap={3}>
              <InputFormComponent
                type="number"
                labelText={"Ano"}
                name="year"
                register={register}
                errors={errors}
                isDisabled
              />

              <InputFormComponent
                labelText={"Combustível"}
                name="fuelType"
                register={register}
                errors={errors}
                isDisabled
              />
            </Flex>

            <Flex gap={3}>
              <InputFormComponent
                type="number"
                labelText={"Preço FIPE"}
                name="priceFipe"
                register={register}
                errors={errors}
                isDisabled
              />

              <InputFormComponent
                type="number"
                labelText={"Preço"}
                name="price"
                register={register}
                errors={errors}
              />
            </Flex>

            <Flex gap={3}>
              <InputFormComponent
                type="number"
                labelText={"Quilometragem"}
                name="mileage"
                register={register}
                errors={errors}
              />

              <InputFormComponent
                labelText={"Cor"}
                name="color"
                register={register}
                errors={errors}
              />
            </Flex>

            <InputFormComponent
              labelText={"Descrição"}
              hasTextArea
              placeholderTextArea={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
              name="description"
              register={register}
              errors={errors}
            />

            <InputFormComponent
              labelText={"Imagem da capa"}
              name="banner"
              register={register}
              errors={errors}
            />

            {image.map((_, i) => {
              if (i >= 6) return null;

              return (
                <InputFormComponent
                  key={i}
                  labelText={`${i + 1}º Imagem da galeria`}
                  name={`image${i + 1}`}
                  register={register}
                  errors={errors}
                />
              );
            })}

            <ButtonBrand4
              alignSelf={"flex-start"}
              fontSize={"14px"}
              onClick={() => setImage((prevImages) => [...prevImages, 1])}
            >
              Adicionar imagem
            </ButtonBrand4>
          </ModalBody>

          <ModalFooter gap={"10px"}>
            <ButtonGray6 onClick={onClose}>Cancelar</ButtonGray6>

            <ButtonBrand1 isDisabled={false} type={"submit"}>
              Criar anúncio
            </ButtonBrand1>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
