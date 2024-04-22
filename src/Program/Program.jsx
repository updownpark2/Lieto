import styled from "styled-components";
import LietoPoster from "./img/LietoPoster.jpeg";
import LietoPam1 from "./img/LietoPam1.jpeg";
import LietoPam2 from "./img/LietoPam2.jpeg";

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
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
`;
const PampletImage = styled.img`
  height: auto;
  position: relative;
  background-color: transparent;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  width: 70%;
  height: 70%;
  object-fit: contain;
`;

export default function Program() {
  return (
    <Container>
      <PosterImage src={LietoPoster}></PosterImage>
      <PampletImage src={LietoPam1}></PampletImage>
      <PampletImage src={LietoPam2}></PampletImage>
    </Container>
  );
}
