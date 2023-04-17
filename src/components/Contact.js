import styles from "../styles/contact.module.css";
import { Link } from "react-router-dom";

function Contact(props) {
  return (
    <div className={styles.contact}>
      <h1 className={styles.heading}>contact</h1>
      <p>𝐿𝑒𝓉'𝓈 𝓇𝒶𝒾𝓈𝑒 𝒶 𝓋𝒾𝓇𝓉𝓊𝒶𝓁 𝓉𝑜𝒶𝓈𝓉 𝓉𝑜 𝓎𝑜𝓊𝓇 𝒹𝒾𝑔𝒾𝓉𝒶𝓁 𝓈𝓊𝒸𝒸𝑒𝓈𝓈.!</p>
      <p>
        We've had the privilege of helping many of our clients navigate the vast
        landscape of the digital world. We'd like to extend an invitation to you
        too. Let's raise a glass and cheers to new opportunities and exciting
        possibilities.!
      </p>
      <h3>What would you pick?</h3>
      <div className={styles.contactopt}>
        <div className={styles.opt1}>
          <Link data-val="form" onClick={props.handleclick}>
            <h4 data-val="form">Fill the form!</h4>
            <p data-val="form">
              As much as we love to have a good conversation with you, we
              understand that sometimes you might be short on time. That's why
              we've got you covered with a traditional form
            </p>
          </Link>
        </div>
        <div className={styles.opt2}>
          <Link data-val="ques" onClick={props.handleclick}>
            <h4 data-val="ques">Answer some questions!</h4>
            <p data-val="ques">
              We believe in making things easy and enjoyable, be it mobile apps
              or a contact us form. Instead of asking you to fill out a boring
              old form, we've created an interactive questionnaire that will
              make the process more fun and engaging. So let's get started and
              see how we can work together!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
