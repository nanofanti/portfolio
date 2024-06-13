import { useEffect, useContext } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={!darkMode ? "" : "dark"}>
      <Header />
    </div>
  );
}

export default App;
