import styles from "../styles/teampage.module.css";
import useResize from "../hooks/resize";
import { useTheme } from "../hooks/theme";
import { Navbar, Team } from "../components";

function TeamPage() {
  let [width, height] = useResize();
  let theme = useTheme();
  return (
    <div style={theme.mode} className={styles.teampage}>
      <Navbar />
      <Team height={height} width={width} />
    </div>
  );
}

export default TeamPage;
