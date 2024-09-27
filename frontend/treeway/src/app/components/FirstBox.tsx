"use client";

import ParallaxText from "@/util/ParallaxText";
import styles from "./FirstBox.module.scss";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function FirstBox() {
  const [r, setR] = useState<number>(0);
  const [radius, setRadius] = useState<number>(0)
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const height = document.documentElement.clientHeight

    if(scrollY <= height){
        setR((scrollY / height) * 100);
        // setRadius((scrollY / (-3 * height) + 1) * 50);
        console.log(r, radius)
    }else{
        setR(100);
        // setRadius(0);
    }

}


  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

    return ()=>{
        window.removeEventListener("scroll", handleScroll);
    }
  })
  return (
    <div className={styles.main}>
      <div className={styles.First} style={{width : `${r}%`}}>
        <ParallaxText baseVelocity={-5}>TREEWAY</ParallaxText>
        <ParallaxText baseVelocity={5}>VICTORY</ParallaxText>
        <ParallaxText baseVelocity={-5}>SUCCESS</ParallaxText>
        <ParallaxText baseVelocity={5}>WINNER</ParallaxText>
      </div>
    </div>
  );
}
