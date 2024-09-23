import styles from './page.module.scss';
import LoginBlock from './components/LoginBlock';

export default function Login() {
    return (
        <div className={styles.mainContent}>
            <LoginBlock />
        </div>
    );
}