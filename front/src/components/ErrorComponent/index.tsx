import { Flex, Text } from "@chakra-ui/react";

interface IError {
    text: any;
}

export const ErrorComponent = ({ text }: IError) => {
    return (
        <Flex justifyContent={"flex-start"} alignItems={"center"} py={2}>
            <Text fontWeight={500}>* {text}</Text>
        </Flex>
    );
};
