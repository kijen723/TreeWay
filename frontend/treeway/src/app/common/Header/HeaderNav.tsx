"use client";

import { MdLogin } from "react-icons/md";
import { GoBell } from "react-icons/go";
import styles from "./HeaderNav.module.scss";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RoundBtnGroup from "../RoundBtnGroup";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const isLogin = true; // 로그인 상태
  const profileImageUrl: string = "/image/background.png";
  const pathname = usePathname();

  const buttons = [
    { icon: GoBell, alt: "Alarm Button" },
    {
      icon: isLogin ? undefined : MdLogin,
      alt: isLogin ? "Profile Image" : "Login Button",
      imgSrc: isLogin ? profileImageUrl : undefined,
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
