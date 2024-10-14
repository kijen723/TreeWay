"use client";

import { Dispatch, SetStateAction } from "react";
import styles from "./SearchBtn.module.scss";
import { RootState } from "@/redux/store";
import { DispatchProp } from "react-redux";

export default function SearchBtn({
  zoomLevel,
  getInfo,
  isCentered,
  setIsCentered
}: {
  zoomLevel: number;
  getInfo: () => void;
  isCentered: boolean;
  setIsCentered :Dispatch<SetStateAction<boolean>>
}) {
  return (
    <>
      {zoomLevel <= 6 ? (
        isCentered ? (
          <></>
        ) : (
          <div
            className={styles.main}
            onClick={() => {
              getInfo();
              setIsCentered(true);
            }}
          >
            검색하기
          </div>
        )
      ) : (
        <span className={styles.script}>지도를 확대하면 매물을 검색할 수 있습니다</span>
      )}
    </>
  );
}
