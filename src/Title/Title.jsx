import styled from "styled-components";
import gif from "./Lieto.gif";

export default function Title() {
  const moveToNaverBookPage = () => {
    window.open(`https://form.naver.com/response/9THVfo9OMccOdPWVvpLEdw`);
  };

  // css

  const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    @media (max-width: 768px) {
      position: relative;
      background-color: transparent;
    }
  `;
  const VideoContainer = styled.div`
    height: 100%;
    width: 50%;
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
    text-align: left;
    margin-left: 30px;
    color: #ffb6c1;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      margin: 0;
    }
  `;
  const Title = styled.h1`
    font-weight: 600;
    font-size: 40px;
  `;
  const Summary = styled.p`
    font-weight: 400;
    font-size: 23px;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  return (
    <Container>
      <IntroduceContainer>
        <Title>Lieto Piano Concert</Title>
        <Summary>A one-of-a-kind experience</Summary>
        <Summary>In Gwang-Ju DM-hall</Summary>
        <ButtonContainer>
          <Button onClick={moveToNaverBookPage}>Get Tickets For Free</Button>
        </ButtonContainer>
      </IntroduceContainer>
      <VideoContainer>
        <Gif src={gif} loop="infinite"></Gif>
      </VideoContainer>
    </Container>
  );
}
