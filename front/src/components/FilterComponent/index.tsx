import { List, ListItem } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { FontSizes } from "../../styles/fontSizes";

interface FilterProps {
  titleFilter: string;
  filters: string[];
}

export const FilterComponent = ({ titleFilter, filters }: FilterProps) => {
  return (
    <List>
      <ListItem fontSize="28px" fontWeight="600" marginStart="30px">
        {titleFilter}
      </ListItem>
      
      {filters.map((filter) => (
        <ListItem
          key={filter}
          cursor="pointer"
          fontSize={FontSizes.heading6}
          fontWeight="500"
          color={Colors.grey3}
          marginStart="40px"
        >
          {filter}
        </ListItem>
      ))}
    </List>
  );
};
