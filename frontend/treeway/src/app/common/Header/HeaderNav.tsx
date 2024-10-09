"use client";

import { MdLogin } from "react-icons/md";
import styles from "./HeaderNav.module.scss";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RoundBtnGroup from "../RoundBtnGroup";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useEffect, useState } from "react";
import { getCookie } from 'cookies-next';

export default function HeaderNav() {
  const isLogin = useSelector((state: RootState) => state.auth.isAuth);
  const [profileImageUrl, setProfileImageUrl] = useState<string>("/image/default_user_img.jpg");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      const userDetails = getCookie('customUserDetails');
      if (userDetails) {
        const { profileImg } = JSON.parse(userDetails as string);
        if (profileImg) {
          setProfileImageUrl(profileImg);
        }
      }
    }
  }, [isLogin]);

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
