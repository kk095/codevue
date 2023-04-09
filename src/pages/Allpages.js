import { Navbar, Aside, Nextpage } from "../components";
import AboutPage from "./AboutPage";
import TeamPage from "./TeamPage";
import { useEffect, useRef, useState, useMemo } from "react";
import useResize from "../hooks/resize";

let scrollIntoView = require("scroll-into-view");

function Allpages() {
  const ref = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  let pos = 0;

  useEffect(() => {
    function check() {
      console.log("scrolling...");
    }
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  const handleclick = (e) => {
    console.log("clicked");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handlescroll = (e) => {
    let newPos = window.scrollY;
    console.log("pos:", pos);
    console.log("newpos:", newPos);
    console.log("diff:", pos - newPos);
    let dir = null;
    if (pos - newPos < 0) {
      dir = "down";
    } else if (pos - newPos > 0) {
      dir = "up";
    }
    console.log("dir:", dir);
    if (dir == "up") {
      if (pos == 0) {
        scrollIntoView(aboutRef.current, function () {
          pos = window.scrollY;
        });
      } else if (pos == window.innerHeight) {
        scrollIntoView(aboutRef.current, function () {
          pos = window.scrollY;
        });
      }
    } else if (dir == "down") {
      if (pos == 0) {
        scrollIntoView(teamRef.current, function () {
          pos = window.scrollY;
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
      <Aside />
      <Nextpage />
      <AboutPage childref={aboutRef} />
      <TeamPage childref={teamRef} />
    </div>
  );
}

export default Allpages;
