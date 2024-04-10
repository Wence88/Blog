import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Featured from "./components/featured/Featured";
import Africa from "./components/africa/Africa";
import Culture from "./components/culture/Culture";
import Policy from "./components/policy/Policy";
import Footer from "./components/footer/Footer";
import axios from "axios";

// types of hooks
// 1. useState hook
// 2. useEffect hook
// 3. useCallback hook

function App() {
  const [news, setNews] = useState(null);

  const API_KEY = "169f0e9ebac3410fbe636254277560a1";

  const API = `https://newsapi.org/v2/everything?q=apple&from=2024-03-13&to=2024-03-13&sortBy=popularity&apiKey=${API_KEY}`;

  const getNews = async () => {
    try {
      const response = await axios.get(API);

      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="app">
      <Topbar />
      <Featured news={news?.articles?.slice(0, 9)} />
      <hr style={{ color: "#ebebeb" }} />
      <Africa news={news?.articles?.slice(9, 15)} />
      <hr style={{ color: "#ebebeb" }} />
      <Culture  news={news?.articles?.slice(15, 22)} />
      <hr style={{ color: "#ebebeb" }} />
      <Policy />
      <hr style={{ color: "#ebebeb" }} />
      <Footer />
    </div>
  );
}

export default App;
