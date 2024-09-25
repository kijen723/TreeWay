import styles from './page.module.scss';
import StatusBar from "./components/StatusBar";

export default function MyPage() {
    return (
        <div className={styles.background}>
            <StatusBar />
        </div>
    );
}