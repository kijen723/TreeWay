'use client'

import MenuItem from "./MenuItem";
import styles from "./SideList.module.scss";
import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { changeSideControl } from "@/redux/slice/sidecontrolSlice";
import { usePathname } from "next/navigation";

export default function SideList({
  items
}: {
  items: JSX.Element;
}) {
  const sideState = useSelector((state :RootState) => state.sidecontrol.value);
  const dispatch: AppDispatch = useDispatch();
  const pathname = usePathname();
  return (
    <nav className={styles.navbar} style={!sideState ? {height : "7vh"} : {}}>
      {pathname === "/trend" ? null : <button onClick={() => {
          dispatch(changeSideControl());
          }}>{!sideState ? "펼치기" : "숨기기"}</button>}
      <div className={styles.menuItems}>
        {/* <MenuItem icon={<FaHome />} label="HOME"/>
                <MenuItem icon={<FaHome />} label="HOME"/>
                <MenuItem icon={<FaHome />} label="HOME"/>
                <MenuItem icon={<FaHome />} label="HOME"/>
                <MenuItem icon={<FaHome />} label="HOME"/> */}
        {sideState ? items : <></>}
      </div>
    </nav>
  );
}
