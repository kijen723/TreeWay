"use client";

import { useEffect, useState } from "react";
import styles from "./Intro.module.scss";
import { motion } from "framer-motion";

export default function Intro() {
  const data1 = [
    ["빅데이터 기반 추천", "/image/cat.jpg"],
    ["전국 매물 조회", "/image/TREEWAY_logo.png"],
    ["AI로 보는 가게 모습", "/image/first1.png"],
  ];
  const data2 = [
    ["사용자 맞춤 뉴스 정책 제공", "/image/first1.png"],
    ["전국 트렌드 확인", "/image/cat.jpg"],
  ];

  const scrollhandle = () => {
    const height = window.innerHeight;
    const scrollY = window.scrollY;

    if (scrollY <= height + 20) {
      setNowCard(0);
    } else if (scrollY <= height + 350) {
      setNowCard(1);
      setImgSrc("/image/cat.jpg");
    } else if (scrollY <= height + 720) {
      setNowCard(2);
      setImgSrc("/image/first1.png");
    } else if (scrollY <= height + 950) {
      setNowCard(3);
      setImgSrc("/image/TREEWAY_logo.png");
    } else if (scrollY <= height + 1350) {
      setNowCard(4);
      setImgSrc("/image/cat.jpg");
    } else {
      setNowCard(5);
      setImgSrc("/image/first1.png");
    }
  };

  const [imgSrc, setImgSrc] = useState<string>("/image/cat.jpg");
  const [nowCard, setNowCard] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollhandle);

    return () => {
      window.removeEventListener("scroll", scrollhandle);
    };
  });
  return (
    <motion.div
      className={styles.main}
      animate={{backgroundImage : `url(${imgSrc})`}}
    >
      <div className={styles.left}>
        <div className={styles.info}>
          <span className={styles.info1}>Our Services</span>
          <span className={styles.info2}>TREEWAY란?</span>
          <span className={styles.info3}>
            TREEWAY만의 빅데이터 분석을 통한 추천 기능과 사용자 맞춤 뉴스 및
            정책을 제공함으로써 예비 창업자가 좀 더 쉽게 창업을 시작할 수 있게
            해주는 서비스입니다.
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right1}>
          {data1.map((value, index) => {
            return (
              <motion.div
                className={styles.card}
                style={
                  2 * index + 1 === nowCard
                    ? {
                        backgroundColor: "white",
                        color: "black",
                        zIndex: 4,
                        backgroundImage: `url(${value[1]})`,
                      }
                    : { backgroundImage: `url(${value[1]})` }
                }
              >
                <p>{value[0]}</p>
              </motion.div>
            );
          })}
        </div>
        <div className={styles.right2}>
          {data2.map((value, index) => {
            return (
              <div
                className={styles.card}
                style={
                  2 * index + 2 === nowCard
                    ? {
                        backgroundColor: "white",
                        color: "black",
                        zIndex: 4,
                        backgroundImage: `url(${value[1]})`,
                      }
                    : { backgroundImage: `url(${value[1]})` }
                }
              >
                <p>{value[0]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
