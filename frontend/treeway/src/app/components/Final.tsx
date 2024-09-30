"use client";

import { useEffect, useState } from "react";
import styles from "./Final.module.scss";
import { motion } from "framer-motion";

export default function Final() {
  const height = window.innerHeight;
  const [state, setState] = useState<number>(0);
  const [word1, setWord1] = useState<string>("누구나 창업자로 만드는");
  const [word2, setWord2] = useState<string>("국민 기업을 향해");

  const scrollhandle = () => {
    const scrollY = window.scrollY;
    console.log(scrollY);

    if (scrollY <= 3100 + height) {
      setState(0);
    } else if (scrollY <= 3800 + height) {
      setState(1);
      setWord1("누구나 창업자로 만드는");
    } else if (scrollY <= 4500 + height) {
      setState(2);
      setWord1("누구나 창업자로 만드는");
      setWord2("국민 기업을 향해");
    } else if (scrollY <= 5200 + height) {
      setState(3);
      setWord1("당신의 성공을 위한 최고의 파트너");
    } else if (scrollY <= 5900 + height) {
      setState(4);
      setWord2("TREEWAY가 되겠습니다");
    } else {
      setState(5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollhandle);

    return () => {
      window.removeEventListener("scroll", scrollhandle);
    };
  }, []);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        {state >= 1 && state !== 5 ? (
          <motion.span
            key={word1}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.first}
          >
            {word1}
          </motion.span>
        ) : (
          <div className={styles.first}></div>
        )}
        {state >= 2 && state !== 5 ? (
          <motion.span
            key={word2}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.second}
          >
            {word2}
          </motion.span>
        ) : (
          <div className={styles.second}>error</div>
        )}
        {state === 5 ? (
          <motion.div 
          className={styles.last}
          style={{translateY : "-70px"}}
          initial = {{scale : 5}}
          animate = {{scale : 1}}
          >TREEWAY</motion.div>
        ) : null}
      </div>
    </div>
  );
}
