'use client'

import styles from "../page.module.scss";

export default function LoginBlock() {
  const kakaoLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SOCIAL_LOGIN_URI}kakao`;
  };

  const googleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SOCIAL_LOGIN_URI}google`;
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
