import { useState } from "react";
import { Store } from "@/types/MapType";
import styles from "./SideDetailItems.module.scss";
import { FaLocationDot, FaWonSign } from "react-icons/fa6";
import dynamic from "next/dynamic";

const DetailInfoBox = dynamic(() => import("@/app/main/components/DetailInfoBox"), {
  ssr: false,
});

export default function SideDetailItem({ data }: { data: Store }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleItemClick = () => {
    setSelectedId(String(data.salesId));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  return (
    <>
      <div className={styles.item} onClick={handleItemClick}>
        <div className={styles.Info}>
          <div className={styles.top}>
            <span className={styles.category}>{data.majorBusiness}</span>
            <span className={styles.name}>{data.tradeName}</span>
          </div>
          <span className={styles.address}>
            <FaLocationDot /> {data.address}
          </span>
          <div className={styles.mid}>
            <span>
              권리금 {Math.floor(data.personnelExpense / 10000)}만원 /
            </span>
            <span>
              보증금 {Math.floor(data.administrationCost / 10000)}만원
            </span>
          </div>
          <span className={styles.mid2}>
            월세 {Math.floor(data.monthlyRent / 10000)}만원
          </span>
          <div className={styles.bottom}>
            <FaWonSign className={styles.icon} />
            <span>월매출 {Math.floor(data.monthlySales / 10000)}만원 /</span>
            <span>월수익 {Math.floor(data.monthlyEarnings / 10000)}만원</span>
          </div>
        </div>
      </div>

      {isModalOpen && selectedId && (
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={closeModal}>
            닫기
          </button>
          <DetailInfoBox params={{ id: selectedId }} />
        </div>
      )}
    </>
  );
}
