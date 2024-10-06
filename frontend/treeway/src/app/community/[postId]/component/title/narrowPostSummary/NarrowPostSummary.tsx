import styles from '@/app/community/[postId]/page.module.scss'
import BackButton from '../BackButton';
import ScrapBtn from '../ScrapBtn';
import PostInfo from '../PostInfo';
import EditDeleteBtn from '../EditDeleteBtn';
import { PostType } from '@/types/CommunityPropsTypes';

interface postProp {
    post: PostType,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function NarrowPostSummary({ post, onClick } : postProp) {
    const isAuthor = true;

    return (
        <div className={styles.narrowPostSummary} onClick={onClick}>
            <div>
                <BackButton />
            </div>
            <div className={styles.summBody}>
                {/* <img className={styles.summImg} src='/image/cat.jpg' /> */}
                <div className={styles.nonImgNarrow}></div>
                <div className={styles.summContent}>
                    <PostInfo post={post}/>
                    <div className={styles.postBtnGroup} onClick={(e) => {e.stopPropagation()}}>
                        <ScrapBtn />
                        { isAuthor ? <EditDeleteBtn /> : undefined }
                    </div>
                </div>
            </div>
        </div>
    );
}