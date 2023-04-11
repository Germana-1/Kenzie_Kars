import { Button, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

import { Colors } from "../../styles";
import logo from "../../assets/logoWhite.svg";
import { ChevronUpIcon } from "@chakra-ui/icons";

export const FooterComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Flex
      as="footer"
      justifyContent="space-between"
      alignItems="center"
      bg={Colors.grey0}
      marginTop="46px"
      padding={isMobile ? "0" : "56px"}
      paddingTop="45px"
      paddingBottom="45px"
      flexDirection={isMobile ? "column" : "row"}
      gap="60px"
    >
      <Image src={logo} />
      <Text color={Colors.white} fontSize="14px" fontWeight="400">
        © 2023 - Todos os direitos reservados.
      </Text>

      <Button
        bg={Colors.grey1}
        color={Colors.white}
        onClick={handleScrollToTop}
      >
        <ChevronUpIcon />
      </Button>
    </Flex>
  );
};
