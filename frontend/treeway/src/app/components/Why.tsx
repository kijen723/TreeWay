"use client";

import styles from "./Why.module.scss";
import { motion } from "framer-motion";

export default function Why() {
  const data = ["이유1", "이유2", "이유3", "이유4", "이유5"];
  
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
    hidden: { opacity: 0, y: 200},
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
          진짜 왜 TREEWAY여야 할까.. 이건 나도 모르겠다
        </span>
        <span className={styles.forth}>그냥 쓰세요.</span>
      </motion.div>
      <motion.div 
      className={styles.bottom}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once : false, amount : 0.1}}
      >
        {data.map((value, index) => {
          return (
            <motion.div 
            className={styles.card}
            variants = {childVariants}
            >
              <div
                className={styles.circle}
                style={
                  index % 2 === 1
                    ? {
                        backgroundColor: "#e9edc9",
                        boxShadow:
                          "0 0 0 10px rgb(233, 237, 201, 0.3), 0 0 0 20px rgb(233, 237, 201, 0.3)",
                      }
                    : {}
                }
              >
                <span className={styles.index}>{"0" + (index+1)}</span>
                <span className={styles.title}>{value}</span>
              </div>
              <div className={styles.info}>
                ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
