import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    
  }

  100%{
    opacity: 1;
    
  }
`;

const Container = styled.div`
  padding-top: 100px;
  height: fit-content;
  background-color: #f7e1e2;
`;

const Title = styled.h2`
  font-weight: 330;
  margin-left: 20px;
  font-size: 32px;
`;
const ArtistContainer = styled.div`
  width: 70%;
  margin-left: 20px;
  border-radius: 20px;
  padding-top: 15px;

  opacity: ${(props) => (props.inView ? 1 : 0)};
  animation: ${(props) => (props.inView ? frameInAnimation : null)} 1.5s
    forwards;
`;
const ArtistName = styled.h3`
  font-weight: 350;
  margin-bottom: 10px;
`;

const List = styled.li`
  list-style: none;
  font-weight: 330;
  margin-bottom: 3px;
`;

export default function PosterView({ artist, time }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    initialInView: true,
  });
  return (
    <Container ref={ref}>
      <Title>program {time}</Title>

      {artist.map((artistArr, index) => (
        <ArtistContainer inView={inView}>
          <ArtistName>
            {"1st" + artistArr[0][0] + "  2nd" + artistArr[0][1]}
          </ArtistName>
          <ul>
            {artistArr[1].map((music, i) => (
              <List key={i}>{music}</List>
            ))}
          </ul>
          {index === 5 && artist.length === 7 ? null : (
            <hr style={{ color: "#999999", borderStyle: "dotted" }} />
          )}
        </ArtistContainer>
      ))}
    </Container>
  );
}
