import { Flex, FormControl, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";

import { HeaderComponent } from "./../../components/HeaderComponent/index";
import { InputFormComponent } from "./../../components/InputFormComponent/index";
import { ButtonBrand1, ButtonGray10 } from "../../components/ButtomComponents";
import { registerUserSchema } from "../../schemas";
import { ErrorComponent } from "./../../components/ErrorComponent/index";

const formStyle = {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    gap: 45,
};

export const RegisterPage = () => {
    const [isError, setIsError] = useState<boolean>(true);

    const [optionIsBuyer, setOptionIsBuyer] = useState<boolean>(false);
    const [optionIsAdvertiser, setOptionIsAdvertiser] =
        useState<boolean>(false);

    const setBuyerOption = () => {
        setIsError(false);
        if (optionIsBuyer) {
            setOptionIsBuyer(false);
            setOptionIsAdvertiser(true);
            return false;
        }
        setOptionIsBuyer(true);
        setOptionIsAdvertiser(false);
        return true;
    };

    const setAdvertiserOption = () => {
        setIsError(false);
        if (optionIsAdvertiser) {
            setOptionIsAdvertiser(false);
            setOptionIsBuyer(true);
            return false;
        }
        setOptionIsAdvertiser(true);
        setOptionIsBuyer(false);
        return true;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerUserSchema),
    });

    const registerUserForm = (data: any) => {
        const dataUpdate = {
            ...data,
            account_type: optionIsBuyer ? "buyer" : "advertiser",
        };
        console.log(dataUpdate);
    };

    return (
        <>
            <HeaderComponent />
            <Flex
                w={"full"}
                minH={"100vh"}
                justifyContent={"center"}
                alignItems={"center"}
                py={150}
            >
                <Flex flexDir={"column"} gap={30} px={5}>
                    <Text fontSize={24} fontWeight={500}>
                        Cadastro
                    </Text>
                    <form
                        onSubmit={handleSubmit(registerUserForm)}
                        style={{ ...formStyle, flexDirection: "column" }}
                    >
                        <Flex flexDir={"column"} gap={5}>
                            <Text fontSize={14} fontWeight={500}>
                                Informações Pessoais
                            </Text>
                            <InputFormComponent
                                labelText={"Nome"}
                                placeholder={"Ex: Samuel Leão"}
                                name="name"
                                register={register}
                                errors={errors}
                            />
                            <InputFormComponent
                                labelText={"Email"}
                                placeholder={"Ex: samuel@kenzie.com.br"}
                                register={register}
                                errors={errors}
                                name="email"
                            />
                            <InputFormComponent
                                mask={"999.999.999-99"}
                                labelText={"CPF"}
                                placeholder={"000.000.000-00"}
                                register={register}
                                errors={errors}
                                name="cpf"
                            />
                            <InputFormComponent
                                mask={"(99) 99999-9999"}
                                labelText={"Celular"}
                                placeholder={"(DDD) 90000-0000"}
                                register={register}
                                errors={errors}
                                name="phone"
                            />
                            <InputFormComponent
                                mask={"99/99/9999"}
                                labelText={"Data de Nascimento"}
                                placeholder={"00/00/0000"}
                                register={register}
                                errors={errors}
                                name="birthdate"
                            />
                            <InputFormComponent
                                hasTextArea={true}
                                labelText={"Descrição"}
                                placeholderTextArea={"Digitar descrição"}
                                register={register}
                                errors={errors}
                                name="description"
                            />
                        </Flex>
                        <Flex flexDir={"column"} gap={5}>
                            <Text fontSize={14} fontWeight={500}>
                                Informações de Endereço
                            </Text>
                            <InputFormComponent
                                mask={"99999.999"}
                                labelText={"CEP"}
                                placeholder={"00000.000"}
                                register={register}
                                errors={errors}
                                name="cep"
                            />
                            <Flex gap={3}>
                                <Flex flexDir={"column"} gap={2}>
                                    <InputFormComponent
                                        labelText={"Estado"}
                                        placeholder={"Digitar Estado"}
                                        register={register}
                                        errors={errors}
                                        name="state"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} gap={2}>
                                    <InputFormComponent
                                        labelText={"Cidade"}
                                        placeholder={"Digitar Cidade"}
                                        register={register}
                                        errors={errors}
                                        name="city"
                                    />
                                </Flex>
                            </Flex>
                            <InputFormComponent
                                labelText={"Rua"}
                                placeholder={"Digitar Rua"}
                                register={register}
                                errors={errors}
                                name="street"
                            />
                            <Flex gap={3}>
                                <Flex flexDir={"column"} gap={2}>
                                    <InputFormComponent
                                        labelText={"Número"}
                                        type="number"
                                        placeholder={"Digitar Numero"}
                                        register={register}
                                        errors={errors}
                                        name="house_number"
                                    />
                                </Flex>
                                <Flex flexDir={"column"} gap={2}>
                                    <InputFormComponent
                                        labelText={"Complemento"}
                                        placeholder={"Ex: apart 307"}
                                        register={register}
                                        errors={errors}
                                        name="complement"
                                    />
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex flexDir={"column"} gap={5}>
                            <Text fontSize={14} fontWeight={500}>
                                Tipos de conta
                            </Text>
                            <FormControl isRequired isInvalid={isError}>
                                <Flex gap={3}>
                                    <ButtonBrand1
                                        w={"full"}
                                        isDisabled={optionIsBuyer}
                                        onClick={() => setBuyerOption()}
                                    >
                                        Comprador
                                    </ButtonBrand1>
                                    <ButtonGray10
                                        w={"full"}
                                        isDisabled={optionIsAdvertiser}
                                        onClick={() => setAdvertiserOption()}
                                    >
                                        Anunciante
                                    </ButtonGray10>
                                </Flex>
                                {!!isError && (
                                    <ErrorComponent
                                        text={"Escolha uma opção."}
                                    />
                                )}
                            </FormControl>
                            <InputFormComponent
                                labelText={"Senha"}
                                placeholder={"Digitar senha"}
                                register={register}
                                errors={errors}
                                name="password"
                            />
                            <InputFormComponent
                                labelText={"Confirmar senha"}
                                placeholder={"Digitar senha"}
                                register={register}
                                errors={errors}
                                name="confirm_password"
                            />
                        </Flex>
                        <ButtonBrand1 type="submit">
                            Finalizar Cadastro
                        </ButtonBrand1>
                    </form>
                </Flex>
            </Flex>
        </>
    );
};
