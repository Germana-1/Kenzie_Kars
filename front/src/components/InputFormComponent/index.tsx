import {
    Flex,
    FormLabel,
    Input,
    InputProps,
    Textarea,
    TextareaProps,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { Colors } from "../../styles/colors";

interface IInputFormComponent extends InputProps {
    mask?: string;
    labelText: string;
    hasTextArea?: boolean;
    placeholderTextArea?: string;
}

export const InputFormComponent = ({
    labelText,
    mask,
    hasTextArea,
    placeholderTextArea,
    ...rest
}: IInputFormComponent) => {
    return (
        <Flex flexDir={"column"} gap={1}>
            <FormLabel fontSize={14} fontWeight={500}>
                {labelText}
            </FormLabel>
            {!hasTextArea ? (
                <Input
                    as={InputMask}
                    mask={mask}
                    fontSize={"16px"}
                    fontWeight={400}
                    border={`1.5px solid ${Colors.grey7}`}
                    borderRadius={4}
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
                />
            )}
        </Flex>
    );
};
