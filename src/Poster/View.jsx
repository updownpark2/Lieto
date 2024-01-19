import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
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

const Container = styled.div`
  background-color: #f7e1e2;
`;

const Title = styled.h2`
  font-weight: 360;
  margin-left: 20px;
  font-size: 32px;
`;
const ArtistContainer = styled.div`
  width: 70%;
  margin-left: 20px;
  border-radius: 20px;
  padding: 20px;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  animation: ${(props) => (props.inView ? frameInAnimation : null)} 2s forwards;
`;
const List = styled.li`
  list-style: none;
`;

export default function PosterView({ artist, time }) {
  const { ref, inView, entry } = useInView({ threshold: 0.1 });
  return (
    <Container ref={ref}>
      <Title>program {time}</Title>

      {artist.map((artistArr) => (
        <ArtistContainer inView={inView}>
          <h3>{"1st" + artistArr[0][0] + "  2nd" + artistArr[0][1]}</h3>
          <ul>
            {artistArr[1].map((music) => (
              <List>{music}</List>
            ))}
          </ul>
          <br />
        </ArtistContainer>
      ))}
    </Container>
  );
}
