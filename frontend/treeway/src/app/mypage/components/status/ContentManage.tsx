import styles from '@/app/mypage/page.module.scss';
import ContentBtn from "./ContentBtn";

interface StatusBarProps {
    setConType: (type: string) => void;
}

export default function ContentManage({ setConType }: StatusBarProps) {
    return (
        <div className={styles.contentManage}>
            <ContentBtn setConType={setConType}/>
        </div>
    );
}