import styles from "../styles/casestudy.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import cases from "../casestudy.js";

function CaseStudy() {
  const handleLeft = () => {};
  const handleRight = () => {};
  return (
    <div className={styles.studydiv}>
      <h1 className={styles.h1}>Case Study</h1>
      <div className={styles.tagline}>
        <i>𝒲𝑒 𝓀𝓃𝑜𝓌 𝒮𝑜𝒻𝓉𝓌𝒶𝓇𝑒 𝒶𝓃𝒹 𝒶𝓅𝓅𝓈; 𝓀𝓃𝑜𝓌 𝓌𝒽𝓎, 𝒷𝑒𝒸𝒶𝓊𝓈𝑒 𝓌𝑒 𝓌𝓇𝒾𝓉𝑒 𝓉𝒽𝑒𝓂.</i>
      </div>
      <p>
        Our approach is to first understand the user's needs, goals, and
        motivations. Then, we use our design expertise to create an experience
        that is intuitive, beautiful, and functional. But we don't stop there.
        We test and iterate until we get it just right, making sure that every
        element of the design is purposeful and impactful. Our philosophy is all
        about creating moments of delight and surprise, so that users keep
        coming back for more. With our help, your mobile app will become more
        than just a tool - it will be a true digital companion that users can't
        live without..
      </p>
      <div className={styles.carousel}>
        <div className={styles.nextprev}>
          <FaAngleLeft onClick={handleLeft} />
        </div>
        <div className={styles.visiblepart}>
          {cases.map((obj, idx) => {
            return (
              <div key={idx} data-val={idx} id={idx}>
                <h3>{obj.h1} </h3>
                <p>{obj.p}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.nextprev}>
          <FaAngleRight onClick={handleRight} />
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
