import { Home } from "../components";
import styles from "../styles/homepage.module.css";
import { useState } from "react";
import color from "../color";
import img from "../images/img2.jpg";

function HomePage() {
  let [mode, setmode] = useState(color.darkTheme);
  const handleHoverout = (e) => {
    let ele = e.target.closest("svg");
    ele.style.fill = mode.color;
    ele.style.backgroundColor = "unset";
    let imgdiv = document.querySelector("#companyRelateddiv");
    let imgtag = document.querySelector("#companyRelatedImg");
    imgtag.setAttribute("src", "");
    imgdiv.style.visibility = "hidden";
    imgdiv.style.opacity = "0";
    let center = document.querySelector("#center");
    center.style.background = `unset`;
    imgtag.style.display = "none";
  };
  const handleHover = (e) => {
    let ele = e.target.closest("svg");
    ele.style.fill = mode.backgroundColor;
    ele.style.backgroundColor = mode.color;
    let imgdiv = document.querySelector("#companyRelateddiv");
    let imgtag = document.querySelector("#companyRelatedImg");
    imgtag.style.display = "block";
    let center = document.querySelector("#center");
    center.style.background = `linear-gradient(80deg, ${mode.backgroundColor} 45%,rgba(0,0,0,.5) )`;
    imgtag.setAttribute("src", img);
    imgdiv.style.visibility = "visible";
    imgdiv.style.opacity = "1";
  };
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
      <Home
        handleMode={handleMode}
        mode={mode}
        handleHoverout={handleHoverout}
        handleHover={handleHover}
      />
    </div>
  );
}

export default HomePage;
