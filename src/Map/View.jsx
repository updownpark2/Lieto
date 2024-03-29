import { useInView } from "react-intersection-observer";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import styled, { keyframes } from "styled-components";
import flower from "./flower.png";

const Fake = styled.div`
  background-color: #f7e1e2;
  z-index: -1;
  padding-top: 100px;
`;

const Container = styled.div``;

const Title = styled.span`
  display: block;
  border-radius: 5px;
  color: black;
  font-size: 27px;
  font-weight: 340;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;
const Detail = styled.span`
  font-size: 20px;
  font-weight: 340;
  display: block;
  margin-top: 10px;
`;

export default function MapView({ where, gps, title, detail }) {
  const findDirectionToLieto = () => {
    window.open(`https://map.kakao.com/link/to/${where},${gps[0]},${gps[1]}`);
  };

  return (
    <Fake>
      <Title>
        {title} &#40;{where}&#41; {detail ? <Detail>{detail}</Detail> : null}
      </Title>
      <Container>
        <Map
          center={{
            lat: gps[0],
            lng: gps[1],
          }}
          style={{ width: "100%", height: "300px" }}
          level={2}
          draggable={false}
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
