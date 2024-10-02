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
import { useDispatch } from "react-redux";
import { logOut } from "@/redux/slice/authSlice";

export default function SideNav() {
  const router = useRouter();
  const dispatch = useDispatch();

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
        dispatch(logOut());
        router.push("/");
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
