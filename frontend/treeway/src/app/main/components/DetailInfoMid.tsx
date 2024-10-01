import styles from "./DetailInfoBox.module.scss";

export default function DetailInfoMid(){
    return(
        <div className={styles.Mid}>
            <div className={styles.shopInfoTitle}>
                <span>매물정보</span>
            </div>
            <div className={styles.shopInfo}>
                <div className={styles.shopName}>
                    <span>상호명</span>
                    <span>살롱 드 마리</span>
                </div>
                <div className={styles.address}>
                    <span>주소</span>
                    <span>서울 광진구 광나루로 382</span>
                </div>
                <div className={styles.floor}>
                    <span>층수</span>
                    <span>지상 1/20층</span>
                </div>
                <div className={styles.squreMeter}>
                    <span>평수</span>
                    <span>실면적 13평</span>
                </div>
                <div className={styles.parking}>
                    <span>주차</span>
                    <span>1대 / 100대</span>
                </div>
            </div>
        </div> 
    )
}