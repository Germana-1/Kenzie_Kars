import { Box, Heading, Flex, Input } from "@chakra-ui/react";
import { Colors } from "../../styles/colors";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setMinValue(min);
    setMaxValue(max);
  }, [min, max]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(event.target.value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(event.target.value);
  };

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMin(e.target.value);
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(e.target.value);
  };
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
          type="number"
          onBlur={handleMin}
          onChange={handleMinChange}
          value={minValue}
        />

        <Input
          maxW="142px"
          bg={Colors.grey5}
          placeholder="Máximo"
          borderRadius="0"
          type="number"
          onBlur={handleMax}
          onChange={handleMaxChange}
          value={maxValue}
        />
      </Flex>
    </Box>
  );
};
