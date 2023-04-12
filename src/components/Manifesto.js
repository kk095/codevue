import { useRef, useState } from "react";
import styles from "../styles/manifesto.module.css";
import { Trust, Quality, Communication } from "./ManifestoTabs";

function Manifesto() {
  const [tab, settab] = useState("Trust");
  let trustRef = useRef(null);
  let qualityRef = useRef(null);
  let commRef = useRef(null);
  const handleClick = (e) => {
    let l1 = trustRef.current;
    let l2 = qualityRef.current;
    let l3 = commRef.current;
    if (l1.classList.length > 0) {
      l1.classList.remove(l1.classList[0]);
      e.target.classList.add(`${styles.tabclick}`);
      let t = e.target.getAttribute("data-val");
      settab(t);
    } else if (l2.classList.length > 0) {
      l2.classList.remove(l2.classList[0]);
      e.target.classList.add(`${styles.tabclick}`);
      let t = e.target.getAttribute("data-val");
      settab(t);
    } else {
      l3.classList.remove(l3.classList[0]);
      e.target.classList.add(`${styles.tabclick}`);
      let t = e.target.getAttribute("data-val");
      settab(t);
    }
  };
  return (
    <div className={styles.maindiv}>
      <h1>manifesto</h1>
      <p>
        Moral values from our childhood reconceptualized as the manifesto of
        CodeVue
      </p>
      <div className={styles.section}>
        <div className={styles.tabs}>
          <div
            data-val="Trust"
            className={styles.tabclick}
            ref={trustRef}
            onClick={handleClick}
          >
            trust & transparency
          </div>
          <div data-val="Quality" ref={qualityRef} onClick={handleClick}>
            quality
          </div>
          <div data-val="Communication" ref={commRef} onClick={handleClick}>
            communication
          </div>
        </div>
        {tab === "Trust" ? <Trust /> : null}
        {tab === "Quality" ? <Quality /> : null}
        {tab === "Communication" ? <Communication /> : null}
      </div>
    </div>
  );
}

export default Manifesto;
