import Chart from './Chart'
import styles from './DetailInfoBox.module.scss'

export default function DetailInfoBottom(){
    return(
        <div className={styles.Bottom}>
            <div className={styles.feeInfoTitle}>
                <span>금액정보</span>
            </div>
            <div className={styles.feeInfo}>
                <div>
                    <span>권리금</span>
                    <span>2200만원</span>
                </div>
                <div>
                    <span>보증금</span>
                    <span>4000만원</span>
                </div>
                <div>
                    <span>월세</span>
                    <span>250만원</span>
                </div>
                <div>
                    <span>관리비</span>
                    <span>15만원</span>
                </div>
            </div>
            <div className={styles.sellTitle}>
                <span>매출정보</span>
            </div>
            <Chart/>
        </div>
    )
}