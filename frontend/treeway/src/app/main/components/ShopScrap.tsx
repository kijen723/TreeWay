"use client";

import { useEffect, useState } from "react";
import styles from "./ShopScrap.module.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { scrap, scrapCancel, scrapCheck } from "@/api/scrapApi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ShopScrap({ salesId }: { salesId: number }) {
  const memberId = useSelector((state: RootState) => state.auth.memberId);
  const [isScrap, setIsScrap] = useState<boolean>();

  useEffect(() => {
    const checkScrap = async () => {
        const result = await scrapCheck(memberId, salesId);
        setIsScrap(result.isScraped);
    };
    checkScrap();
  }, []);

  return (
    <div>
      {isScrap ? (
        <FaHeart
          onClick={async () => {
            setIsScrap(false);
            const result = await scrapCancel(memberId, salesId);
          }}
        />
      ) : (
        <FaRegHeart
          onClick={async () => {
            setIsScrap(true);
            const result = await scrap(memberId, salesId);
          }}
        />
      )}
    </div>
  );
}
