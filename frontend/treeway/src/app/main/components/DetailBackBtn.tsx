"use client";

import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from "./DetailBackBtn.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { changeShopIndex } from "@/redux/slice/shopIndexSlice";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function DetailBackBtn() {
  // useEffect(() => {
  //   const {isLoading, error, data} = useQuery({
  //     queryKey : ["detailData"],
  //   })
  // }, []);
  const router = useRouter();
  const dispatch = useDispatch();
  const param = useParams();

  const shopId = param?.id ? Number(param.id) : 0;
  return (
    <div className={styles.backBox}>
      <IoMdCloseCircleOutline
        className={styles.backBtn}
        onClick={() => {
          dispatch(changeShopIndex(shopId));
          router.push("/main");
        }}
      />
    </div>
  );
}
