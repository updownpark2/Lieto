import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }

  100%{
    opacity: 1;
    transform: translateY(0%);
  }
`;
const Fake = styled.div`
  background-color: #f7e1e2;
  height: 70vh;
  z-index: -1;
`;
const Container = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  animation: ${(props) => (props.inView ? frameInAnimation : null)} 2s forwards;
`;

const IntroDate = styled.span`
  font-size: 32px;
  font-weight: 320;
  margin-bottom: 10px;
`;

const IntroTimeBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const IntroTime = styled.span`
  font-size: 23px;
  font-weight: 320;
`;
const IntroTextBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const IntroText = styled.span`
  font-size: 18px;
  margin-left: 20px;
  font-weight: 300;
  margin-bottom: 4px;
  opacity: 0.8;
  border-bottom: 2px dotted white;
`;

export default function Introduction() {
  const { ref, inView, entry } = useInView({ threshold: 0.1 });
  return (
    <Fake>
      <Container ref={ref} inView={inView}>
        <IntroDate>2024.03.02 &#40; SAT &#41;</IntroDate>
        <IntroTimeBox>
          <IntroTime>3PM/1부</IntroTime>
          <IntroTime>7PM/2부</IntroTime>
        </IntroTimeBox>
        <IntroTextBox>
          <IntroText>Lieto는 이탈리아어로</IntroText>
          <IntroText>기쁜, 즐거운, 행복한을 뜻하는 단어입니다.</IntroText>
          <IntroText>새로운 시작을 의미하는 3월에</IntroText>
          <IntroText>포핸즈 앙상블 음악을 감상하며</IntroText>
          <IntroText>행복한 기억을 남겼으면 합니다</IntroText>
          <IntroText>24인의 광주/전남 출신 피아니스트들이</IntroText>
          <IntroText>짝을 이루어 one piano four hands로 </IntroText>
          <IntroText>
            다양한 작곡가들의 four hands의 곡들을 연주합니다.
          </IntroText>
          <IntroText>많은 관심 부탁드립니다 : &#41;</IntroText>
        </IntroTextBox>
        <hr style={{ color: "#999999", borderStyle: "dotted" }} />
      </Container>
    </Fake>
  );
}
