import styles from "../styles/manifestotabs.module.css";

export function Trust() {
  return (
    <div className={styles.trust}>
      <p>
        We encourage the environment in our team to be genuine and open with our
        clients, building a family-like environment that spawns optimistic
        results through collaborative decision-making. It is easy to know when
        someone is fibbing, and that only places more distance between us & our
        clients, which we would never desire.
      </p>
    </div>
  );
}

export function Quality() {
  return (
    <div className={styles.quality}>
      <p>
        We neither sublet projects nor be frugal. Finishing the task speedily
        and effectively is clearly the prerogative but, also to approach the
        projects with agile methodology, following every detail, every step. Not
        only our reputation at stake while we are developing a product but our
        client's reputation as well. We are stringent about our product & we
        can't launch until all boxes are checked.
      </p>
    </div>
  );
}

export function Communication() {
  return (
    <div className={styles.comm}>
      <p>
        Good communication is the bridge between disarray and stability. We
        surmise quality and trust can never be built in the first place if we
        lack communication. To accomplish that, we need to be more than just
        presumptuous and, we need to understand the power of listening over
        speaking. CodeVue values the client's opinions & always openheartedly
        welcomes everyone to give their speculation over a cup of coffee or
        maybe a Jira board.
      </p>
    </div>
  );
}
