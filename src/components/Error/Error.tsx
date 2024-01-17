import styled from "styled-components/native";
import { COLORS } from "../../utils/constants";

interface Props {
  errorName?: string;
  errorMsg?: string;
}
export default function Error({errorName, errorMsg}: Props) {

  return (
    <ErrorContainer>
      <ErrorText>Something went wrong, please try again later!</ErrorText>
      {(errorName || errorMsg) && <ErrorText>{errorName ?? null}  {errorMsg ?? null}</ErrorText>}
    </ErrorContainer>
  )
};

const ErrorContainer = styled.View`
  flex: 1;
  lex-direction: column;
  justifyContent: center;
  padding: 10px;
`;

const ErrorText = styled.Text`
  color: ${COLORS.redPrimary};
  font-size: 14px;
  text-align: center;
  padding: 5px 0;
`; 