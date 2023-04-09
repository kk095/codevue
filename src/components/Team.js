import styles from "../styles/team.module.css";
import Aside from "./Aside";
import AllTeam from "./Allteam";
import appteam from "../team/appTeam";
import webteam from "../team/webTeam";
import testingteam from "../team/testingTeam";
import { useState } from "react";
import { ReactComponent as Icon } from "../images/nexticon.svg";
import { useTheme } from "../hooks/theme";
function Team(props) {
  let theme = useTheme();
  let [myteams, setmyteams] = useState(appteam);
  const handleTeamType = (e) => {
    let team = e.target.closest(`.${styles.teamtype}`);
    let types = team.children;
    for (let i = 0; i < types.length; i++) {
      let x = types[i];
      if (x.classList.length > 1) {
        x.classList.remove(x.classList[1]);
      }
    }
    let type = e.target.getAttribute("data-val");
    if (type === "app") {
      setmyteams(appteam);
    } else if (type === "web") {
      setmyteams(webteam);
    } else {
      setmyteams(testingteam);
    }
    e.target.classList.add("selecttype");
  };
  const stl = {
    height: `${props.height - 100}px`,
  };
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>our teams</h1>
      <div className={styles.teamdes}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages.
      </div>
      <div>
        <div className={styles.teamtype}>
          <h3
            className={`${styles.type} selecttype`}
            onClick={handleTeamType}
            data-val="app"
          >
            app
          </h3>
          <h3 className={styles.type} data-val="web" onClick={handleTeamType}>
            web
          </h3>
          <h3
            className={styles.type}
            data-val="testing"
            onClick={handleTeamType}
          >
            testing
          </h3>
        </div>
        <div className={styles.myteam}>
          <AllTeam team={myteams} />
        </div>
      </div>
      {/* <div className={styles.icondiv}>
          <Icon fill="none" stroke={theme.mode.color} /> testimonials
        </div> */}
    </div>
  );
}

export default Team;
