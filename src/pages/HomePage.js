import { Home } from "../components";
import styles from "../styles/homepage.module.css";
import { useState } from "react";
import color from "../color";

function HomePage() {
  let [mode, setmode] = useState(color.darkTheme);
  const handleMode = (e) => {
    e.preventDefault();
    if (mode === color.darkTheme) {
      setmode(color.lightTheme);
    } else {
      setmode(color.darkTheme);
    }
  };

  let styl = {
    ...mode,
  };
  return (
    <div style={styl} className={styles.homepage}>
      <Home handleMode={handleMode} mode={mode} />
    </div>
  );
}

export default HomePage;
