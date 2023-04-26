import { Flex, FormControl } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";

import { HeaderComponent } from "./../../components/HeaderComponent/index";
import { InputFormComponent } from "../../components/InputFormComponent/InputFormRegisterUserComponent/index";
import { ButtonBrand1, ButtonGray10 } from "../../components/ButtomComponents";
import { ErrorComponent } from "./../../components/ErrorComponent/index";
import { FooterComponent } from "./../../components/FooterComponent/index";
import { TextH5 } from "./../../components/TextComponents";
import { TextH7 } from "./../../components/TextComponents/index";
import { Colors } from "../../styles/colors";
import { UserContext } from "../../contexts/userContext";
import { registerUserSchema } from "../../schemas/register.schema";

const formStyle = {
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  gap: 45,
};

export const RegisterPage = () => {
  const { userRegister } = useContext(UserContext);
  const [isError, setIsError] = useState<boolean>(true);

  const [optionIsBuyer, setOptionIsBuyer] = useState<boolean>(false);
  const [optionIsAdvertiser, setOptionIsAdvertiser] = useState<boolean>(false);

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
    if (!optionIsBuyer && !optionIsAdvertiser) return;
    const dataUpdate = {
      ...data,
      accountType: optionIsBuyer ? "buyer" : "seller",
    };

    userRegister(dataUpdate);
  };

  return (
    <>
      <HeaderComponent />
      <Flex
        w={"full"}
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"125px 40px 0px 40px"}
      >
        <Flex
          flexDir={"column"}
          gap={30}
          p={"32px"}
          backgroundColor={Colors.white}
          borderRadius={"4px"}
          fontFamily={"Lexend"}
        >
          <TextH5 fontWeight={500}>Cadastro</TextH5>
          <form
            onSubmit={handleSubmit(registerUserForm)}
            style={{ ...formStyle, flexDirection: "column" }}
          >
            <Flex flexDir={"column"} gap={5}>
              <TextH7 fontWeight={500}>Informações Pessoais</TextH7>
              <InputFormComponent
                labelText={"Nome"}
                placeholder={"Ex: Samuel Leão"}
                name="name"
                autoComplete="off"
                register={register}
                errors={errors}
              />
              <InputFormComponent
                labelText={"Email"}
                placeholder={"Ex: samuel@kenzie.com.br"}
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
            <Flex flexDir={"column"} gap={5}>
              <TextH7 fontWeight={500}>Informações de Endereço</TextH7>
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
            <Flex flexDir={"column"} gap={5}>
              <TextH7 fontWeight={500}>Tipos de conta</TextH7>
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
                {!!isError && <ErrorComponent text={"Escolha uma opção."} />}
              </FormControl>
              <InputFormComponent
                labelText={"Senha"}
                placeholder={"Digitar senha"}
                type={"password"}
                register={register}
                errors={errors}
                name="password"
              />
              <InputFormComponent
                labelText={"Confirmar senha"}
                placeholder={"Digitar senha"}
                type={"password"}
                register={register}
                errors={errors}
                name="confirmPassword"
              />
            </Flex>
            <ButtonBrand1 type="submit">Finalizar Cadastro</ButtonBrand1>
          </form>
        </Flex>
      </Flex>
      <FooterComponent />
    </>
  );
};
