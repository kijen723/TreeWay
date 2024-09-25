import styles from '@/app/mypage/page.module.scss';
import ContentBtn from "./ContentBtn";

export default function ContentManage() {
    return (
        <div className={styles.contentManage}>
            <ContentBtn />
        </div>
    );
}