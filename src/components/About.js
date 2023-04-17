import styles from "../styles/about.module.css";
import { ReactComponent as Icon } from "../images/nexticon.svg";
import { useTheme } from "../hooks/theme";
import { FaQuoteLeft } from "react-icons/fa";
import Aside from "./Aside";
function About(props) {
  return (
    <div className={styles.aboutsection}>
      <div className={styles.mainabout}>
        <h1 className={styles.h1}>about</h1>
        <div className={styles.tagline}>
          <i>𝒲𝑒 𝓀𝓃𝑜𝓌 𝒮𝑜𝒻𝓉𝓌𝒶𝓇𝑒 𝒶𝓃𝒹 𝒶𝓅𝓅𝓈; 𝓀𝓃𝑜𝓌 𝓌𝒽𝓎, 𝒷𝑒𝒸𝒶𝓊𝓈𝑒 𝓌𝑒 𝓌𝓇𝒾𝓉𝑒 𝓉𝒽𝑒𝓂.</i>
        </div>
        <p>
          There is a notion that to grow a business, you have to be relentless;
          but, we believe there are billion different ways to achieve great
          triumph & that's what we do.
        </p>
        <p>
          Codevue is a leading software development and mobile app development
          company, where we turn ideas into reality. Our team of skilled
          developers and designers work tirelessly to create custom software
          solutions and mobile apps that are tailored to the unique needs of our
          clients. We take pride in our ability to streamline the development
          process, from ideation to deployment, to deliver top-notch products
          that exceed expectations.
        </p>
        <p>
          Our approach to software and app development is rooted in creativity,
          innovation, and a deep understanding of technology. We're passionate
          about mobile app development and constantly push ourselves to come up
          with new and innovative ways to build better apps. Whether it's
          developing complex web applications or intuitive mobile apps, we have
          the expertise and knowledge to deliver exceptional results.
        </p>
        <p>
          <FaQuoteLeft className={styles.quotes} />
          At Codevue, our goal is to ensure our clients are always satisfied
          with the work we produce, and we're not satisfied until they are. Join
          a team of fun, talented, and dedicated people who are working hard to
          improve the world one app at a time. Contact us today to learn more
          about how we can help bring your vision to life.
        </p>
      </div>
    </div>
  );
}

export default About;
