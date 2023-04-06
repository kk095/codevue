import styles from "../styles/team.module.css";
import Aside from "./Aside";
function Team(props) {
  const handleTeamType = (e) => {
    e.target.classList.add("selecttype");
    let team = e.target.closest(`.${styles.teamtype}`);
    let types = team.children;
    for (let i = 0; i < types.length; i++) {
      let x = types[i];
      if (x.classList.length > 1) {
        x.classList.remove(x.classList[1]);
      }
    }
    e.target.classList.add("selecttype");
  };
  const stl = {
    height: `${props.height - 100}px`,
  };
  return (
    <div style={stl} className={styles.team}>
      <div className={styles.teamaside}>
        <Aside child={2} />
      </div>
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
            <h3 className={styles.type} onClick={handleTeamType}>
              app
            </h3>
            <h3 className={styles.type} onClick={handleTeamType}>
              web
            </h3>
            <h3 className={styles.type} onClick={handleTeamType}>
              testing
            </h3>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
