import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { ButtonGray10OutlineG4 } from "./../../components/ButtomComponents/";
import { HeaderComponent } from "./../../components/HeaderComponent/";
import { FooterComponent } from "./../../components/FooterComponent/";
import { TextH5 } from "./../../components/TextComponents/";
import { ButtonBrand1 } from "../../components/ButtomComponents";
import { Colors } from "../../styles/colors";
import { UserContext } from "../../contexts/userContext";
import { IUserLogin } from "../../interfaces/user.interface";
import { TextB2 } from "./../../components/TextComponents/";
import { labelCSS } from "../../styles/global";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { userSession } = useContext(UserContext);
  const { register, handleSubmit } = useForm<IUserLogin>();

  const formSubmit = (data: IUserLogin) => userSession(data);

  return (
    <>
      <HeaderComponent />

      <Container maxW="1200px" pt={"130px"} minH={"85vh"}>
        <Flex
          as={"form"}
          direction={"column"}
          gap={"20px"}
          p={"32px"}
          maxW={"412px"}
          m={"0 auto"}
          borderRadius={"4px"}
          backgroundColor={Colors.white}
          onSubmit={handleSubmit(formSubmit)}
        >
          <TextH5 fontWeight={800} fontFamily={"Lexend"} color={Colors.brand1}>
            Login
          </TextH5>

          <FormControl isRequired>
            <FormLabel css={labelCSS}>Email</FormLabel>
            <Input
              focusBorderColor={Colors.brand1}
              color={Colors.brand1}
              autoComplete="off"
              {...register("email")}
            />

            <FormLabel css={labelCSS} mt={"15px"}>
              Senha
            </FormLabel>
            <Input
              focusBorderColor={Colors.brand1}
              color={Colors.brand1}
              type="password"
              {...register("password")}
            />
          </FormControl>

          <Box textAlign={"end"}>
            <TextB2 color={Colors.grey2}>
              <Link to=""> Esqueci minha senha</Link>
            </TextB2>
          </Box>

          <ButtonBrand1 h={"50px"} type={"submit"}>
            Entrar
          </ButtonBrand1>

          <Box textAlign={"center"}>
            <TextB2 color={Colors.grey2} alignSelf={"center"}>
              Ainda não possui conta?
            </TextB2>
          </Box>

          <ButtonGray10OutlineG4
            h={"50px"}
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </ButtonGray10OutlineG4>
        </Flex>
      </Container>

      <FooterComponent />
    </>
  );
};
