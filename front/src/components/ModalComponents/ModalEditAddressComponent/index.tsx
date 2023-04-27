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

export const ModalEditAddress = ({ isOpen, onClose }: ModalProps) => {
    const { announcementRegister } = useContext(AnnouncementContext);
    const { getAllBrands } = useContext(FipeContext);
    const [brands, setBrands] = useState<string[]>([]);

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
            >
              <ModalHeader>
                <TextH7 fontWeight={500}>Editar endereço</TextH7>
              </ModalHeader>
      
              <ModalCloseButton />
      
              <ModalBody display="flex" flexDirection="column" gap="20px">
                <TextB2 fontWeight={500}>Informações de endereço</TextB2>
                <FormControl isRequired>
                  <Flex direction="column" gap="15px">
                    <Box>
                      <Flex flexDir={"column"} gap={5}>
                        <InputFormComponent
                          mask={"99999.999"}
                          labelText={"CEP"}
                          placeholder={"00000.000"}
                          register={register}
                          errors={errors}
                          name="address.zipCode"
                          autoComplete="off"
                        />
                        <Flex gap={3}>
                          <Flex flexDir={"column"} gap={2}>
                            <InputFormComponent
                              labelText={"Estado"}
                              placeholder={"Digitar Estado"}
                              register={register}
                              errors={errors}
                              name="address.state"
                              autoComplete="off"
                            />
                          </Flex>
                          <Flex flexDir={"column"} gap={2}>
                            <InputFormComponent
                              labelText={"Cidade"}
                              placeholder={"Digitar Cidade"}
                              register={register}
                              errors={errors}
                              name="address.city"
                              autoComplete="off"
                            />
                          </Flex>
                        </Flex>
                        <InputFormComponent
                          labelText={"Rua"}
                          placeholder={"Digitar Rua"}
                          register={register}
                          errors={errors}
                          name="address.street"
                          autoComplete="off"
                        />
                        <Flex gap={3}>
                          <Flex flexDir={"column"} gap={2}>
                            <InputFormComponent
                              labelText={"Número"}
                              type="number"
                              placeholder={"Digitar Numero"}
                              register={register}
                              errors={errors}
                              name="address.number"
                              autoComplete="off"
                            />
                          </Flex>
                          <Flex flexDir={"column"} gap={2}>
                            <InputFormComponent
                              labelText={"Complemento"}
                              placeholder={"Ex: apart 307"}
                              register={register}
                              errors={errors}
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
                <ButtonGray6 onClick={onClose}>Cancelar</ButtonGray6>
                <ButtonGray5 isDisabled={false} type="submit">
                  Salvar Alterações
                </ButtonGray5>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );      
};