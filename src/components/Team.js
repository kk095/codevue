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
      <div>
        <i>𝒞𝑜𝒹𝑒𝒱𝓊𝑒 𝒾𝓈 𝒻𝓇𝒾𝓋𝑜𝓁𝒾𝓉𝓎 𝓌𝒾𝓉𝒽𝑜𝓊𝓉 𝑜𝓊𝓇 𝓉𝑒𝒶𝓂 𝑜𝒻 𝒷𝓇𝒶𝒾𝓃𝒾𝒶𝒸𝓈.</i>
      </div>
      <div className={styles.teamdes}>
        They aren't just creative experts, technology advisors, growth
        facilitators, or developers; they are jovial and upholders backing the
        future of Codevue family. We have a team of talented developers who are
        the creators, revenue strategists who handle analytics, designers who
        work in the creative department, and salespeople who are the
        wheeler-dealers. Together, we bring a unique mix of creativity and
        technical expertise to every project, streamlining processes and
        delivering exceptional results.
        <p>
          We are multi-cultured, multi-backgrounds, and multi-faceted. We are
          free spirits, curious minds, and artistic souls.
        </p>
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
