import { useEffect, useRef } from "react";
import PinImg from "./assets/PIN.png";

function App() {
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

      // 🔥 함수 먼저 선언하는 게 안전
      const handleMarkerClick = (buildingName) => {
        console.log("클릭된 건물:", buildingName);

        const message = {
          type: "BUILDING_SELECTED",
          buildingName,
        };

        console.log("안드로이드로 보낼 데이터:", message);

        window.ReactNativeWebView?.postMessage(JSON.stringify(message));
      };

      // ✅ 차관
      const marker1 = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.653015, 127.0163289),
        image: markerImage,
      });

      // ✅ 인문대
      const marker2 = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.6530911, 127.0151462),
        image: markerImage,
      });
      // ✅ 자연대
      const marker3 = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.651069, 127.016827),
        image: markerImage,
      });
      // ✅ 예술대학
      const marker4 = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.651459, 127.017262),
        image: markerImage,
      });

      marker1.setMap(map);
      marker2.setMap(map);
      marker3.setMap(map);
      marker4.setMap(map);
      // 🔥 클릭 이벤트 연결
      window.kakao.maps.event.addListener(marker1, "click", () => {
        handleMarkerClick("차관");
      });

      window.kakao.maps.event.addListener(marker2, "click", () => {
        handleMarkerClick("인문대");
      });
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
