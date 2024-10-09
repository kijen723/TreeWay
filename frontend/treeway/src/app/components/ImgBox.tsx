"use client";

// import { useEffect, useState } from 'react';
import styles from "./ImgBox.module.scss";
import { FaAnglesDown } from "react-icons/fa6";
import { delay, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeShopIndex } from "@/redux/slice/shopIndexSlice";

export default function ImgBox() {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(changeShopIndex(0));
  }, []);
  return (
    <div className={styles.imgBox}>
      <motion.span
        className={styles.smallTitle}
        initial={{ opacity: 0, translateY: "-5px" }}
        animate={{ opacity: 1, translateY: "5px" }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        창업에 빅데이터를 더하다
      </motion.span>
      <motion.span
        className={styles.title}
        initial={{ opacity: 0, translateY: "-5px" }}
        animate={{ opacity: 1, translateY: "5px" }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        TREEWAY
      </motion.span>
      <motion.span
        className={styles.start}
        initial={{ opacity: 0, translateY: "-5px" }}
        animate={{ opacity: 1, translateY: "5px" }}
        transition={{ delay: 1.5, duration: 0.7 }}
        onClick={() => {
          router.push("/main");
        }}
      >
        시작하기
      </motion.span>
      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, translateY: [5, 0, 5, 0, 5] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        onClick={() => {
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <FaAnglesDown />
      </motion.div>
    </div>
  );
}
