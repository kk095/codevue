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
            <Link
              style={styl}
              to={"/about"}
              data-val="1"
              onClick={props.handleclick}
            >
              about CodeVue
            </Link>
          ) : (
            <Link to={"/about"} data-val="1" onClick={props.handleclick}>
              about CodeVue
            </Link>
          )}
        </li>
        <li className={styles.item3}>
          {props.child == 2 ? (
            <Link
              style={styl}
              to={"/team"}
              data-val="2"
              onClick={props.handleclick}
            >
              our team
            </Link>
          ) : (
            <Link to={"/team"} data-val="2" onClick={props.handleclick}>
              our team
            </Link>
          )}
        </li>
        <li className={styles.item4}>
          {props.child == 3 ? (
            <Link
              style={styl}
              to={"/about"}
              data-val="3"
              onClick={props.handleclick}
            >
              testimonials
            </Link>
          ) : (
            <Link to={"/about"} data-val="3" onClick={props.handleclick}>
              testimonials
            </Link>
          )}
        </li>
        <li className={styles.item5}>
          {props.child == 4 ? (
            <Link
              style={styl}
              to={"/team"}
              data-val="4"
              onClick={props.handleclick}
            >
              manifesto
            </Link>
          ) : (
            <Link to={"/team"} data-val="4" onClick={props.handleclick}>
              manifesto
            </Link>
          )}
        </li>
        <li className={styles.item6}>
          {props.child == 5 ? (
            <Link style={styl} data-val="5" onClick={props.handleclick}>
              contact
            </Link>
          ) : (
            <Link data-val="5" onClick={props.handleclick}>
              contact
            </Link>
          )}
        </li>
        <li className={styles.item7}>
          {props.child == 7 ? (
            <Link style={styl} data-val="6" onClick={props.handleclick}>
              case study
            </Link>
          ) : (
            <Link data-val="6" onClick={props.handleclick}>
              case study
            </Link>
          )}
        </li>
        <li className={styles.item8}>
          {props.child == 8 ? (
            <Link style={styl} to={"/about"}>
              services
            </Link>
          ) : (
            <Link to={"/about"}>services</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Aside;
