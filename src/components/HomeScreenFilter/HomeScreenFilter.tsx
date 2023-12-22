import styled from "styled-components/native";

export default function HomeScreenFilter(props: any) {
  const { onFilterText } = props;

  return (
    <FilterInput 
      placeholder="Filter by category" 
      onChangeText={onFilterText}
    />
  )
}

const FilterInput = styled.TextInput`
  background-color: lightgray;
  border: 1px solid green;
  padding: 10px;
  margin-top: 10px;
  height: 40px;
`

