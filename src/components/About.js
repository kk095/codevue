import styles from "../styles/about.module.css";
import { ReactComponent as Icon } from "../images/nexticon.svg";
import { useTheme } from "../hooks/theme";
import { FaQuoteLeft } from "react-icons/fa";
import Aside from "./Aside";
function About(props) {
  let theme = useTheme();
  const stl = {
    height: `${props.height - 100}px`,
  };
  return (
    <div style={stl} className={styles.aboutsection}>
      <div className={styles.leftside}>
        <Aside child={1} />
      </div>
      <div className={styles.mainabout}>
        <h1 className={styles.h1}>about</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p>
          we encourage the environment in our team to be genuine and open with
          our clients, building a family-like environment that spawns optimistic
          results through collaborative decision-making. It is easy to know when
          someone is fibbing, and that only places more distance between us &
          our clients, which we would never desire.
        </p>
        <p>
          <FaQuoteLeft className={styles.quotes} />
          we typically overlook things from our childhood except for the moral
          values & one thing that has stayed with us is QCT - Quality,
          communication circle, and trust and transparency time.
        </p>

        <div className={styles.icondiv}>
          <Icon fill="none" stroke={theme.mode.color} /> our team
        </div>
      </div>
    </div>
  );
}

export default About;
