'use client'

import styles from './ParallaxText.module.scss';
import { wrap } from "@motionone/utils";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
  }

export default function ParallaxText({children, baseVelocity = 50} : ParallaxProps){
    // 애니메이션 값의 상태를 추적하는 훅
    // 텍스트의 기본 x 좌표를 추적, 이 값은 애니메이션 중에 업데이트
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    // useVelocity : 애니메이션 값의 속도를 계산
    // useSpring : 자연스러운 감속을 추가 (부드러운 애니메이션)
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping : 50, // 감속
        stiffness : 200 // 탄성
    }) 
    // useTransform : 특정 값을 다른 값으로 변환하는 훅
    // smoothVelocity의 값을 0부터 1000까지 받고 이를 0에서 5까지의 속도 계수로 변환
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
        clamp : false
    })

    const x = useTransform(baseX, (v) => `${wrap(-200, -100, v)}%`);

    // 애니메이션 프레임마다 호출되는 함수
    // 시간(t)과 시간 간격(delta) 값을 활용해 애니메이션을 처리
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if(velocityFactor.get() < 0){
            directionFactor.current = -1;
        }else if(velocityFactor.get()>0){
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    })

    return (
        <div style={{width : "100%"}}>
            <motion.div style={{x}} className={styles.text}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    )
}