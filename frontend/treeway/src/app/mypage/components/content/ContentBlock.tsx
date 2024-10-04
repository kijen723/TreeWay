import styles from '@/app/mypage/page.module.scss';
import ContentList from "./ContentList";

interface contentTypeProp {
    conType: string;
}

export default function ContentBlock({ conType } : contentTypeProp) {

    return (
        <div className={styles.contentBlock}>
            <ContentList contentType={conType}/>
        </div>
    );
}