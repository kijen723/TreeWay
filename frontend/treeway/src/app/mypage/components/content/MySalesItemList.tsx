import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SideDetailItem from "./component/SideDetailItem"; // 재사용할 컴포넌트 임포트
import styles from "./component/SideDetailItems.module.scss"
import { Store } from '@/types/MapType';

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
                    <SideDetailItem key={item.salesId} data={item} />
                ))
            ) : (
                <p>찜한 매물이 없습니다.</p>
            )}
        </div>
    );
}
