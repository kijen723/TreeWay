"use client";

import styles from "./SideNav.module.scss";
import { GoBell } from "react-icons/go";
import { MdLogout, MdOutlineSettings } from "react-icons/md";
import RoundBtnGroup from "../RoundBtnGroup";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const upperButtons = [
    { icon: GoBell, alt: "Alarm Button" },
    { icon: GoBell, alt: "Alarm Button" },
    { icon: GoBell, alt: "Alarm Button" },
    { icon: GoBell, alt: "Alarm Button" },
  ];

  const lowerButtons = [
    { icon: MdOutlineSettings, alt: "Alarm Button" },
    { icon: MdLogout, alt: "Alarm Button" },
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
