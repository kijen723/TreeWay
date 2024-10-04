"use client";

import styles from "./Why.module.scss";
import { motion } from "framer-motion";

export default function Why() {
  const data = [
    ["손쉬운", "시장 조사", "지역별로 분포된 경쟁 상황과 고객군을 분석하여 시장 조사 시간을 절약할 수 있습니다."],
    ["데이터 기반", "의사결정", "빅데이터를 활용한 분석으로 더욱 객관적이고 효율적인 창업 결정을 내릴 수 있습니다."],
    ["혁신적인", "시간절약", "복잡한 정보를 자동으로 분석하여 빠르게 최적의 창업 정보를 제공합니다."],
    [
      "효율적인",
      "자금계획",
      "예상되는 자금 흐름과 수익 모델을 시뮬레이션하여 자금 계획을 구체적으로 세울 수 있습니다.",
    ],
    ["맞춤형", "추천", "개인의 상황에 맞춘 업종과 지역 추천으로 창업 성공 가능성을 높일 수 있습니다."],
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 자식 태그들이 차례대로 나타나는 시간 간격
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className={styles.main}>
      <motion.div
        className={styles.top}
        initial={{ opacity: 0, translateY: "70px" }}
        whileInView={{ opacity: 1, translateY: "-70px" }}
        transition={{ duration: 1.5 }}
      >
        <span className={styles.first}>차별화된 서비스</span>
        <div className={styles.second}>
          <span>왜 </span>
          <span>TREEWAY</span>
          <span>여야 할까요?</span>
        </div>
        <span className={styles.third}>
          오랜 시간 축적된 창업 지원 노하우를 바탕으로 성공적인 창업을 위한 최적의 솔루션을 제공합니다.
        </span>
        <span className={styles.forth}>신뢰할 수 있는 데이터와 맞춤형 분석으로 당신의 사업 성공을 돕겠습니다.</span>
      </motion.div>
      <motion.div
        className={styles.bottom}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {data.map((value, index) => {
          return (
            <motion.div className={styles.card} variants={childVariants}>
              <div
                className={styles.circle}
                style={
                  index % 2 === 1
                    ? {
                        backgroundColor: "#e9edc9",
                        boxShadow: "0 0 0 10px rgb(233, 237, 201, 0.3), 0 0 0 20px rgb(233, 237, 201, 0.3)",
                      }
                    : {}
                }
              >
                <span className={styles.index}>{"0" + (index + 1)}</span>
                <span className={styles.title}>{value[0]}</span>
                <span className={styles.title}>{value[1]}</span>
              </div>
              <div className={styles.info}>{value[2]}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
