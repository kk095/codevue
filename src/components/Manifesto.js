import { useRef, useState } from "react";
import styles from "../styles/manifesto.module.css";
import { FaQuoteLeft } from "react-icons/fa";
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
      <div className={styles.tagline}>
        <i>
          𝑀𝑜𝓇𝒶𝓁 𝓋𝒶𝓁𝓊𝑒𝓈 𝒻𝓇𝑜𝓂 𝑜𝓊𝓇 𝒸𝒽𝒾𝓁𝒹𝒽𝑜𝑜𝒹 𝓇𝑒𝒸𝑜𝓃𝒸𝑒𝓅𝓉𝓊𝒶𝓁𝒾𝓏𝑒𝒹 𝒶𝓈 𝓉𝒽𝑒 𝓂𝒶𝓃𝒾𝒻𝑒𝓈𝓉𝑜 𝑜𝒻
          𝒞𝑜𝒹𝑒𝒱𝓊𝑒..
        </i>
      </div>
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
      <p className={styles.lastp}>
        <FaQuoteLeft className={styles.quotes} />
        we typically overlook things from our childhood except for the moral
        values & one thing that has stayed with us is QCT - Quality,
        communication(circle), and trust and transparency (time).
      </p>
    </div>
  );
}

export default Manifesto;
