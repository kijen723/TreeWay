import styles from '@/app/community/[postId]/page.module.scss'
import BackButton from '../BackButton';
import ScrapBtn from '../ScrapBtn';
import PostInfo from '../PostInfo';
import EditDeleteBtn from '../EditDeleteBtn';

interface commentsProps {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function NarrowPostSummary({ onClick } : commentsProps) {
    const isAuthor = true;

    return (
        <div className={styles.narrowPostSummary} onClick={onClick}>
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