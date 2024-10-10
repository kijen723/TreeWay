"use client";

import { useState } from "react";
import styles from "./Footer.module.scss";
import { motion } from "framer-motion";

export default function Footer() {
  const imgList = [
    "next.png",
    "redux.png",
    "react-query.png",
    "pwa.png",
    "typescript.png",
    'sass.png',
    "spring.png",
    "spring-security.png",
    "querydsl.png",
    "mysql.png",
    "jpa.jpg",
    "hadoop.jpeg",
    "spark.png",
    "next.png",
    "redux.png",
    "react-query.png",
    "pwa.png",
    "typescript.png",
    'sass.png',
    "spring.png",
    "spring-security.png",
    "querydsl.png",
    "mysql.png",
    "jpa.jpg",
    "hadoop.jpeg",
    "spark.png",
  ];

  const [items, setItems] = useState<string[]>(imgList);

  return (
    <motion.div className={styles.main}>
      {items.map((value, index) => {
        return (
          <motion.div className={styles.imgBox}>
            <img className={styles.img} src={`/image/logo/${value}`} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
