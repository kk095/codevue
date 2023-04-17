import styles from "../styles/contactpage.module.css";
import { ContactForm, Contact, Question } from "../components";
import { useState } from "react";
function ContactPage(props) {
  const [obj, setobj] = useState("home");
  const handleClick = (e) => {
    console.log(e.target);
    let temp = e.target.getAttribute("data-val");
    console.log(temp);
    if (temp === "form") {
      setobj("form");
    } else if (temp === "ques") {
      setobj("ques");
    } else {
      setobj("home");
    }
  };
  return (
    <div ref={props.childref} className={styles.contactpage}>
      {obj === "home" && <Contact handleclick={handleClick} />}
      {obj === "ques" && <Question handleclick={handleClick} />}
      {obj === "form" && <ContactForm handleclick={handleClick} />}
    </div>
  );
}

export default ContactPage;
