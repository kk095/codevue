import styles from "../styles/allteam.module.css";

function AllTeam(props) {
  return (
    <div className={styles.container}>
      {props.team.map((e, idx) => {
        let x = (
          <div key={idx} className={styles.infodiv}>
            <div className={styles.imgdiv}>
              <img src={e.img} />
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{e.name}</div>
              <div className={styles.position}>{e.position}</div>
            </div>
          </div>
        );
        return x;
      })}
    </div>
  );
}

export default AllTeam;
