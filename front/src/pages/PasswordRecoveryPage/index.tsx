import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ButtonGray10OutlineG4 } from "../../components/ButtomComponents";
import { HeaderComponent } from "../../components/HeaderComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { TextH5, TextH7 } from "../../components/TextComponents";
import { ButtonBrand1 } from "../../components/ButtomComponents";
import { Colors } from "../../styles/colors";
import { UserContext } from "../../contexts/userContext";
import { IResetPassword, IUserLogin } from "../../interfaces/user.interface";
import { TextB2 } from "../../components/TextComponents";
import { labelCSS } from "../../styles/global";
import { ViewIcon, ViewOffIcon, WarningIcon } from "@chakra-ui/icons";

export const PasswordRecoveryPage = () => {
  const { userResetPassword } = useContext(UserContext);
  const { register, handleSubmit } = useForm<IResetPassword>();
  const [showPassword, setShowPassword] = useState(true);
  const { resetToken } = useParams();

  const formSubmit = async (data: IResetPassword) =>
    userResetPassword(data, resetToken!);

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
            Alterar senha de login
          </TextH5>

          <FormControl isRequired>
            <FormLabel css={labelCSS}>Nova senha</FormLabel>
            <Flex>
              <Input
                focusBorderColor={Colors.brand1}
                color={Colors.brand1}
                type={showPassword ? "password" : "text"}
                borderRadius={"4px 0 0 4px"}
                {...register("password")}
              />

              <IconButton
                aria-label="Toggle password visibility"
                borderRadius={"0 4px 4px 0"}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={() => setShowPassword(!showPassword)}
              />
            </Flex>

            <FormLabel css={labelCSS} mt={"15px"}>
              Confirmar nova senha
            </FormLabel>
            <Flex>
              <Input
                focusBorderColor={Colors.brand1}
                color={Colors.brand1}
                type={showPassword ? "password" : "text"}
                borderRadius={"4px 0 0 4px"}
                {...register("confirmPassword")}
              />

              <IconButton
                aria-label="Toggle password visibility"
                borderRadius={"0 4px 4px 0"}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={() => setShowPassword(!showPassword)}
              />
            </Flex>
          </FormControl>

          <ButtonBrand1 h={"50px"} type={"submit"}>
            Atualizar senha
          </ButtonBrand1>
        </Flex>
      </Container>

      <FooterComponent />
    </>
  );
};
