import { Button } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";

interface IButton {
  children: React.ReactNode;
  size?: string;
}

export const ButtonGray0 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.grey0}
      color={Colors.white}
      _hover={{
        backgroundColor: Colors.grey1,
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonGray6 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.grey6}
      color={Colors.grey2}
      _hover={{
        color: Colors.white,
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonGray5 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.grey5}
      color={Colors.grey2}
    >
      {children}
    </Button>
  );
};

export const ButtonBrand1 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.brand1}
      color={Colors.white}
      _hover={{
        backgroundColor: Colors.brand2,
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonBrand4 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.brand4}
      color={Colors.brand1}
    >
      {children}
    </Button>
  );
};

export const ButtonGray10 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.grey10}
      color={Colors.grey0}
      _hover={{
        backgroundColor: Colors.white,
        color: Colors.white,
        outline: `1.5px solid ${Colors.grey0}`,
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonGray10OutlineG4 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.white}
      color={Colors.grey0}
      outline={Colors.grey4}
      _hover={{
        backgroundColor: Colors.grey0,
        color: Colors.white,
        outline: `1.5px solid ${Colors.grey0}`,
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonBrand1OutlineBrand1 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.grey10}
      color={Colors.brand1}
      outline={Colors.brand1}
      _hover={{
        backgroundColor: Colors.brand4,
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonTransparent = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor="transparent"
      color={Colors.grey0}
      _hover={{
        backgroundColor: Colors.grey8,
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonAlert3 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.alert3}
      color={Colors.alert1}
    >
      {children}
    </Button>
  );
};

export const ButtonSuccess3 = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.success3}
      color={Colors.success1}
    >
      {children}
    </Button>
  );
};

export const ButtonBrand3Disable = ({ children, size }: IButton) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.brand3}
      color={Colors.brand4}
    >
      {children}
    </Button>
  );
};
