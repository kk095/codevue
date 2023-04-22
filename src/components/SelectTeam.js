import { Link } from "react-router-dom";
import styles from "../styles/selectteam.module.css";
import { useEffect, useRef, useState } from "react";
import { useMode } from "../hooks/theme";

function SelectTeam(props) {
  const theme = useMode();
  const [mobileteam, setmobileteam] = useState("Mobile Apps");
  const [webteam, setweb] = useState("Website");
  const [attach, setAttach] = useState("Add attachment");
  const [nda, setnda] = useState("Send me NDA");
  const [services, setservices] = useState("");
  const [wearable, setwearable] = useState("");
  const [blockchain, setblockchain] = useState("");
  const [count, setcount] = useState(0);
  let mobileRef = useRef(null);
  let webRef = useRef(null);
  let attachRef = useRef(null);
  let ndaRef = useRef(null);
  let serviceInpRef = useRef(null);
  let servRef = useRef(null);

  useEffect(() => {
    if (count < 1) {
      props.setbtn(true);
    } else {
      props.setbtn(false);
    }
  }, [count]);

  const webClick = (e) => {
    setcount(count + 1);
    let web = e.target.getAttribute("data-val");
    setweb(web);
    webRef.current.classList.remove(styles.dis);
    let li = e.target.closest("li");
    let sp = li.childNodes[0];
    sp.style.borderBottom = `2px solid lightgrey`;
    sp.style.color = "lightgrey";
  };

  const mobteamClick = (e) => {
    setcount(count + 1);
    let team = e.target.getAttribute("data-val");
    setmobileteam(team);
    mobileRef.current.classList.remove(styles.dis);
    let li = e.target.closest("li");
    let sp = li.childNodes[0];
    sp.style.borderBottom = `2px solid lightgrey`;
    sp.style.color = "lightgrey";
  };
  const handleAttach = (e) => {
    if (e.target.files[0]) {
      setAttach(e.target.files[0].name);
      setcount(count + 1);
    }
  };
  const handleNda = (e) => {
    if (e.target.files[0]) {
      setnda(e.target.files[0].name);
      setcount(count + 1);
    }
  };
  const handleService = (e) => {
    setservices(e.target.value);
    setcount(count + 1);
  };
  const handleClick = (e) => {
    let num = e.target.getAttribute("data-val");
    if (num === "1") {
      let cls = mobileRef.current.classList.length;
      if (cls == 1) {
        mobileRef.current.classList.add(styles.dis);
      } else {
        mobileRef.current.classList.remove(styles.dis);
      }
      if (mobileteam != "Mobile Apps") {
        setmobileteam("Mobile Apps");
        e.target.style.borderBottom = "none";
        e.target.style.color = "white";
        setcount(count - 1);
      }
    } else if (num == "2") {
      let cls = webRef.current.classList.length;
      if (cls == 1) {
        webRef.current.classList.add(styles.dis);
      } else {
        webRef.current.classList.remove(styles.dis);
      }
      if (webteam != "Website") {
        setweb("Website");
        e.target.style.borderBottom = "none";
        e.target.style.color = "white";
        setcount(count - 1);
      }
    } else if (num == "3") {
      if (wearable == "") {
        let li = e.target.closest("li");
        let sp = li.childNodes[0];
        sp.style.borderBottom = `2px solid lightgrey`;
        sp.style.color = "lightgrey";
        setwearable("wearable");
        setcount(count + 1);
      } else {
        setcount(count - 1);
        setwearable("");
        let li = e.target.closest("li");
        let sp = li.childNodes[0];
        sp.style.borderBottom = "none";
        sp.style.color = "white";
      }
    } else if (num == "4") {
      if (blockchain == "") {
        let li = e.target.closest("li");
        let sp = li.childNodes[0];
        sp.style.borderBottom = `2px solid lightgrey`;
        sp.style.color = "lightgrey";
        setblockchain("blockchain");
        setcount(count + 1);
      } else {
        setcount(count - 1);
        setblockchain("");
        let li = e.target.closest("li");
        let sp = li.childNodes[0];
        sp.style.borderBottom = `none`;
        sp.style.color = "white";
      }
    } else if (num == "5") {
      servRef.current.style.display = "none";
      serviceInpRef.current.style.display = "block";
    } else if (num == "6") {
      e.target.style.color = "lightgrey";
      attachRef.current.click();
    } else if (num == "7") {
      e.target.style.color = "lightgrey";
      ndaRef.current.click();
    }
  };
  return (
    <ul className={styles.ul2}>
      <li>
        <span data-val="1" className={styles.span} onClick={handleClick}>
          {mobileteam}
        </span>
        <div ref={mobileRef} className={styles.mobteam}>
          <div>
            <Link data-val="native" onClick={mobteamClick}>
              Native
            </Link>
          </div>
          <div>
            <Link data-val="hybrid" onClick={mobteamClick}>
              Hybrid
            </Link>
          </div>
          <div>
            <Link data-val="webapp" onClick={mobteamClick}>
              Web App
            </Link>
          </div>
          <div>
            <Link data-val="reactnative" onClick={mobteamClick}>
              React Native
            </Link>
          </div>
        </div>
      </li>
      <li>
        <span data-val="2" className={styles.span} onClick={handleClick}>
          {webteam}
        </span>
        <div ref={webRef} className={styles.webteam}>
          <div>
            <Link data-val="informative" onClick={webClick}>
              Informative
            </Link>
          </div>
          <div>
            <Link data-val="functional" onClick={webClick}>
              Functional
            </Link>
          </div>
        </div>
      </li>
      <li>
        <span data-val="3" className={styles.span} onClick={handleClick}>
          Wearables
        </span>
      </li>
      <li>
        <span data-val="4" className={styles.span} onClick={handleClick}>
          Blockchain
        </span>
      </li>
      <li>
        <span
          data-val="5"
          ref={servRef}
          className={styles.span}
          onClick={handleClick}
        >
          Other Services
        </span>
        <input
          placeholder={services != "" ? services : "Write Service.."}
          value={services}
          ref={serviceInpRef}
          className={styles.servinp}
          onChange={handleService}
        />
      </li>
      <li>
        <span data-val="6" className={styles.span} onClick={handleClick}>
          {attach}
        </span>
        <input
          type="file"
          className={styles.inp}
          ref={attachRef}
          onChange={handleAttach}
        />
      </li>
      <li>
        <span data-val="7" className={styles.span} onClick={handleClick}>
          {nda}
        </span>
        <input
          type="file"
          className={styles.inp}
          ref={ndaRef}
          onChange={handleNda}
        />
      </li>
    </ul>
  );
}

export default SelectTeam;
