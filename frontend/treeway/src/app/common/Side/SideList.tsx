import MenuItem from "./MenuItem";
import styles from "./SideList.module.scss";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { changeSideControl } from "@/redux/slice/sidecontrolSlice";

export default function SideList({
  sideState,
  items,
}: {
  sideState: boolean;
  items: JSX.Element;
}) {
  const dispatch: AppDispatch = useDispatch();
  return (
    <nav className={styles.navbar} style={!sideState ? {height : "7vh"} : {}}>
      <button onClick={() => {
          dispatch(changeSideControl());
          }}>123</button>
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
