import { useEffect, useContext } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import WorksAndProjects from "./components/WorksAndProjects";
import Skills from "./components/Skills";
import PhotoSection from "./components/PhotoSection";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={!darkMode ? "" : "dark"}>
      <main className="bg-white w-screen dark:bg-black">
        <section>
          <Header />
          <PhotoSection />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <WorksAndProjects />
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
