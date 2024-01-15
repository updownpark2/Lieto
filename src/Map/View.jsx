import { Map, MapMarker } from "react-kakao-maps-sdk";

export const MapView = () => {
  const findDirectionToLieto = () => {
    window.open(
      `https://map.kakao.com/link/to/광주디엠홀,${process.env.REACT_APP_LIETO_LAT},${process.env.REACT_APP_LIETO_LNG}`
    );
  };

  return (
    <>
      <Map
        center={{
          lat: process.env.REACT_APP_LIETO_LAT,
          lng: process.env.REACT_APP_LIETO_LNG,
        }}
        style={{ width: "100%", height: "360px" }}
        level={2}
      >
        <MapMarker
          position={{
            lat: process.env.REACT_APP_LIETO_LAT,
            lng: process.env.REACT_APP_LIETO_LNG,
          }}
        >
          <div style={{ color: "#000" }}>광주 디엠홀</div>
        </MapMarker>
      </Map>
      <button onClick={findDirectionToLieto}>길찾기</button>
    </>
  );
};
/* const [gps, setGps] = useState([37.402056, 127.108212]);

  const getUserGps = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) =>
        resolve([position.coords.latitude, position.coords.longitude])
      );
    });
  };

  useEffect(async () => {
    const [lat, lng] = await getUserGps();
    setGps([lat, lng]);
  }, []);*/
