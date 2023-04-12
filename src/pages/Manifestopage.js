import styles from "../styles/manifestopage.module.css";
import { Manifesto } from "../components";

function ManifestoPage(props) {
  return (
    <div className={styles.manifesto} ref={props.childref}>
      <Manifesto />
    </div>
  );
}

export default ManifestoPage;
