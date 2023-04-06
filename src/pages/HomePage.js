import { Home } from "../components";
import styles from "../styles/homepage.module.css";
import { useEffect, useLayoutEffect, useState } from "react";
import color from "../color";
import img from "../images/img2.jpg";
import { useTheme } from "../hooks/theme";

function HomePage() {
  let theme = useTheme();
  const handleHoverout = (e) => {
    e.preventDefault();
    let sz = window.innerWidth;
    if (sz > 500) {
      let ele = e.target.closest("svg");
      ele.style.fill = theme.mode.color;
      ele.style.backgroundColor = "unset";
      let imgdiv = document.querySelector("#companyRelateddiv");
      let imgtag = document.querySelector("#companyRelatedImg");
      imgtag.setAttribute("src", "");
      imgdiv.style.visibility = "hidden";
      imgdiv.style.opacity = "0";
      let center = document.querySelector("#center");
      center.style.background = `unset`;
      imgtag.style.display = "none";
    }
  };
  const handleHover = (e) => {
    e.preventDefault();
    let sz = window.innerWidth;
    if (sz > 500) {
      let ele = e.target.closest("svg");
      ele.style.fill = theme.mode.backgroundColor;
      ele.style.backgroundColor = theme.mode.color;
      let imgdiv = document.querySelector("#companyRelateddiv");
      let imgtag = document.querySelector("#companyRelatedImg");
      imgtag.style.display = "block";
      let center = document.querySelector("#center");
      center.style.background = `linear-gradient(80deg, ${theme.mode.backgroundColor} 45%,rgba(0,0,0,.5) )`;
      imgtag.setAttribute("src", img);
      imgdiv.style.visibility = "visible";
      imgdiv.style.opacity = "1";
    }
  };

  return (
    <div
      style={{
        backgroundColor: theme.mode.backgroundColor,
        color: theme.mode.color,
      }}
      className={styles.homepage}
    >
      <Home handleHoverout={handleHoverout} handleHover={handleHover} />
    </div>
  );
}

export default HomePage;
