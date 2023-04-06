import { useEffect, useState } from "react";
import { About, Navbar } from "../components";
import styles from "../styles/aboutpage.module.css";
import useResize from "../hooks/resize";
import { useTheme } from "../hooks/theme";

function AboutPage() {
  const [width, height] = useResize();
  const theme = useTheme();
  return (
    <div style={theme.mode} className={styles.aboutpage}>
      <Navbar />
      <About height={height} width={width} />
    </div>
  );
}

export default AboutPage;
