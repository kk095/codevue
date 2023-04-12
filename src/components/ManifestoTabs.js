import styles from "../styles/manifestotabs.module.css";
import { FaQuoteLeft } from "react-icons/fa";

export function Trust() {
  return (
    <div className={styles.trust}>
      <p>
        we encourage the environment in our team to be genuine and open with our
        clients, building a family-like environment that spawns optimistic
        results through collaborative decision-making. It is easy to know when
        someone is fibbing, and that only places more distance between us & our
        clients, which we would never desire.
      </p>
      <p className={styles.lastp}>
        <FaQuoteLeft className={styles.quotes} />
        we typically overlook things from our childhood except for the moral
        values & one thing that has stayed with us is QCT - Quality,
        communication(circle), and trust and transparency (time).
      </p>
    </div>
  );
}

export function Quality() {
  return (
    <div className={styles.quality}>
      <p>
        we encourage the environment in our team to be genuine and open with our
        clients, building a family-like environment that spawns optimistic
        results through collaborative decision-making. It is easy to know when
        someone is fibbing, and that only places more distance between us & our
        clients, which we would never desire.
      </p>
    </div>
  );
}

export function Communication() {
  return (
    <div className={styles.comm}>
      <p>
        we typically overlook things from our childhood except for the moral
        values & one thing that has stayed with us is QCT - Quality,
        communication(circle), and trust and transparency (time).
      </p>
    </div>
  );
}
