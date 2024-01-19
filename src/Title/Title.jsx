import styled from "styled-components";
import video from "../Title/Lieto2.mp4";

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
    background-color: #ffe4e1;
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
  const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 20px;
    @media (max-width: 768px) {
      border-radius: 0;
    }
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
  const UnderLineTextContainer = styled.div`
    margin-top: 140px;
  `;

  const UnderLineText = styled.p`
    width: 200px;
    font-weight: 400;
    font-size: 20px;
    border-bottom: 1px solid white;
    margin-top: 10px;
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
        <Summary>In Gwang-Ju Art-hall</Summary>
        <ButtonContainer>
          <Button onClick={moveToNaverBookPage}>Get Tickets For Free</Button>
        </ButtonContainer>
      </IntroduceContainer>
      <VideoContainer>
        <Video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </Video>
      </VideoContainer>
    </Container>
  );
}
