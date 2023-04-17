import { Box, BoxProps } from "@chakra-ui/react";

export const GlobalStyle = ({ ...rest }: BoxProps) => {
  return <Box fontFamily={"Inter"}>{rest.children}</Box>;
};
