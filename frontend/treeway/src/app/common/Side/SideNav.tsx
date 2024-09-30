"use client";

import styles from "./SideNav.module.scss";
import { GoBell } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import RoundBtnGroup from "../RoundBtnGroup";
import { usePathname, useRouter } from "next/navigation";
import {
  FcAndroidOs,
  FcCollaboration,
  FcGlobe,
  FcReading,
} from "react-icons/fc";

export default function SideNav() {
  const router = useRouter();
  const upperButtons = [
    {
      icon: FcGlobe,
      alt: "Alarm Button",
      onClick: () => {
        router.push("/main");
      },
    },
    { icon: FcReading, alt: "Alarm Button" },
    {
      icon: FcCollaboration,
      alt: "Alarm Button",
      onClick: () => {
        router.push("/community");
      },
    },
    {
      icon: FcAndroidOs,
      alt: "Alarm Button",
      onClick: () => {
        router.push("/createStoreImage");
      },
    },
  ];

  const lowerButtons = [
    {
      icon: MdLogout,
      alt: "Alarm Button",
      onClick: () => {
        router.push("/");
        // 여기에 로그아웃 기능 추가해야합니다.
      },
    },
  ];

  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" ? (
        <nav className={styles.navbar}>
          <RoundBtnGroup buttons={upperButtons} direction="column" />
          <RoundBtnGroup buttons={lowerButtons} direction="column" />
        </nav>
      ) : null}
    </>
  );
}
