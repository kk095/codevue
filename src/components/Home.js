import styles from "../styles/home.module.css";
import { ReactComponent as Svg1 } from "../images/svg1.svg";
import { ReactComponent as Svg2 } from "../images/svg2.svg";
import { ReactComponent as Svg3 } from "../images/svg3.svg";
import { ReactComponent as Svg4 } from "../images/svg4.svg";
import {
  FaPuzzlePiece,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaStarAndCrescent,
  FaRegSun,
} from "react-icons/fa";
import img from "../images/img2.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import color from "../color";

function Home(props) {
  let [svgfill, setsvgfill] = useState(props.mode.color);
  let [svgback, setsvgback] = useState(props.mode.backgroundColor);

  let styl;
  if (props.mode === color.darkTheme) {
    styl = {
      border: `1px solid ${props.mode.color}`,
      flexDirection: "row",
    };
  } else {
    styl = {
      border: `1px solid ${props.mode.color}`,
      flexDirection: "row-reverse",
    };
  }
  return (
    <div className={styles.home}>
      <div id="center" className={styles.center}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link to={"/"}>&lt;/&gt;CodeVue</Link>
          </div>

          <div className={styles.navlink}>
            <div style={styl} className={styles.modes}>
              <div className={styles.modename}>
                {props.mode === color.darkTheme ? "NIGHTMODE" : "LIGHTMODE"}
              </div>

              {props.mode === color.darkTheme ? (
                <div
                  style={{ left: "75%" }}
                  className={styles.modecircle}
                  onClick={props.handleMode}
                >
                  <FaStarAndCrescent />
                </div>
              ) : (
                <div
                  style={{ left: "1%" }}
                  className={styles.modecircle}
                  onClick={props.handleMode}
                >
                  <FaRegSun />
                </div>
              )}
            </div>
            <div style={styl} className={styles.phonemode}>
              {props.mode === color.darkTheme ? (
                <div
                  style={{ left: "60%" }}
                  className={styles.phonemodecircle}
                  onClick={props.handleMode}
                >
                  <FaStarAndCrescent />
                </div>
              ) : (
                <div
                  style={{ left: "2%" }}
                  className={styles.phonemodecircle}
                  onClick={props.handleMode}
                >
                  <FaRegSun />
                </div>
              )}
            </div>
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
                <Svg3
                  style={{ fill: `${props.mode.color}` }}
                  onMouseOver={props.handleHover}
                  onMouseOut={props.handleHoverout}
                />
                <Svg2
                  style={{ fill: `${props.mode.color}` }}
                  onMouseOver={props.handleHover}
                  onMouseOut={props.handleHoverout}
                />
                <Svg4
                  style={{ fill: `${props.mode.color}` }}
                  onMouseOver={props.handleHover}
                  onMouseOut={props.handleHoverout}
                />
                <Svg1
                  style={{ fill: `${props.mode.color}` }}
                  onMouseOver={props.handleHover}
                  onMouseOut={props.handleHoverout}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="companyRelateddiv" className={styles.imgdiv}>
        <img id="companyRelatedImg" alt="no-img" />
      </div>
      <div className={styles.footer}>
        <div className={styles.policy}>
          <Link to={"#"}>Privacy Policy</Link>
        </div>
        <div className={styles.copyright}>Copyright @2023-24</div>
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
