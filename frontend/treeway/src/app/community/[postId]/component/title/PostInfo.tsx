import styles from '@/app/community/[postId]/page.module.scss'

export default function PostInfo() {
    return (
        <div className={styles.postInfo}>
            <h2>제목</h2>
            <div className={styles.info}>
                <p>작성자</p>
                <p>작성날짜</p>
                <p>조회수</p>
                <p>첨부파일</p>
            </div>
        </div>
    );
}