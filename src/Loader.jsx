import styled from "styled-components";
import Spinner from "./spinner.gif";
const Container = styled.div`
  width: 100vh;
  height: 100ch;
  background-color: #ffe4e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MentionBox = styled.div``;
const Mention = styled.h2`
  text-align: center;
`;

export const Loader = () => {
  return (
    <Container>
      <MentionBox>
        <Mention>잠시만 기다려주세요</Mention>
        <img src={Spinner} alt="로딩" width="10%"></img>
      </MentionBox>
    </Container>
  );
};
