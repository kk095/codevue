import styles from "../styles/aside.module.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
function Aside(props) {
  let styl = {
    fontWeight: 700,
    letterSpacing: ".5px",
  };
  return (
    <div className={styles.aside}>
      <ul className={styles.ul}>
        <Link to={props.backUrl}>
          <li className={styles.item1}>
            <FaRegArrowAltCircleLeft />
          </li>
        </Link>
        <li className={styles.item2}>
          {props.child == 1 ? (
            <Link style={styl} to={"/about"}>
              about CodeVue
            </Link>
          ) : (
            <Link to={"/about"}>about CodeVue</Link>
          )}
        </li>
        <li className={styles.item3}>
          {props.child == 2 ? (
            <Link style={styl} to={"/team"}>
              out team
            </Link>
          ) : (
            <Link to={"/team"}>out team</Link>
          )}
        </li>
        <li className={styles.item4}>
          {props.child == 3 ? (
            <Link style={styl} to={"/about"}>
              testimonials
            </Link>
          ) : (
            <Link to={"/about"}>testimonials</Link>
          )}
        </li>
        <li className={styles.item5}>
          {props.child == 4 ? (
            <Link style={styl} to={"/team"}>
              manifesto
            </Link>
          ) : (
            <Link to={"/team"}>manifesto</Link>
          )}
        </li>
        <li className={styles.item6}>
          {props.child == 5 ? (
            <Link style={styl} to={"/about"}>
              services
            </Link>
          ) : (
            <Link to={"/about"}>services</Link>
          )}
        </li>
        <li className={styles.item7}>
          {props.child == 6 ? (
            <Link style={styl}>contact</Link>
          ) : (
            <Link>contact</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Aside;
