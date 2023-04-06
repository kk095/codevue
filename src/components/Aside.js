import styles from "../styles/aside.module.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useEffect } from "react";
function Aside(props) {
  useEffect(() => {
    let y = styles.ul;
    let x = document.querySelectorAll(`.${styles.ul} li`);
    x[props.child].style.fontWeight = "700";
    x[props.child].style.letterSpacing = ".5px";
  }, []);
  return (
    <div className={styles.aside}>
      <ul className={styles.ul}>
        <Link to="/">
          <li className={styles.item1}>
            <FaRegArrowAltCircleLeft />
          </li>
        </Link>
        <li className={styles.item2}>
          <Link to={"/about"}>about CodeVue</Link>
        </li>
        <li className={styles.item3}>
          <Link to={"/team"}>out team</Link>
        </li>
        <li className={styles.item4}>
          <Link>testimonials</Link>
        </li>
        <li className={styles.item5}>
          <Link>manifesto</Link>
        </li>
        <li className={styles.item6}>
          <Link>services</Link>
        </li>
        <li className={styles.item7}>
          <Link>contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Aside;
