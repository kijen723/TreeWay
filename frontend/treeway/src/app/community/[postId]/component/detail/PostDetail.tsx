import styles from '@/app/community/[postId]/page.module.scss'

interface postContentProp {
    postContent: string; 
}

export default function PostDetail({ postContent }: postContentProp) {
    return (
        <div className={styles.postDetail}>
            <div className={styles.postBlock}>
            <div dangerouslySetInnerHTML={{ __html: postContent }} />
            </div>
        </div>
    );
}