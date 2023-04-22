import styles from "../styles/casestudypage.module.css";
import { CaseStudy } from "../components";

function CaseStudyPage(props) {
  return (
    <div ref={props.childref} className={styles.casestudy}>
      <CaseStudy />
    </div>
  );
}

export default CaseStudyPage;
