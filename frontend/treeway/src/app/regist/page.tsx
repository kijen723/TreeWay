
import styles from './page.module.scss';
import SignupForm from './components/SignupForm';

export default function Regist() {
    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <h1>TREEWAY</h1>
                <SignupForm />
            </div>
        </div>
    );
}
