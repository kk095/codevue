import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { FaPuzzlePiece } from "react-icons/fa";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to={"/"}>&lt;/&gt;CodeVue</Link>
      </div>
      <div>
        <Link to={"/"}>
          <FaPuzzlePiece /> Home
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
