"use client";

import styles from "./SearchBtn.module.scss";

export default function SearchBtn({ zoomLevel, getInfo }: { zoomLevel: number; getInfo: () => void }) {
  return (
    <>
      {zoomLevel <= 6 ? (
        <div
          className={styles.main}
          onClick={() => {
            getInfo();
          }}
        >
          검색하기
        </div>
      ) : (
        <span className={styles.script}>지도를 확대하면 매물을 검색할 수 있습니다</span>
      )}
    </>
  );
}
