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

import { TextB2, TextH7 } from "../TextComponents";
import { ButtonBrand1, ButtonBrand4, ButtonGray6 } from "../ButtomComponents";
import { InputFormComponent } from "../InputFormComponent";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../utils/announcementDataNormalizer";
import { registerAnnouncementSchema } from "../../schemas/announcement.schema";

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
              labelText={"Marca"}
              value={"Mercedes Benz"}
              name="brand"
              register={register}
              errors={errors}
            />

            <InputFormComponent
              labelText={"Modelo"}
              value={"A 200 CGI ADVANCE SEDAN"}
              name="model"
              register={register}
              errors={errors}
            />

            <Flex gap={3}>
              <InputFormComponent
                type="number"
                labelText={"Ano"}
                value={"2018"}
                name="year"
                register={register}
                errors={errors}
              />

              <InputFormComponent
                labelText={"Combustível"}
                value={"Fex"}
                name="fuelType"
                register={register}
                errors={errors}
              />
            </Flex>

            <Flex gap={3}>
              <InputFormComponent
                type="number"
                labelText={"Quilometragem"}
                value={"30000"}
                name="mileage"
                register={register}
                errors={errors}
              />

              <InputFormComponent
                labelText={"Cor"}
                value={"Branco"}
                name="color"
                register={register}
                errors={errors}
              />
            </Flex>

            <Flex gap={3}>
              <InputFormComponent
                type="number"
                labelText={"Preço FIPE"}
                value={"40000"}
                name="priceFipe"
                register={register}
                errors={errors}
              />

              <InputFormComponent
                type="number"
                labelText={"Preço"}
                value={"50000"}
                name="price"
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
              value={"https://image.com"}
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
                  value={"https://image.com"}
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
