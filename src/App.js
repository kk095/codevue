import { HomePage, AboutPage, TeamPage, Allpages } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "./hooks/theme";
import { useEffect } from "react";

function App() {
  let theme = useTheme();
  useEffect(() => {
    document.body.style.backgroundColor = theme.mode.backgroundColor;
    document.body.style.color = theme.mode.color;
  }, [theme]);
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/allpages" element={<Allpages />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
