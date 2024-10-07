import styles from '@/app/community/[postId]/page.module.scss'

interface postContentProp {
    postContent: string; 
}

export default function PostDetail({ postContent }: postContentProp) {
    function extractTextFromHTML(html: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    }

    return (
        <div className={styles.postDetail}>
            <div className={styles.postBlock}>
            <div dangerouslySetInnerHTML={{ __html: postContent }} />
            </div>
        </div>
    );
}