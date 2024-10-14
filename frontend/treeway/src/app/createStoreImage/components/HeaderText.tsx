import styles from '../page.module.scss'

export default function HeaderText() {
    return (
        <div className={styles.headerText}>
            <h3>현재 설정한 지역과 업종을 기반으로</h3>
            <h3>창업 예상 모습 보기</h3>
            <h5>지역, 업종, 예산을 입력해주세요</h5>
        </div>
    )
}