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
import RoundBtnGroup2 from "../RoundBtnGroup2";

export default function HeaderNav() {
  const isLogin = useSelector((state: RootState) => state.auth.isAuth);
  const memberId = useSelector((state: RootState) => state.auth.memberId);
  const [profileImageUrl, setProfileImageUrl] = useState<string>("/image/default_user_img.jpg");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      const fetchProfileImage = async () => {
        try {
          const response = await fetch(`https://j11b107.p.ssafy.io/api/files/profile/${memberId}`);
          if (response.ok) {
            const imageUrl = response.url;
            setProfileImageUrl(imageUrl);
          } else {
            console.error('프로필 이미지를 불러오는 데 실패했습니다.');
          }
        } catch (error) {
          console.error('프로필 이미지를 가져오는 중 오류 발생:', error);
        }
      };

      fetchProfileImage();
    }
  }, [isLogin, memberId]);

  const buttons = [
    {
      icon: isLogin ? undefined : MdLogin,
      alt: isLogin ? "마이페이지" : "로그인",
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
          <RoundBtnGroup2 buttons={buttons} direction="row" />
        </nav>
      ) : null}
    </>
  );
}
