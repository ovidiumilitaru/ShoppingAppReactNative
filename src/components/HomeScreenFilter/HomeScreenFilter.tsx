import styled from "styled-components/native";
import debounce from 'lodash.debounce';
import { COLORS } from "../../utils/constants";
import type { ProductsDataType } from "../../utils/types";

type PropsType = {
  onFilterText: (t: string) => void;
};

export default function HomeScreenFilter({onFilterText}: PropsType) {

  return (
    <FilterContainer>
      <FilterInput 
        placeholder="Filter by category" 
        onChangeText={debounce(onFilterText, 1000)}
        autoCapitalize="none"
      />
    </FilterContainer>
  )
}

const FilterContainer = styled.View`
  background-color: ${COLORS.white}; 
  width: 100%;
  height: 56px;
  border-bottom-color: ${COLORS.grayPrimary};
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
`;

const FilterInput = styled.TextInput`
  background-color: ${COLORS.grayLight}; 
  border: 1px solid ${COLORS.grayPrimary};
  padding: 8px;
  height: 40px;
  width: 90%;
  align-self: center;
`;
