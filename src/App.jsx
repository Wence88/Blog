import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Featured from "./components/featured/Featured";
import Africa from "./components/africa/Africa";
import Culture from "./components/culture/Culture";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Featured />
      <hr style={{ color: "#ebebeb" }} />
      <Africa />
      <hr style={{ color: "#ebebeb" }} />
      <Culture />
    </div>
  );
}

export default App;
