import { useEffect, useState } from "react";
import styles from "../styles/contactform.module.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function ContactForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [btn, setbtn] = useState(true);
  useEffect(() => {
    if (email != "" || phone != "") {
      setbtn(false);
    } else {
      setbtn(true);
    }
  }, [email, phone]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);
    setemail("");
    setname("");
    setphone("");
    setmessage("");
  };
  return (
    <div className={styles.contactform}>
      <h1>contact</h1>
      <p>𝐿𝑒𝓉'𝓈 𝓇𝒶𝒾𝓈𝑒 𝒶 𝓋𝒾𝓇𝓉𝓊𝒶𝓁 𝓉𝑜𝒶𝓈𝓉 𝓉𝑜 𝓎𝑜𝓊𝓇 𝒹𝒾𝑔𝒾𝓉𝒶𝓁 𝓈𝓊𝒸𝒸𝑒𝓈𝓈.!</p>
      <div className={styles.formdiv}>
        <p>We would love to hear from you</p>
        <div className={styles.form}>
          <h3>Fill the form </h3>
          <form className={styles.myform}>
            <input
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="number"
              placeholder="phone number"
              name="phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
            <input
              placeholder="message"
              name="message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
            <button
              className={styles.btn}
              type="submit"
              onClick={handleSubmit}
              disabled={btn}
            >
              Submit <FaRegArrowAltCircleRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
