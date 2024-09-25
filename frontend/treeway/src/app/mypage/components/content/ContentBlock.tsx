import styles from '@/app/mypage/page.module.scss';
import ContentList from "./ContentList";

export default function ContentBlock() {
    const conType: string = "post"; // "post", "news", "store"

    return (
        <div className={styles.contentBlock}>
            <ContentList contentType={conType}/>
        </div>
    );
}