import styles from "../styles/teampage.module.css";
import useResize from "../hooks/resize";
import { useTheme } from "../hooks/theme";
import { Navbar, Team } from "../components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TeamPage(props) {
  const navigate = useNavigate();
  const [touchPos, setTouchPos] = useState(null);
  const [swipe, setswipe] = useState(0);
  let [width, height] = useResize();
  let theme = useTheme();
  const handlekey = (e) => {
    if (e.keyCode === 40) {
      // navigate("/team");
    } else if (e.keyCode === 38) {
      navigate("/about");
    }
  };
  useEffect(() => {
    // document.addEventListener("keydown", handlekey);
  });
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
    console.log(swipe);
    if (swipe > 5) {
      // navigate("/team");
    } else if (swipe < -5) {
      navigate("/about");
    }
  };

  const handleScroll = (e) => {
    console.log("scrolling");
    console.log(e);
  };

  return (
    <motion.div
      style={theme.mode}
      className={styles.teampage}
      ref={props.childref}
    >
      <Team height={height} width={width} />
    </motion.div>
  );
}

export default TeamPage;
