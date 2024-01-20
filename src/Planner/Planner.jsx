import styled, { keyframes } from "styled-components";
import choi from "../Artist/img/4.jpeg";

const blink = keyframes`
  0% {
    opacity: 0;
  }

  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Container = styled.div`
  background-color: white;
  height: 80vh;
  @media (max-width: 768px) {
    height: 40vh;
  }
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ImgBox = styled.div`
  border-radius: 10px;
  border: none;
  width: fit-content;
  width: 30%;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10%;
  object-fit: cover;
`;

const SummaryBox = styled.div`
  border: 1px dotted #999999;
  padding: 5px;
  border-radius: 10px;
`;
const Summary = styled.span`
  display: block;
  font-weight: 300;
  text-align: center;
`;
const ClickMe = styled.span`
  font-size: 12px;
  animation: ${blink} 1.9s ease-in-out infinite;
`;

export default function Planner() {
  return (
    <Container>
      <ImgBox>
        <Img src={choi} />
      </ImgBox>
      <SummaryBox>
        <Summary>기획자 최혜지</Summary>
        <Summary>2024. Lieto Artist Planner</Summary>
        <Summary>2023. Remember Artist Planner</Summary>
        <Summary
          onClick={() => window.open("https://lietopianoconcert.modoo.at/")}
        >
          Lieto Concert <ClickMe>click me</ClickMe>
        </Summary>
        <Summary
          onClick={() => window.open("https://lietopianoconcert.modoo.at/")}
        >
          Remember Artist <ClickMe>click me</ClickMe>
        </Summary>
        <Summary
          onClick={() =>
            window.open(
              `https://linktr.ee/hyeji_choi?utm_source=linktree_profile_share&ltsid=8c5cf2d8-6e3d-47ca-97dc-51c6bfb80606`
            )
          }
        >
          PortPolio <ClickMe>click me</ClickMe>
        </Summary>
        <Summary
          onClick={() =>
            window.open(
              "https://www.instagram.com/hy_e.ji?igsh=eWszbDc2MXI0aDN1&utm_source=qr"
            )
          }
        >
          Insta: pf_hj_ <ClickMe>click me</ClickMe>
        </Summary>
        <Summary
          onClick={() => window.open("https://m.blog.naver.com/hyejii_-?tab=1")}
        >
          Blog <ClickMe>click me</ClickMe>
        </Summary>
      </SummaryBox>
    </Container>
  );
}
