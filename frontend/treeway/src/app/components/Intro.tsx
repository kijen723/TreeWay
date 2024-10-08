"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./Intro.module.scss";
import { motion } from "framer-motion";

export default function Intro() {
  const data1 = [
    [
      "빅데이터 기반 추천",
      "/image/intro1.jpg",
      "빅데이터 기반 추천 서비스는 사용자가 별도의 복잡한 과정 없이 플랫폼 내에서 데이터를 분석하여 자동으로 맞춤형 추천을 제공합니다. 이를 통해 더욱 신속하고 정확하게 사용자의 선호도를 반영한 업종이나 지역을 제안하며, 편리한 사용자 경험을 지원합니다.",
    ],
    [
      "전국 매물 조회",
      "/image/intro3.jpg",
      "전국 매물 조회 서비스는 사용자가 손쉽게 다양한 지역의 부동산 매물을 확인할 수 있도록 하며, 검색 과정을 간소화하고 자동화하여 편리한 이용 환경을 제공하여 빠르고 효율적인 매물 탐색이 가능합니다.",
    ],
    [
      "AI로 보는 가게 모습",
      "/image/intro5.jpg",
      "AI로 보는 미래 가게 모습 서비스는 사용자가 예산, 지역, 업종을 입력하면 이를 바탕으로 미래의 가게 모습을 예측해 시각적으로 제공하는 서비스입니다. 고객에게 맞춤형 가게 구상을 지원하여 더 구체적인 상상을 돕고, 사업 계획 수립의 효율성을 높일 수 있습니다.",
    ],
  ];
  const data2 = [
    [
      "사용자 맞춤 뉴스 정책 제공",
      "/image/intro2.jpg",
      "사용자 맞춤형 뉴스와 정책 서비스를 통해 필요한 정보를 빠르고 안전하게 제공함으로써, 고객이 더 편리하게 뉴스를 접하고 정책을 이해할 수 있도록 돕습니다. 이를 통해 사용자 만족도와 서비스 참여도를 높이며, 보다 나은 경험을 제공합니다.",
    ],
    [
      "전국 트렌드 확인",
      "/image/intro4.jpg",
      "전국 지역별 트렌드 확인 서비스는 각 지역의 최신 흐름을 분석해 사용자에게 빠르고 정확한 정보를 제공합니다. 이를 통해 지역 변화에 대한 이해를 높이고, 맞춤형 정보를 제공하여 효율적인 의사결정을 돕습니다.",
    ],
  ];

  const scrollhandle = useCallback(() => {
    const height = window.innerHeight;
    const scrollY = window.scrollY;

    if (scrollY <= height + 20) {
      setNowCard(0);
    } else if (scrollY <= height + 350) {
      setNowCard(1);
      setImgSrc("/image/intro1.jpg");
    } else if (scrollY <= height + 720) {
      setNowCard(2);
      setImgSrc("/image/intro2.jpg");
    } else if (scrollY <= height + 950) {
      setNowCard(3);
      setImgSrc("/image/intro3.jpg");
    } else if (scrollY <= height + 1350) {
      setNowCard(4);
      setImgSrc("/image/intro4.jpg");
    } else {
      setNowCard(5);
      setImgSrc("/image/intro5.jpg");
    }
  }, []);

  const [imgSrc, setImgSrc] = useState<string>("/image/intro1.jpg");
  const [nowCard, setNowCard] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollhandle);

    return () => {
      window.removeEventListener("scroll", scrollhandle);
    };
  });
  return (
    <motion.div className={styles.main} animate={{ backgroundImage: `url(${imgSrc})` }}>
      <div className={styles.left}>
        <div className={styles.info}>
          <span className={styles.info1}>Our Services</span>
          <span className={styles.info2}>TREEWAY란?</span>
          <span className={styles.info3}>
            TREEWAY만의 빅데이터 분석을 통한 추천 기능과 사용자 맞춤 뉴스 및 정책을 제공함으로써 예비 창업자가 좀 더
            쉽게 창업을 시작할 수 있게 해주는 서비스입니다.
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
                <span>{value[2]}</span>
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
                <span>{value[2]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
