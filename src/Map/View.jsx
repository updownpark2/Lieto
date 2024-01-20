import { useInView } from "react-intersection-observer";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import styled, { keyframes } from "styled-components";
import flower from "./flower.png";

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
const Fake = styled.div`
  background-color: #f7e1e2;
  z-index: -1;
`;

const Container = styled.div`
  animation: ${(props) => (props.inView ? frameInAnimation : null)} 2s forwards;
`;

const Title = styled.span`
  display: block;
  padding: 20px 0;
  border-radius: 5px;
  color: black;
  font-size: 27px;
  font-weight: 340;

  margin-left: 20px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;

export default function MapView({ where, gps, title }) {
  const findDirectionToLieto = () => {
    window.open(`https://map.kakao.com/link/to/${where},${gps[0]},${gps[1]}`);
  };

  const { ref, inView, entry } = useInView({ threshold: 0.1 });

  return (
    <Fake>
      <Title>
        {title} &#40;{where}&#41;
      </Title>
      <Container ref={ref} inView={inView}>
        <Map
          center={{
            lat: gps[0],
            lng: gps[1],
          }}
          style={{ width: "100%", height: "360px" }}
          level={2}
          draggable={draggable}
        >
          <CustomOverlayMap
            position={{
              lat: gps[0],
              lng: gps[1],
            }}
          >
            <div
              onClick={findDirectionToLieto}
              className="label"
              style={{
                color: "#000",
                fontWeight: 330,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="center">
                <Img src={flower}></Img>
              </span>
              <span style={{ backgroundColor: "#f7e1e2" }} className="right">
                터치로 길찾기
              </span>
            </div>
          </CustomOverlayMap>
        </Map>
      </Container>
    </Fake>
  );
}
