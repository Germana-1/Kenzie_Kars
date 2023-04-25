import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Colors } from "../../styles/colors";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const HeaderComponent = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <>
      <Flex
        as={"header"}
        bg={Colors.grey10}
        p={"4px 50px"}
        h="80px"
        w="100%"
        alignItems="center"
        borderBottom="2px"
        borderBottomColor={Colors.grey6}
        position="fixed"
        zIndex="10000"
      >
        <Box flex="1" mr={5}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </Box>

        {user ? (
          <Menu>
            <MenuButton>
              <Flex gap="10px" alignItems="center">
                <Avatar src={user.avatar} w="32px" h="32px" />
                <Text fontSize="14px" fontWeight="500" color={Colors.grey2}>
                  {user.name}
                </Text>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>Meu perfil</MenuItem>
              <MenuItem>Alterar perfil</MenuItem>
              <MenuItem>Alterar endereço</MenuItem>
              <MenuItem>Excluir conta</MenuItem>
              <MenuItem onClick={() => logout()}>Sair</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Show above="768px">
              <ButtonGroup>
                <Link to={"/login"}>
                  <Button
                    color={Colors.grey2}
                    variant="ghost"
                    _focus={{ color: Colors.brand1, bg: "transparent" }}
                  >
                    Fazer Login
                  </Button>
                </Link>

                <Link to={"/register"}>
                  <Button
                    color={Colors.grey0}
                    variant="outline"
                    borderRadius="4px"
                    borderColor={Colors.grey4}
                    _focus={{ bg: "transparent" }}
                  >
                    Cadastrar
                  </Button>
                </Link>
              </ButtonGroup>
            </Show>

            <Show below="768px">
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon h="60px" w="25px" />}
                  bg={Colors.grey10}
                />

                <MenuList>
                  <Link to={"/login"}>
                    <MenuItem>Fazer Login</MenuItem>
                  </Link>
                  <Link to={"/register"}>
                    <MenuItem>Cadastrar</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Show>
          </>
        )}
      </Flex>
    </>
  );
};
