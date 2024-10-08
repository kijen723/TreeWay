import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SideDetailItem from "./component/SideDetailItem"; // 재사용할 컴포넌트 임포트
import styles from "./component/SideDetailItems.module.scss"

interface Store {
    "id": number,
    "majorBusiness": string,
    "industryDetailId": number,
    "industryDetailName": string,
    "address": string,
    "monthlySales": number,
    "monthlyEarnings": number,
    "hostName": string,
    "tradeName": string,
    "floorClass": string,
    "currentFloor": number,
    "totalFloors": number,
    "squareMeter": number,
    "availableParking": number,
    "totalParking": number,
    "premium": number,
    "deposit": number,
    "monthlyRent": number,
    "administrationCost": number,
    "materialCost": number,
    "personnelExpense": number,
    "utilityBill": number,
    "otherExpenses": number,
    "additionalInformation": string,
    "itemNum": number,
    "latitude": number,
    "longitude": number,
    "scrapCount": number
  }

export default function MySalesItemList() {
    const [salesItems, setSalesItems] = useState<Store[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const memberId = useSelector((state: RootState) => state.auth.memberId);

    const fetchSalesItems = async () => {
        try {
            const response = await fetch(`https://j11b107.p.ssafy.io/api/sales/scrap/${memberId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch sales items');
            }
            const data = await response.json();
            setSalesItems(data);
        } catch (error) {
            console.error('Error fetching sales items:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (memberId) {
            fetchSalesItems();
        }
    }, [memberId]);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    return (
        <div className={styles.items}>
            {salesItems.length > 0 ? (
                salesItems.map((item) => (
                    <SideDetailItem key={item.id} data={item} />
                ))
            ) : (
                <p>찜한 매물이 없습니다.</p>
            )}
        </div>
    );
}
