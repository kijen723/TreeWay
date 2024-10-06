import styles from '@/app/community/[postId]/page.module.scss';
import BackButton from './BackButton';
import ScrapBtn from './ScrapBtn';
import PostInfo from './PostInfo';
import EditDeleteBtn from './EditDeleteBtn';
import { PostType } from '@/types/CommunityPropsTypes';

interface postProp {
    post: PostType
}

export default function PostSummary({ post }: postProp) {
    return (
        <div className={styles.postSummary}>
            <BackButton />
            {/* {
                post.imgSrc ?
                    <img className={styles.summImg} src={post.imgSrc} alt={post.title} /> :
                    <div className={styles.nonImg}></div>
            } */}
            <div className={styles.nonImg}></div>
            <div className={styles.summContent}>
                <PostInfo post={post} />
                <div className={styles.postBtnGroup}>
                    <ScrapBtn />
                    {true ? <EditDeleteBtn /> : null}
                </div>
            </div>
        </div>
    );
}
