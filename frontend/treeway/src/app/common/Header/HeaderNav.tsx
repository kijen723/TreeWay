"use client";

import { MdLogin } from "react-icons/md";
import { GoBell } from "react-icons/go";
import styles from "./HeaderNav.module.scss";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RoundBtnGroup from "../RoundBtnGroup";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function HeaderNav() {
  const [isLogin, setIsLogin] = useState<boolean>(false); // 로그인 상태
  const profileImageUrl: string = "/image/192.png";
  const pathname = usePathname();
  const router = useRouter();

  const buttons = [
    {
      icon: isLogin ? undefined : MdLogin,
      alt: isLogin ? "Profile Image" : "Login Button",
      imgSrc: isLogin ? profileImageUrl : undefined,
      onClick: isLogin
        ? () => {
            router.push("/mypage");
          }
        : () => {
            router.push("/login");
          },
    },
  ];

  return (
    <>
      {pathname !== "/" ? (
        <nav className={styles.navbar}>
          <Logo />
          <SearchBar />
          <RoundBtnGroup buttons={buttons} direction="row" />
        </nav>
      ) : null}
    </>
  );
}
