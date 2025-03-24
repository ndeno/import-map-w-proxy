import { lazy } from "react";

// TODO update from import map
const RemoteOne = lazy(() => import("../../remote-one/dist/index"));

function App() {
  return (
    <main>
      <h1>Parent</h1>
      <RemoteOne />
    </main>
  );
}

export default App;
