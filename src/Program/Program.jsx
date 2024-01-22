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
  height: auto;
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
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
`;
const PampletImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;

export default function Program() {
  return (
    <Container>
      <PosterImage src={Poster}></PosterImage>
      <PampletImage src={Pamplet}></PampletImage>
      <PampletImage src={Pamplet2}></PampletImage>
    </Container>
  );
}
