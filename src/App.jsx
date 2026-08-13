import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tech from "./pages/Tech";
import Ai from "./pages/Ai";
import Travel from "./pages/Travel";
import Education from "./pages/Education";
import Automobile from "./pages/Automobile";
import Markets from "./pages/Markets";
import Property from "./pages/Property";
import Health from "./pages/Health";
import News from "./pages/News";
import Labs from "./pages/Labs";
import Space from "./pages/Space";
import Robotics from "./pages/Robotics";
import About from "./pages/About";
import Merchandise from "./pages/Merchandise";
import Careers from "./pages/Careers";
import Games from "./pages/Games";
import Music from "./pages/Music";
import Film from "./pages/Film";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Shell() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <NavHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/education" element={<Education />} />
          <Route path="/automobile" element={<Automobile />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/property" element={<Property />} />
          <Route path="/health" element={<Health />} />
          <Route path="/news" element={<News />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/space" element={<Space />} />
          <Route path="/robotics" element={<Robotics />} />
          <Route path="/about" element={<About />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/games" element={<Games />} />
          <Route path="/music" element={<Music />} />
          <Route path="/film" element={<Film />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
