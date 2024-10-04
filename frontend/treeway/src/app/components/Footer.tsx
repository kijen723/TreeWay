"use client";

import { useState } from "react";
import styles from "./Footer.module.scss";
import { motion } from "framer-motion";

export default function Footer() {
  const imgList = [
    "next.png",
    "next.png",
    "next.png",
    "next.png",
    "next.png",
    "next.png",
    "next.png",
    "next.png",
    "next.png",
    "next.png",
    "next.png",
    "next.png",
  ];

  const [items, setItems] = useState<string[]>(imgList);

  return (
    <motion.div className={styles.main}>
      {items.map((value, index) => {
        return (
          <motion.div className={styles.imgBox}>
            <img className={styles.img} src={`/image/${value}`} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
