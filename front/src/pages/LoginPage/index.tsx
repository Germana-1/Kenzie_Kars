import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ButtonGray10OutlineG4 } from "./../../components/ButtomComponents/";
import { InputFormComponent } from "../../components/InputFormComponent/InputFormRegisterUserComponent";
import { HeaderComponent } from "./../../components/HeaderComponent/";
import { FooterComponent } from "./../../components/FooterComponent/";
import { TextH5, TextBMT } from "./../../components/TextComponents/";
import { ButtonBrand1 } from "../../components/ButtomComponents";
import { Colors } from "../../styles/colors";
import { UserContext } from "../../contexts/userContext";
import { IUserLogin } from "../../interfaces/user.interface";
import { loginUserSchema } from "../../schemas/login.schema";

const formStyle = {
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  gap: 24,
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const { userSession } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(loginUserSchema),
  });

  const formSubmit = (data: IUserLogin) => userSession(data);

  return (
    <>
      <HeaderComponent />
      <Flex
        w={"full"}
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"100px 40px 0px 40px"}
      >
        <Flex
          flexDir={"column"}
          gap={30}
          p={"32px"}
          w={"464px"}
          borderRadius={"4px"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={Colors.white}
          fontFamily={"Lexend"}
        >
          <TextH5 fontWeight={800} alignSelf={"flex-start"}>
            Login
          </TextH5>
          <form
            onSubmit={handleSubmit(formSubmit)}
            style={{ ...formStyle, flexDirection: "column" }}
          >
            <Flex flexDir={"column"} gap={5}>
              <InputFormComponent
                labelText={"Email"}
                placeholder={"Ex: samuel@kenzie.com.br"}
                register={register}
                errors={errors}
                name="email"
                autoComplete="off"
              />
              <InputFormComponent
                labelText={"Senha"}
                placeholder={"Digitar senha"}
                type={"password"}
                register={register}
                errors={errors}
                name="password"
              />
            </Flex>
            <Flex justifyContent={"flex-end"}>
              <Link to="">Esqueci minha senha</Link>
            </Flex>
            <ButtonBrand1 h={"50px"} type="submit">
              Entrar
            </ButtonBrand1>
            <Flex justifyContent={"center"}>
              <TextBMT>Ainda não possui conta?</TextBMT>
            </Flex>
            <ButtonGray10OutlineG4
              h={"50px"}
              onClick={() => navigate("/register")}
              border={`1.5px solid ${Colors.grey4}`}
            >
              Cadastrar
            </ButtonGray10OutlineG4>
          </form>
        </Flex>
      </Flex>
      <FooterComponent />
    </>
  );
};
