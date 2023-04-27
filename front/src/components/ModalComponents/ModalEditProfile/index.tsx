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
    ButtonAlert3
} from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { AnnouncementContext } from "../../../contexts/announcementContext";
import { announcementDataNormalizer } from "../../../utils/announcementDataNormalizer";
import { FipeContext } from "../../../contexts/fipeContext";
import { InputFormComponent } from "../../InputFormComponent/InputFormRegisterUserComponent";

export const ModalEditProfile = ({ isOpen, onClose }: ModalProps) => {
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
                        <TextH7 fontWeight={500}>Editar perfil</TextH7>
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
                                            errors={errors}
                                            name="name"
                                            autoComplete="off"
                                        />
                                        <InputFormComponent
                                            labelText={"Email"}
                                            placeholder={"samuel@kenzie.com.br"}
                                            register={register}
                                            errors={errors}
                                            name="email"
                                            autoComplete="off"
                                        />
                                        <InputFormComponent
                                            mask={"999.999.999-99"}
                                            labelText={"CPF"}
                                            placeholder={"000.000.000-00"}
                                            register={register}
                                            errors={errors}
                                            name="cpf"
                                            autoComplete="off"
                                        />
                                        <InputFormComponent
                                            mask={"(99) 99999-9999"}
                                            labelText={"Celular"}
                                            placeholder={"(DDD) 90000-0000"}
                                            register={register}
                                            errors={errors}
                                            name="phone"
                                            autoComplete="off"
                                        />
                                        <InputFormComponent
                                            mask={"99/99/9999"}
                                            labelText={"Data de Nascimento"}
                                            placeholder={"00/00/0000"}
                                            register={register}
                                            errors={errors}
                                            name="birthdate"
                                            autoComplete="off"
                                        />
                                        <InputFormComponent
                                            hasTextArea={true}
                                            labelText={"Descrição"}
                                            placeholderTextArea={"Digitar descrição"}
                                            register={register}
                                            errors={errors}
                                            name="description"
                                            autoComplete="off"
                                        />
                                    </Flex>
                                </Box>
                            </Flex>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter gap="10px">
                        <ButtonGray6 onClick={onClose}>Cancelar</ButtonGray6>
                        <ButtonAlert3>Excluir Perfil</ButtonAlert3>
                        <ButtonBrand1 isDisabled={false} type="submit">
                            Salvar Alterações
                        </ButtonBrand1>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};