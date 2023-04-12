import styles from "../styles/testimonials.module.css";
import img from "../images/company.jpg";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials(props) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>testimonials</h1>
        <p>
          while our team is the brains, our prolific clientele is the hearts
          directing CodeVue.
        </p>
        <div className={styles.userimg2}>
          <img src={img} alt="img" />
        </div>
        <p>
          <FaQuoteLeft className={styles.quotes} />
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </p>
        <p>---Asian Paints Pvt Ltd</p>
      </div>
      <div className={styles.userimg}>
        <img src={img} alt="img" />
      </div>
    </div>
  );
}

export default Testimonials;
