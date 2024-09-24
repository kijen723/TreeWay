import styles from './HeaderNav.module.scss';

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.logoImage}>
                <img src="/image/TREEWAY_logo.png" alt="TREEWAY Logo" />
            </div>
            <div className={styles.logoText}>
                <p>TREEWAY</p>
            </div>
        </div>
    );
}
