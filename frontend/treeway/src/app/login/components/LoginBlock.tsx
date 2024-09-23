import styles from '../page.module.scss';

export default function LoginBlock() {
    return (
        <div className={styles.loginBlock}>
            <div className={styles.logo}>
                <img src="/image/TREEWAY_logo.png" alt="TREEWAY LOGO"/>
            </div>
            <div className={styles.loginBtn}>
                <img src="/image/kakao.png" alt="kakao login"/>
                <img src="/image/google.png" alt="google login"/>
            </div>
        </div>
    );
}