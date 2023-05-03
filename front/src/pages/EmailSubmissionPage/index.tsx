import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ButtonGray10OutlineG4 } from "../../components/ButtomComponents";
import { HeaderComponent } from "../../components/HeaderComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { TextH1, TextH5, TextH7 } from "../../components/TextComponents";
import { ButtonBrand1 } from "../../components/ButtomComponents";
import { Colors } from "../../styles/colors";
import { UserContext } from "../../contexts/userContext";
import {
  IEmailSubmission,
  IResetPassword,
  IUserLogin,
} from "../../interfaces/user.interface";
import { TextB2 } from "../../components/TextComponents";
import { labelCSS } from "../../styles/global";
import { ViewIcon, ViewOffIcon, WarningIcon } from "@chakra-ui/icons";

export const EmailSubmissionPage = () => {
  const { emailSend } = useContext(UserContext);
  const { register, handleSubmit } = useForm<IEmailSubmission>();

  const formSubmit = async (data: IEmailSubmission) => emailSend(data);

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
          <Heading
            fontSize={"18px"}
            fontWeight={800}
            fontFamily={"Lexend"}
            color={Colors.brand1}
          >
            Insira seu E-mail e enviaremos um link para alterar sua senha
          </Heading>

          <FormControl isRequired>
            <FormLabel css={labelCSS}>Email</FormLabel>

            <Input
              focusBorderColor={Colors.brand1}
              color={Colors.brand1}
              type="text"
              borderRadius={"4px 0 0 4px"}
              {...register("email")}
            />
          </FormControl>

          <ButtonBrand1 h={"50px"} type={"submit"}>
            Enviar
          </ButtonBrand1>
        </Flex>
      </Container>

      <FooterComponent />
    </>
  );
};
