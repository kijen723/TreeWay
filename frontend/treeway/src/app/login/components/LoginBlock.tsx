'use client'

import styles from "../page.module.scss";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/slice/authSlice";
import { getCookie } from 'cookies-next';

export default function LoginBlock() {
  const dispatch = useDispatch();

  const handleLoginSuccess = () => {
    const userDetails = getCookie('customUserDetails');
    
    if (userDetails) {
      const { id, email, name } = JSON.parse(userDetails as string);

      dispatch(logIn({
        memberId: id,
        username: name,
        email,
      }));
    }
  };

  const kakaoLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SOCIAL_LOGIN_URI}kakao`;

    handleLoginSuccess();
  };

  const googleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SOCIAL_LOGIN_URI}google`;
    
    handleLoginSuccess();
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
