import styled from "styled-components/native";
import debounce from 'lodash.debounce';
import { COLORS } from "../../utils/constants";

export default function HomeScreenFilter(props: any) {
  const { onFilterText } = props;

  return (
    <FilterInput 
      placeholder="Filter by category" 
      onChangeText={debounce(onFilterText, 1000)}
      autoCapitalize="none"
    />
  )
}

const FilterInput = styled.TextInput`
  background-color: ${COLORS.grayLight};
  border: 1px solid ${COLORS.greenLight};
  padding: 10px;
  margin-top: 10px;
  height: 40px;
`

