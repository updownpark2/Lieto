import React from "react";
import { Suspense } from "react";
import { Loader } from "./Loader";
import { artist, artist2 } from "./Poster/artistDummy.js";

const Title = React.lazy(() => import("./Title/Title.jsx"));
const Program = React.lazy(() => import("./Program/Program.jsx"));
const ArtistView = React.lazy(() => import("./Artist/View.jsx"));
const PosterView = React.lazy(() => import("./Poster/View.jsx"));
const MapView = React.lazy(() => import("./Map/View.jsx"));
function App() {
  //useEffect는 컴포넌트가 렌더링 될 때마다 작업을 실행할 수 있도록 하는 Hook
  // 만약 []를 넣으면 최초 1번 렌더링될 때 실행
  // []를 넣지 않으면 리렌더링할때마다 실행
  // 만약 특정 값이 업데이트 될 때 실행하고 싶다면 []에 해당 업데이트 변수를 넣어주면된다.

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Title />
      </Suspense>
      <Suspense>
        <Program />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ArtistView />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <PosterView artist={artist} time={"15:00"} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <PosterView artist={artist2} time={"19:00"} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <MapView />
      </Suspense>
    </div>
  );
}

export default App;
