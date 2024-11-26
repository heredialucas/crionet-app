import "./App.css";

import { Route, Routes } from "react-router";
import { Home } from "./app/Home/Home";
import { Detail } from "./app/Detail/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/detail/:code" element={<Detail />} />
    </Routes>
  );
}

export default App;
