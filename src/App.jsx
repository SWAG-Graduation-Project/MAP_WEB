import { useEffect, useRef } from "react";
import PinImg from "./assets/PIN.png";

function App() {
  console.log(window.kakao);
  console.log(1 + 2);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const kakao = window.kakao;

      const options = {
        center: new kakao.maps.LatLng(37.6517, 127.0165),
        level: 3,
      };

      const imageSize = new kakao.maps.Size(55, 70);

      const markerImage = new kakao.maps.MarkerImage(PinImg, imageSize);

      const map = new kakao.maps.Map(mapRef.current, options);

      const marker1 = new kakao.maps.Marker({
        //차관
        map: map,
        position: new kakao.maps.LatLng(37.653015, 127.0163289),
        image: markerImage,
      });
      const marker2 = new kakao.maps.Marker({
        //인문대
        map: map,
        position: new kakao.maps.LatLng(37.6530911, 127.0151462),
        image: markerImage,
      });

      marker2.setMap(map);
      marker1.setMap(map);
    });
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        background: "gray",

        width: "100%",
        height: "100vh",
      }}
    />
  );
}

export default App;
