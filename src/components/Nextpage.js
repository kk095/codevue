import { ReactComponent as Icon } from "../images/nexticon.svg";
import styles from "../styles/nextpage.module.css";
import { useTheme } from "../hooks/theme";

function Nextpage() {
  let theme = useTheme();
  return (
    <div className={styles.icondiv}>
      <Icon fill="none" stroke={theme.mode.color} /> testimonials
    </div>
  );
}

export default Nextpage;
