import {
    Button,
    Flex,
    Input,
    FormLabelProps,
    Container,
    Text,
} from "@chakra-ui/react";
import { HeaderComponent } from "./../../components/HeaderComponent/index";
import { InputFormComponent } from "./../../components/InputFormComponent/index";
import { ButtonBrand1, ButtonGray10 } from "../../components/ButtomComponents";

const formStyle = {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    gap: 45,
};

export const RegisterPage = () => {
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
                    <form style={{ ...formStyle, flexDirection: "column" }}>
                        <Flex flexDir={"column"} gap={5}>
                            <Text fontSize={14} fontWeight={500}>
                                Informações Pessoais
                            </Text>
                            <InputFormComponent
                                labelText={"Nome"}
                                placeholder={"Ex: Samuel Leão"}
                            />
                            <InputFormComponent
                                labelText={"Email"}
                                placeholder={"Ex: samuel@kenzie.com.br"}
                            />
                            <InputFormComponent
                                mask={"999.999.999-99"}
                                labelText={"CPF"}
                                placeholder={"000.000.000-00"}
                            />
                            <InputFormComponent
                                mask={"(99) 99999-9999"}
                                labelText={"Celular"}
                                placeholder={"(DDD) 90000-0000"}
                            />
                            <InputFormComponent
                                mask={"99/99/9999"}
                                labelText={"Data de Nascimento"}
                                placeholder={"00/00/0000"}
                            />
                            <InputFormComponent
                                hasTextArea={true}
                                labelText={"Descrição"}
                                placeholderTextArea={"Digitar descrição"}
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
                            />
                            <Flex gap={3}>
                                <InputFormComponent
                                    labelText={"Estado"}
                                    placeholder={"Digitar Estado"}
                                />
                                <InputFormComponent
                                    labelText={"Cidade"}
                                    placeholder={"Digitar Cidade"}
                                />
                            </Flex>
                            <InputFormComponent
                                labelText={"Rua"}
                                placeholder={"Digitar Rua"}
                            />
                            <Flex gap={3}>
                                <InputFormComponent
                                    labelText={"Número"}
                                    type="number"
                                    placeholder={"Digitar Numero"}
                                />
                                <InputFormComponent
                                    labelText={"Complemento"}
                                    placeholder={"Ex: apart 307"}
                                />
                            </Flex>
                        </Flex>
                        <Flex flexDir={"column"} gap={5}>
                            <Text fontSize={14} fontWeight={500}>
                                Tipos de conta
                            </Text>
                            <Flex gap={3}>
                                <ButtonBrand1 w={"full"}>
                                    Comprador
                                </ButtonBrand1>
                                <ButtonGray10 w={"full"}>
                                    Anunciante
                                </ButtonGray10>
                            </Flex>
                            <InputFormComponent
                                labelText={"Senha"}
                                placeholder={"Digitar senha"}
                            />
                            <InputFormComponent
                                labelText={"Confirmar senha"}
                                placeholder={"Digitar senha"}
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
