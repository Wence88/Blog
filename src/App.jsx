import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Featured from "./components/featured/Featured";
import Africa from "./components/africa/Africa";
import Culture from "./components/culture/Culture";
import Policy from "./components/policy/Policy";
import Footer from "./components/footer/Footer";

// types of hooks
// 1. useState hook
// 2. useEffect hook
// 3. useCallback hook

function App() {
  const [news, setNews] = useState(null);

  return (
    <div className="app">
      <Topbar />
      <Featured />
      <hr style={{ color: "#ebebeb" }} />
      <Africa />
      <hr style={{ color: "#ebebeb" }} />
      <Culture />
      <hr style={{ color: "#ebebeb" }} />
      <Policy />
      <hr style={{ color: "#ebebeb" }} />
      <Footer />
    </div>
  );
}

export default App;
