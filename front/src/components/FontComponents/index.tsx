import { Text } from "@chakra-ui/react";
import { FontSizes } from "../../styles/fontSizes";

interface IText {
  children: React.ReactNode;
  weigth: "400" | "500" | "600" | "700";
}

export const TextH1 = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.heading1} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextH62 = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.heading2} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextH3 = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.heading3} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextH4 = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.heading4} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextH5 = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.heading5} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextH6 = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.heading6} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextH7 = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.heading7} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextB1 = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.body2} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextB2 = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.body2} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextBBT = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.buttonBigText} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextBMT = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.buttonMediumText} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextIPH = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.inputPlaceholder} fontWeight={weigth}>
      {children}
    </Text>
  );
};

export const TextIL = ({ children, weigth }: IText) => {
  return (
    <Text fontSize={FontSizes.inputLabel} fontWeight={weigth}>
      {children}
    </Text>
  );
};
