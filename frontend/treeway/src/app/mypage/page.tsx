import styles from './page.module.scss';
import StatusBar from "./components/status/StatusBar";
import ContentBlock from './components/content/ContentBlock';

export default function MyPage() {
    return (
        <div className={styles.background}>
            <StatusBar />
            <ContentBlock />
        </div>
    );
}