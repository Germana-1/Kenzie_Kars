import { Box, Heading, Flex, Input } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { useEffect, useState } from "react";
import { stringFormater } from "../../utils/stringFormater";

interface FilterProps {
  titleFilter: string;
  min: string;
  max: string;
  setMin: React.Dispatch<React.SetStateAction<string>>;
  setMax: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterWithInputComponent = ({
  titleFilter,
  min,
  max,
  setMin,
  setMax,
}: FilterProps) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [fakeMaxValue, setFakeMaxValue] = useState("");
  const [fakeMinValue, setFakeMinValue] = useState("");
  const [formatType, setFormatType] = useState(titleFilter === "Preço");

  useEffect(() => {
    setMinValue(min);
    setMaxValue(max);
  }, [min, max]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFakeMinValue(event.target.value.replace(/[^\d]/g, ""));
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFakeMaxValue(event.target.value.replace(/[^\d]/g, ""));
  };

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    stringFormater(e.target.value, formatType, setFakeMinValue);
    setMin(e.target.value);
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    stringFormater(e.target.value, formatType, setFakeMaxValue);
    setMax(e.target.value);
  };

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
          type="text"
          onBlur={handleMin}
          onChange={handleMinChange}
          onDoubleClick={() => setFakeMinValue("")}
          value={fakeMinValue}
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
          type="text"
          onBlur={handleMax}
          onChange={handleMaxChange}
          onDoubleClick={() => setFakeMaxValue("")}
          value={fakeMaxValue}
        />
      </Flex>
    </Box>
  );
};
