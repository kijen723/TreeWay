import styles from '@/app/community/[postId]/page.module.scss'
import BackButton from './BackButton';
import ScrapBtn from './ScrapBtn';
import PostInfo from './PostInfo';
import EditDeleteBtn from './EditDeleteBtn';

export default function PostSummary() {
    const isAuthor = true;

    return (
        <div className={styles.postSummary}>
            <BackButton />
            <img className={styles.summImg} src='/image/cat.jpg' />
            <div className={styles.summContent}>
                <PostInfo />
                <div className={styles.postBtnGroup}>
                    <ScrapBtn />
                    { isAuthor ? <EditDeleteBtn /> : undefined }
                </div>
            </div>
        </div>
    );
}