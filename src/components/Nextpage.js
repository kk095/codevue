import { ReactComponent as Icon } from "../images/nexticon.svg";
import styles from "../styles/nextpage.module.css";
import { useTheme } from "../hooks/theme";

function Nextpage(props) {
  let theme = useTheme();
  let obj = {
    1: "about Codevue",
    2: "our team",
    3: "testimonials",
    4: "manifesto",
    5: "contact",
    6: "case study",
    7: "services",
  };
  let num = parseInt(props.child) + 1;
  return (
    <div className={styles.icondiv}>
      <Icon fill="none" stroke={theme.mode.color} /> {obj[num]}
    </div>
  );
}

export default Nextpage;
