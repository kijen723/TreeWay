"use client";

import SideDetail from "@/app/common/Side/SideDetail";
import SideList from "@/app/common/Side/SideList";
import SmallSortList from "./SmallSortList";
import SideDetailItems from "./SideDetailItems";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Side() {
  const sideState = useSelector((state: RootState) => state.sidecontrol);
  return (
    <>
      <SideList sideState={sideState.value} items={<SmallSortList />} />
      <SideDetail sideState={sideState.value} items={<SideDetailItems />} />
    </>
  );
}
