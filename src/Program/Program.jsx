import styled from "styled-components";
import Poster from "./LietoPoster.jpeg";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
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
    </Container>
  );
}
