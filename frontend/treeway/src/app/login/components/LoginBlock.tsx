'use client'

import styles from "../page.module.scss";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/slice/authSlice";

export default function LoginBlock() {
  const dispatch = useDispatch();

  const kakaoLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SOCIAL_LOGIN_URI}kakao`;
  };

  const googleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SOCIAL_LOGIN_URI}google`;
    // 서버측 반환값에 따라 정상적으로 수행되었는지 확인 필요
    // + 유저 이름, 이메일 등 들고다닐것도 반환 필요
    if (true) {
      dispatch(logIn({
        username: "GoogleUser",
        email: "googleuser@example.com"
      }));
    }
  };

  return (
    <div className={styles.loginBlock}>
      <div className={styles.logo}>
        <img src="/image/TREEWAY_logo.png" alt="TREEWAY LOGO" />
      </div>
      <div className={styles.loginBtn}>
        <img src="/image/kakao.png" alt="kakao login" onClick={kakaoLogin}/>
        <img src="/image/google.png" alt="google login" onClick={googleLogin}/>
      </div>
    </div>
  );
}
