import { useInView } from "react-intersection-observer";
import { Map, MapMarker } from "react-kakao-maps-sdk";
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
const MarkerText = styled.div`
  background-color: #ffe4e1;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  font-weight: 400;
`;

export default function MapView() {
  const findDirectionToLieto = () => {
    window.open(
      `https://map.kakao.com/link/to/광주디엠홀,${process.env.REACT_APP_LIETO_LAT},${process.env.REACT_APP_LIETO_LNG}`
    );
  };

  const { ref, inView, entry } = useInView({ threshold: 0.1 });

  return (
    <Fake>
      <Container ref={ref} inView={inView}>
        <Map
          center={{
            lat: process.env.REACT_APP_LIETO_LAT,
            lng: process.env.REACT_APP_LIETO_LNG,
          }}
          style={{ width: "100%", height: "360px" }}
          level={2}
        >
          <MapMarker
            onClick={findDirectionToLieto}
            position={{
              lat: process.env.REACT_APP_LIETO_LAT,
              lng: process.env.REACT_APP_LIETO_LNG,
            }}
            image={{
              src: flower,
              size: {
                width: 50,
                height: 50,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 27,
                  y: 69,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }}
          ></MapMarker>
        </Map>
      </Container>
    </Fake>
  );
}
