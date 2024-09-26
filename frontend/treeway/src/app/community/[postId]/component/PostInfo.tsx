import styles from '../page.module.scss'

export default function PostInfo() {
    return (
        <div className={styles.postInfo}>
            <h1>제목</h1>
            <div className={styles.info}>
                <p>작성자</p>
                <p>작성날짜</p>
                <p>조회수</p>
                <p>첨부파일</p>
            </div>
        </div>
    );
}