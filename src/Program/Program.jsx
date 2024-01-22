import styled from "styled-components";
import Poster from "./LietoPoster.jpeg";
import Pamplet from "./LietoPam1.jpeg";
import Pamplet2 from "./LietoPam2.jpeg";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: #f7e1e2;
  height: 100vh;
  @media (max-width: 768px) {
    height: auto;
    position: relative;
    background-color: transparent;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

export default function Program() {
  return (
    <Container>
      <PosterImage src={Poster}></PosterImage>
      <PosterImage src={Pamplet}></PosterImage>
      <PosterImage src={Pamplet2}></PosterImage>
    </Container>
  );
}
