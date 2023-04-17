import { Navbar, Aside, Nextpage } from "../components";
import AboutPage from "./AboutPage";
import TeamPage from "./TeamPage";
import TestimonialPage from "./Testimonialpage.js";
import ManifestoPage from "./Manifestopage";
import ContactPage from "./ContactPage";
import { useEffect, useRef, useState, useMemo } from "react";

let scrollIntoView = require("scroll-into-view");

function Allpages() {
  const [child, setChild] = useState("1");
  const ref = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const testimonialRef = useRef(null);
  const manifestoRef = useRef(null);
  const contactRef = useRef(null);
  const allref = {
    1: aboutRef,
    2: teamRef,
    3: testimonialRef,
    4: manifestoRef,
    5: contactRef,
  };
  let pos = 0;

  // useEffect(() => {
  //   window.addEventListener("scroll", handlescroll);
  //   return () => {
  //     window.removeEventListener("scroll", handlescroll);
  //   };
  // }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // window.removeEventListener("scroll", handlescroll);
    console.log("clicked!");
    let r = e.target.getAttribute("data-val");
    console.log(r);
    console.log(allref[r].current);
    scrollIntoView(allref[r].current, function () {
      pos = window.scrollY;
      console.log("pos:", pos);
      setChild(r);
      // window.addEventListener("scroll", handlescroll);
    });
  };

  const handlescroll = (e) => {
    let newPos = window.scrollY;
    let dir = null;
    if (pos - newPos < 0) {
      dir = "down";
    } else if (pos - newPos > 0) {
      dir = "up";
    }
    if (dir == "up") {
      if (pos == 0) {
        scrollIntoView(aboutRef.current, function () {
          pos = window.scrollY;
        });
      } else if (pos == window.innerHeight) {
        scrollIntoView(aboutRef.current, function () {
          pos = window.scrollY;
          console.log("pos:", pos);
          setChild(1);
        });
      }
    } else if (dir == "down") {
      if (pos == 0) {
        let num = parseInt(child) + 1;
        let st = num.toString();
        scrollIntoView(allref[st].current, function () {
          pos = window.scrollY;
          console.log("pos:", pos);
          setChild(2);
        });
      } else if (pos == window.innerHeight) {
        scrollIntoView(teamRef.current, function () {
          pos = window.scrollY;
        });
      }
    }
  };
  return (
    <div ref={ref}>
      <Navbar />
      <Aside child={child} myref={teamRef} handleclick={handleClick} />
      <Nextpage child={child} />
      {/* <AboutPage childref={aboutRef} />
      <TeamPage childref={teamRef} />
      <TestimonialPage childref={testimonialRef} />
      <ManifestoPage childref={manifestoRef} /> */}
      <ContactPage childref={contactRef} />
    </div>
  );
}

export default Allpages;
