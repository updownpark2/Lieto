import styled, { keyframes } from "styled-components";
import gif from "./Lieto.gif";
const blink = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100%{
    opacity: 1;
    transform: translateY(0%);
  }
`;
export default function Title() {
  const moveToNaverBookPage = () => {
    window.open(`https://form.naver.com/response/9THVfo9OMccOdPWVvpLEdw`);
  };

  // css

  const Container = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f7e1e2;
    @media (max-width: 768px) {
      position: relative;
      background-color: transparent;
    }
  `;
  const VideoContainer = styled.div`
    height: 100%;
    width: 35%;
    @media (max-width: 1100px) {
      width: 50%;
    }
    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      z-index: -1;
      opacity: 1;
    }
  `;
  const Gif = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
  `;
  const IntroduceContainer = styled.div`
    width: 50%;
    text-align: center;
    margin-left: 30px;
    color: #ffb6c1;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      margin: 0;
    }
  `;
  const Title = styled.h1`
    font-weight: 300;
    font-size: 40px;
    color: #f9a6b2;
    @media (max-width: 768px) {
      color: #ffb6c1;
    }
  `;
  const Summary = styled.p`
    color: #fbb1bc;
    font-weight: 300;
    font-size: 23px;
    @media (max-width: 768px) {
      color: #ffb6c1;
    }
  `;

  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    @media (max-width: 768px) {
      width: 100%;
      align-items: center;
    }
  `;
  const Button = styled.div`
    background-color: #5f5f5f;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 20px;
  `;
  const DownSpan = styled.span`
    display: block;
    position: absolute;
    font-size: 20px;
    font-weight: 340;
    bottom: 10px;
    left: 10px;
    animation: ${blink} 1.9s ease-in-out infinite;
  `;
  return (
    <Container>
      <IntroduceContainer>
        <Title>Lieto Piano Concert</Title>
        <Summary>A one-of-a-kind experience</Summary>
        <Summary>In Gwang-Ju DM-hall</Summary>
        <ButtonContainer>
          <Button onClick={moveToNaverBookPage}>Get Tickets For Free</Button>
        </ButtonContainer>
        <DownSpan>Slide down</DownSpan>
      </IntroduceContainer>
      <VideoContainer>
        <Gif src={gif} loop="infinite"></Gif>
      </VideoContainer>
    </Container>
  );
}
