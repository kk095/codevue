import { useEffect, useState, useRef, useCallback } from "react";
import { About, Navbar } from "../components";
import styles from "../styles/aboutpage.module.css";
import useResize from "../hooks/resize";
import { useTheme } from "../hooks/theme";
import { motion } from "framer-motion";
import { redirect, useNavigate } from "react-router-dom";

function AboutPage(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [width, height] = useResize();
  const [touchPos, setTouchPos] = useState(null);
  const [swipe, setswipe] = useState(0);
  const handlekey = (e) => {
    if (e.keyCode === 40) {
      navigate("/team");
    }
  };
  useEffect(() => {
    let ele = document.querySelector(`.${styles.aboutpage}`);
    ele.addEventListener("keydown", handlekey);
  }, []);
  const handleTouch = (e) => {
    let pos = e.touches[0].clientY;
    setTouchPos(pos);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPos;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientY;
    const diff = touchDown - currentTouch;
    setswipe(diff);
    setTouchPos(null);
  };
  const handleTouchEnd = (e) => {
    console.log("end");
    console.log(swipe);
    if (swipe > 5) {
      navigate("/team");
    } else if (swipe < -5) {
      navigate("/");
    }
  };

  const handleScroll = (e) => {
    console.log("scrolling");
    console.log(e);
  };

  return (
    <motion.div
      style={theme.mode}
      className={styles.aboutpage}
      ref={props.childref}
    >
      <About height={height} width={width} />
    </motion.div>
  );
}

export default AboutPage;
