import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
        <Mention>데이터 불러오는중</Mention>
        <Mention>잠시만 기다려주세요</Mention>
      </MentionBox>
    </Container>
  );
};
