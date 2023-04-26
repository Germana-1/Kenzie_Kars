import {
  Input,
  FormLabel,
  Textarea,
  Flex,
  Select,
  TextareaProps,
  InputProps,
  SelectProps,
} from "@chakra-ui/react";
import { FieldValues, FieldErrors, RegisterOptions } from "react-hook-form";

import { Colors } from "../../../styles/colors";

interface IInput extends InputProps {
  errors?: FieldErrors<FieldValues>;
  register: (name: string, options?: RegisterOptions) => { name: string };
  name: string;
  labelText: string;
}

interface ISelect extends SelectProps {
  disabled?: boolean;
  errors?: FieldErrors<FieldValues>;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  register: (name: string, options?: RegisterOptions) => { name: string };
  name: string;
  labelText: string;
}

interface ITextArea extends TextareaProps {
  errors?: FieldErrors<FieldValues>;
  register: (name: string, options?: RegisterOptions) => { name: string };
  name: string;
  labelText: string;
}

export const InputComponent = ({
  register,
  errors,
  name,
  labelText,
  ...rest
}: IInput) => {
  return (
    <Flex flexDir="column" gap="1px">
      <FormLabel fontSize="14px" fontWeight="500">
        {labelText}
      </FormLabel>

      <Input
        fontSize="16px"
        fontWeight="400"
        border={`1.5px solid ${Colors.grey7}`}
        borderRadius="4px"
        _focus={{
          borderColor: Colors.brand1,
        }}
        _disabled={{
          backgroundColor: Colors.grey7,
          cursor: "not-allowed",
        }}
        {...register(name)}
        {...rest}
      />
    </Flex>
  );
};

export const SelectComponent = ({
  register,
  onChange,
  errors,
  name,
  labelText,
  disabled,
  ...rest
}: ISelect) => {
  return (
    <Flex flexDir="column" gap="1px">
      <FormLabel>{labelText}</FormLabel>
      <Select
        isDisabled={disabled}
        {...register(name)}
        onChange={onChange}
        _disabled={{
          backgroundColor: Colors.grey7,
          cursor: "not-allowed",
        }}
      >
        {rest.children}
      </Select>
    </Flex>
  );
};

export const TextAreaComponent = ({
  register,
  errors,
  name,
  labelText,
  ...rest
}: ITextArea) => {
  return (
    <>
      <FormLabel>{labelText}</FormLabel>
      <Textarea
        fontSize="16px"
        fontWeight="400"
        border={`1.5px solid ${Colors.grey7}`}
        borderRadius="4px"
        resize="none"
        _focus={{
          borderColor: Colors.brand1,
        }}
        {...rest}
        {...register(name)}
      />
    </>
  );
};
