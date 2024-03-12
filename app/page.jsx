'use client'
import React, { useRef, useEffect, useState } from "react";
import { AboutBattleNET } from "./AboutBattleNET";
import { AboutPlayer } from "./AboutPlayer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SectionLine } from "./SectionLine";
import { TaskForStream } from "./TaskForStream";
import { TasksAndStrategy } from "./TasksAndStrategy";
import classes from "./page.module.css"

export default function Home() {

  const style = {
    height: '16px'
  }
  const section1Ref = useRef(null);
  const AboutBattleNETRef = useRef(null);
  const AboutPlayerRef = useRef(null);
  const TaskAndStrategyRef = useRef(null);

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={classes.MainContainer}>
      <div className={classes.HeaderComponent}>
        <Header scrollToSection={scrollToSection} section1Ref={section1Ref} section2Ref={AboutBattleNETRef} section3Ref={AboutPlayerRef} section4Ref={TaskAndStrategyRef} />
      </div>
      <div className={classes.TaskForStreamComponent}>
        <TaskForStream />
      </div>
      <div style={style}>
        <SectionLine />
      </div>
      <div>
        <AboutPlayer section3Ref={AboutPlayerRef} />
      </div>
      <div style={style}>
        <SectionLine />
      </div>
      <div>
        <AboutBattleNET section2Ref={AboutBattleNETRef} />
      </div>
      <div style={style}>
        <SectionLine />
      </div>
      <div>
        <TasksAndStrategy section4Ref={TaskAndStrategyRef} />
      </div>
      <div style={style}>
        <SectionLine />
      </div>
      <div>
        <Footer />
      </div>
      {showScrollButton && (
        <div className={`${classes.ScrollButtonContainer} ${showScrollButton ? classes.Show : classes.Hide}`}>
          <button className={classes.ScrollButton} onClick={scrollToTop}>
            Нагору
          </button>
        </div>
      )}
    </main>
  );
}
