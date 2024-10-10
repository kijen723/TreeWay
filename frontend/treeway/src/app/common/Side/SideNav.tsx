"use client";

import styles from "./SideNav.module.scss";
import { MdLogout } from "react-icons/md";
import RoundBtnGroup from "../RoundBtnGroup";
import { usePathname, useRouter } from "next/navigation";
import {
  FcAndroidOs,
  FcCollaboration,
  FcGlobe,
  FcReading,
} from "react-icons/fc";
import { getCookie } from 'cookies-next';
import { useDispatch } from "react-redux";
import { logOut } from "@/redux/slice/authSlice";
import Swal from "sweetalert2";

export default function SideNav() {
  const router = useRouter();
  const dispatch = useDispatch();

  const userDetails = getCookie('customUserDetails');
  const isAuth = !!userDetails;

  const upperButtons = [
    {
      icon: FcGlobe,
      alt: "메인",
      onClick: () => {
        router.push("/main");
      },
    },
    { icon: FcReading, 
      alt: "뉴스 / 정책",
      onClick: () => {
        router.push("/newsPolicy");
      },
    },
    {
      icon: FcCollaboration,
      alt: "커뮤니티",
      onClick: () => {
        router.push("/community");
      },
    },
    {
      icon: FcAndroidOs,
      alt: "AI 이미지 생성",
      onClick: () => {
        router.push("/createStoreImage");
      },
    },
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch('https://j11b107.p.ssafy.io/api/member/logout', {
        method: 'POST',
        credentials: 'include', 
      });

      if (!response.ok) {
        throw new Error('로그아웃 요청 실패');
      }

      dispatch(logOut());
      router.push("/");
    } catch (error) {
      console.error('로그아웃 실패:', error);
      Swal.fire({
        title: '로그아웃 실패',
        text: '로그아웃에 실패했습니다. 다시 시도해주세요.',
        icon: 'error',
        confirmButtonText: '확인',
      });
    }
  };

  const lowerButtonsForAuth = [
    {
      icon: MdLogout,
<<<<<<< HEAD
      alt: "Logout Button",
      onClick: handleLogout,
=======
      alt: "로그아웃",
      onClick: () => {
        dispatch(logOut());
        router.push("/");
      },
      left : "50px",
>>>>>>> e4bd95b (feat : add hover box)
    },
  ];

  const lowerButtonsForUnauth = [
    {
      icon: MdLogout,
      alt: "초기화면",
      onClick: () => {
        router.push("/");
      },
      left : "50px",
    },
  ];

  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" ? (
        <nav className={styles.navbar}>
          <RoundBtnGroup buttons={upperButtons} direction="column" />
          <RoundBtnGroup
            buttons={isAuth ? lowerButtonsForAuth : lowerButtonsForUnauth}
            direction="column"
          />
        </nav>
      ) : null}
    </>
  );
}
