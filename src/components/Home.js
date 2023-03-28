import styles from "../styles/home.module.css";
import svg1 from "../images/svg1.svg";
import svg2 from "../images/svg2.svg";
import svg3 from "../images/svg3.svg";
import svg4 from "../images/svg4.svg";
import svg5 from "../images/svg5.svg";
import {
  FaPuzzlePiece,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import img from "../images/img2.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.center}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link to={"/"}>&lt;/&gt;CodeVue </Link>
          </div>

          <div className={styles.navlink}>
            <Link to={"#"}>
              <FaPuzzlePiece /> explore
            </Link>
          </div>
        </div>
        <div className={styles.centertext}>
          <div className={styles.text}>
            <div className={styles.caption}>
              <h1>Our code, your vue</h1>
              <button>let's collaborate</button>
            </div>
            <div className={styles.companies}>
              <h4>we have worked with</h4>
              <div className={styles.comlogo}>
                <img src={svg3} alt="svg" />
                <img src={svg2} alt="svg" />
                <img src={svg4} alt="svg" />
                <img src={svg5} alt="svg" />
                <img src={svg1} alt="svg" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.imgdiv}>
          <img src={img} alt="img" />
          <div className={styles.shadowdiv}></div>
        </div> */}
      </div>
      <div className={styles.footer}>
        <div className={styles.policy}>
          <Link to={"#"}>Privacy Policy</Link>
        </div>
        <div className={styles.copyright}>Copyright @2023-2030</div>
        <div className={styles.socialicons}>
          <Link to={"#"}>
            <FaInstagram />
          </Link>
          <Link to={"#"}>
            <FaLinkedinIn />
          </Link>
          <Link to={"#"}>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
