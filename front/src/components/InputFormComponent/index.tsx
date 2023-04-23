import { Flex, FormLabel, Input, InputProps, Textarea } from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { Colors } from "../../styles/colors";
import { ErrorComponent } from "./../ErrorComponent/index";
import { FieldValues, FieldErrors } from "react-hook-form";

interface IInputFormComponent extends InputProps {
  mask?: string;
  labelText: string;
  hasTextArea?: boolean;
  placeholderTextArea?: string;
  register: any;
  name: string;
  errors: FieldErrors<FieldValues>;
}

export const InputFormComponent = ({
  labelText,
  mask,
  hasTextArea,
  placeholderTextArea,
  register,
  name,
  errors,
  ...rest
}: IInputFormComponent) => {
  return (
    <Flex flexDir={"column"} gap={1}>
      <FormLabel fontSize={14} fontWeight={500}>
        {labelText}
      </FormLabel>
      
      {mask ? (
        <Input
          as={InputMask}
          mask={mask}
          fontSize={"16px"}
          fontWeight={400}
          border={`1.5px solid ${Colors.grey7}`}
          borderRadius={4}
          _focus={{
            borderColor: Colors.brand1,
          }}
          {...register(name)}
          {...rest}
        />
      ) : !hasTextArea ? (
        <Input
          fontSize={"16px"}
          fontWeight={400}
          border={`1.5px solid ${Colors.grey7}`}
          borderRadius={4}
          _focus={{
            borderColor: Colors.brand1,
          }}
          {...register(name)}
          {...rest}
        />
      ) : (
        <Textarea
          fontSize={"16px"}
          fontWeight={400}
          border={`1.5px solid ${Colors.grey7}`}
          borderRadius={4}
          resize={"none"}
          placeholder={placeholderTextArea}
          _focus={{
            borderColor: Colors.brand1,
          }}
          {...register(name)}
        />
      )}
      {errors[name] && <ErrorComponent text={errors[name]?.message} />}
    </Flex>
  );
};
