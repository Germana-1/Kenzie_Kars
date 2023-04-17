import { Button, ButtonProps } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";

export const ButtonGray0 = ({ children, size }: ButtonProps) => {
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

export const ButtonGray6 = ({ children, size }: ButtonProps) => {
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

export const ButtonGray5 = ({ children, size }: ButtonProps) => {
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

export const ButtonBrand1 = ({
  children,
  size,
  width,
  isDisabled,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      size={size}
      width={width}
      isDisabled={isDisabled}
      fontWeight={"600"}
      backgroundColor={isDisabled ? Colors.brand3 : Colors.brand1}
      color={Colors.white}
      _hover={{
        backgroundColor: isDisabled ? Colors.brand3 : Colors.brand2,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const ButtonBrand4 = ({ children, size, cursor }: ButtonProps) => {
  return (
    <Button
      size={size}
      fontWeight={"600"}
      backgroundColor={Colors.brand4}
      color={Colors.brand1}
      cursor={cursor}
      _hover={{
        backgroundColor: Colors.brand4,
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonGray10 = ({ children, size }: ButtonProps) => {
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

export const ButtonGray10OutlineG4 = ({ children, size }: ButtonProps) => {
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

export const ButtonBrand1OutlineBrand1 = ({ ...rest }: ButtonProps) => {
  return (
    <Button
      fontWeight={"600"}
      backgroundColor={Colors.grey10}
      color={Colors.brand1}
      border={`1.5px solid ${Colors.brand1}`}
      _hover={{
        backgroundColor: Colors.brand4,
      }}
      {...rest}
    >
      {rest.children}
    </Button>
  );
};

export const ButtonTransparent = ({ children, size }: ButtonProps) => {
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

export const ButtonAlert3 = ({ children, size }: ButtonProps) => {
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

export const ButtonSuccess3 = ({ children, size }: ButtonProps) => {
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

export const ButtonBrand3Disable = ({ children, size }: ButtonProps) => {
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
