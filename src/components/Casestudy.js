import styles from "../styles/casestudy.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import cases from "../casestudy.js";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/theme";
import img from "../images/card.jpg";

function CaseStudy() {
  let theme = useTheme();
  const [currentSilde, setSlide] = useState(0);
  const [mycase, setcase] = useState(cases[0]);
  let visibleRef = useRef(null);
  let prevRef = useRef(null);
  let nextRef = useRef(null);
  let cardRef = useRef(null);
  let carouselRef = useRef(null);
  useEffect(() => {
    let dv = visibleRef.current.childNodes;
    if (currentSilde == 0) {
      let cls = prevRef.current.classList;
      if (cls[1] != styles.nextprevstop) {
        prevRef.current.classList.add(styles.nextprevstop);
      }
    } else {
      let cls = prevRef.current.classList;
      if (cls[1] == styles.nextprevstop) {
        prevRef.current.classList.remove(styles.nextprevstop);
      }
    }
    if (currentSilde == dv.length - 1) {
      let cls = nextRef.current.classList;
      if (cls[1] != styles.nextprevstop) {
        nextRef.current.classList.add(styles.nextprevstop);
      }
    } else {
      let cls = nextRef.current.classList;
      if (cls[1] == styles.nextprevstop) {
        nextRef.current.classList.remove(styles.nextprevstop);
      }
    }
  }, [currentSilde]);

  const handleLeft = (e) => {
    let dv = visibleRef.current.childNodes;
    let wide = dv[0].offsetWidth + 20;
    visibleRef.current.scrollBy(-wide, 0);
    setSlide(currentSilde - 1);
  };
  const handleRight = (e) => {
    let dv = visibleRef.current.childNodes;
    let wide = dv[0].offsetWidth + 20;
    visibleRef.current.scrollBy(wide, 0);
    setSlide(currentSilde + 1);
  };
  const handleCases = (e) => {
    console.log(e.target.closest("div"));
    let num = e.target.closest("div").getAttribute("data-val");
    console.log(num);
    let obj = cases[num];
    setcase(obj);
    cardRef.current.style.display = "flex";
    carouselRef.current.style.visibility = "hidden";
    carouselRef.current.style.pointerEvents = "none";
  };
  const handleCross = (e) => {
    cardRef.current.style.display = "none";
    carouselRef.current.style.visibility = "visible";
    carouselRef.current.style.pointerEvents = "unset";
  };
  return (
    <div className={styles.studydiv}>
      <div style={theme.mode} ref={cardRef} className={styles.card}>
        <div className={styles.imgdiv}>
          <img src={img} alt="img" />
        </div>
        <div className={styles.textdiv}>
          {Object.keys(mycase).map((key, idx) => {
            if (key == "h1") {
              return <h2 key={`${key}-${idx}`}>{mycase[key]}</h2>;
            }
            if (key == "p") {
              return (
                <div key={`${key}-${idx}`}>
                  <h3>Introduction</h3>
                  <p>{mycase[key]}</p>
                </div>
              );
            }

            let x = Object.keys(mycase[key]).map((k, i) => {
              if (i == 0) {
                return (
                  <div key={`${key}-${k}-${i}`}>
                    <h3>{key}</h3>
                    <p>{mycase[key][k]}</p>
                  </div>
                );
              } else {
                return <p>{mycase[key][k]}</p>;
              }
            });
            return x;
          })}
        </div>
        <div className={styles.cross} onClick={handleCross}>
          X
        </div>
      </div>
      <h1 className={styles.h1}>Case Study</h1>
      <div className={styles.tagline}>
        <i>𝒲𝑒 𝓀𝓃𝑜𝓌 𝒮𝑜𝒻𝓉𝓌𝒶𝓇𝑒 𝒶𝓃𝒹 𝒶𝓅𝓅𝓈; 𝓀𝓃𝑜𝓌 𝓌𝒽𝓎, 𝒷𝑒𝒸𝒶𝓊𝓈𝑒 𝓌𝑒 𝓌𝓇𝒾𝓉𝑒 𝓉𝒽𝑒𝓂.</i>
      </div>
      <p>
        Our approach is to first understand the user's needs, goals, and
        motivations. Then, we use our design expertise to create an experience
        that is intuitive, beautiful, and functional. But we don't stop there.
        We test and iterate until we get it just right, making sure that every
        element of the design is purposeful and impactful. Our philosophy is all
        about creating moments of delight and surprise, so that users keep
        coming back for more. With our help, your mobile app will become more
        than just a tool - it will be a true digital companion that users can't
        live without..
      </p>
      <div ref={carouselRef} className={styles.carousel}>
        <div className={styles.nextprev} ref={prevRef}>
          <FaAngleLeft onClick={handleLeft} />
        </div>
        <div ref={visibleRef} className={styles.visiblepart}>
          {cases.map((obj, idx) => {
            return (
              <div
                key={idx}
                className={styles.case}
                data-val={idx}
                id={idx}
                onClick={handleCases}
              >
                <h3>{obj.h1}</h3>
                <p>{obj.p}</p>
              </div>
            );
          })}
        </div>
        <div ref={nextRef} className={styles.nextprev}>
          <FaAngleRight onClick={handleRight} />
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
