import {
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Colors } from "../../styles/colors";
import logo from "../../assets/logo.svg";

export const HeaderComponent = () => {
  return (
    <>
      <Flex
        as={"header"}
        bg={Colors.grey10}
        p={4}
        h="80px"
        w="100%"
        alignItems="center"
        borderBottom="2px"
        borderBottomColor={Colors.grey6}
        position="fixed"
        zIndex="10000"
      >
        <Box flex="1" mr={5}>
          <img src={logo} alt="logo" />
        </Box>
        <>
          <Show above="768px">
            <ButtonGroup>
              <Button
                color={Colors.grey2}
                variant="ghost"
                _focus={{ color: Colors.brand1, bg: "transparent" }}
              >
                Fazer Login
              </Button>
              <Button
                color={Colors.grey0}
                variant="outline"
                borderRadius="4px"
                borderColor={Colors.grey4}
                _focus={{ bg: "transparent" }}
              >
                Cadastrar
              </Button>
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
                <MenuItem>Fazer Login</MenuItem>
                <MenuItem>Cadastrar</MenuItem>
              </MenuList>
            </Menu>
          </Show>
        </>
      </Flex>
    </>
  );
};
