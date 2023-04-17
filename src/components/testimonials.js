import styles from "../styles/testimonials.module.css";
import img from "../images/company.jpg";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials(props) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>testimonials</h1>
        <div className={styles.tagline}>
          <i>
            𝒲𝒽𝒾𝓁𝑒 𝑜𝓊𝓇 𝓉𝑒𝒶𝓂 𝒾𝓈 𝓉𝒽𝑒 𝒷𝓇𝒶𝒾𝓃𝓈, 𝑜𝓊𝓇 𝓅𝓇𝑜𝓁𝒾𝒻𝒾𝒸 𝒸𝓁𝒾𝑒𝓃𝓉𝑒𝓁𝑒 𝒾𝓈 𝓉𝒽𝑒 𝒽𝑒𝒶𝓇𝓉𝓈
            𝒹𝒾𝓇𝑒𝒸𝓉𝒾𝓃𝑔 𝒞𝑜𝒹𝑒𝒱𝓊𝑒.
          </i>
        </div>
        <p>
          Our clients are the heartbeat of our business, and we're dedicated to
          helping them achieve their goals. We're proud to work with some of the
          most innovative and dynamic companies out there. From startups to
          established enterprises, we work closely with our clients to
          understand their unique needs and create custom solutions that drive
          growth and success. We're grateful for the relationships we've built
          and look forward to collaborating with new clients to bring their
          visions to life.
        </p>
        <div className={styles.userimg2}>
          <div>A</div>
        </div>
        <p>
          <FaQuoteLeft className={styles.quotes} />I was thoroughly impressed
          with the professionalism and expertise of the team at Codevue. From
          tech lead, Priyansh, to project manager, Geet, and BA Sudhanshu,
          everyone I interacted with was knowledgeable and attentive. They
          provided personalized solutions that exceeded my expectations and
          delivered high-quality work. There was some delay from our side in
          finances but the team really was supportive and kept going. I would
          highly recommend Codevue to anyone in need of their services.
        </p>
        <p>---Asian Paints Pvt Ltd</p>
      </div>
      <div className={styles.userimg}>
        <div>A</div>
      </div>
    </div>
  );
}

export default Testimonials;
