import { Box, Heading, Flex, Input } from "@chakra-ui/react";
import { Colors } from "../../styles/colors";

interface FilterProps {
  titleFilter: string;
}

export const FilterWithInputComponent = ({ titleFilter }: FilterProps) => {
  return (
    <Box>
      <Heading fontSize="28px" fontWeight="600" marginStart="30px">
        {titleFilter}
      </Heading>
      <Flex
        w="100%"
        paddingStart="34px"
        justifyContent="space-between"
        gap="10px"
        marginTop="18px"
      >
        <Input
          maxW="142px"
          bg={Colors.grey5}
          placeholder="Mínimo"
          borderRadius="0"
        ></Input>
        <Input
          maxW="142px"
          bg={Colors.grey5}
          placeholder="Máximo"
          borderRadius="0"
        ></Input>
      </Flex>
    </Box>
  );
};
