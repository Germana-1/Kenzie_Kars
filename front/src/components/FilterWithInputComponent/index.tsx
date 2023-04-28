import { Box, Heading, Flex, Input } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { useState } from "react";
import { stringFormater } from "../../utils/stringFormater";

interface FilterProps {
  titleFilter: string;
}

export const FilterWithInputComponent = ({ titleFilter }: FilterProps) => {
  const [priceMax, setPriceMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [formatType, setFormatType] = useState(titleFilter === "Preço");

  return (
    <Box>
      <Heading fontSize="28px" fontWeight="600">
        {titleFilter}
      </Heading>

      <Flex gap="20px" marginTop="18px">
        <Input
          maxW="142px"
          p={"0 5px"}
          fontSize={"14px"}
          fontWeight={800}
          bg={Colors.grey4}
          borderRadius="0"
          placeholder="Mínimo"
          _placeholder={{
            color: Colors.grey2,
          }}
          value={priceMin}
          onDoubleClick={() => setPriceMin("")}
          onChange={(e) => setPriceMin(e.target.value.replace(/[^\d]/g, ""))}
          onBlur={(e) =>
            stringFormater(e.target.value, formatType, setPriceMin)
          }
        />

        <Input
          maxW="142px"
          p={"0 5px"}
          fontSize={"14px"}
          fontWeight={800}
          bg={Colors.grey4}
          borderRadius="0"
          placeholder="Máximo"
          _placeholder={{
            color: Colors.grey2,
          }}
          value={priceMax}
          onDoubleClick={() => setPriceMax("")}
          onChange={(e) => setPriceMax(e.target.value.replace(/[^\d]/g, ""))}
          onBlur={(e) =>
            stringFormater(e.target.value, formatType, setPriceMax)
          }
        />
      </Flex>
    </Box>
  );
};
