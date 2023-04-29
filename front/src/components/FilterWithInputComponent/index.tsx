import { Box, Heading, Flex, Input } from "@chakra-ui/react";
import { Colors } from "../../styles/colors";
import { stringFormater } from "../../utils/stringFormater";
import { useEffect, useState } from "react";

interface FilterProps {
  titleFilter: string;
  min: string;
  max: string;
  setMin: React.Dispatch<React.SetStateAction<string>>;
  setMax: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterWithInputComponent = ({ titleFilter }: FilterProps) => {
export const FilterWithInputComponent = ({
  titleFilter,
  min,
  max,
  setMin,
  setMax,
}: FilterProps) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [priceMax, setPriceMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [formatType, setFormatType] = useState(titleFilter === "Preço");

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

          type="number"
          onBlur={handleMin}
          onChange={handleMinChange}
          value={minValue}

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

          type="number"
          onBlur={handleMax}
          onChange={handleMaxChange}
          value={maxValue}

        />
      </Flex>
    </Box>
  );
};
