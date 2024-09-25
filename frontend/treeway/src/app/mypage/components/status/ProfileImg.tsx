import styles from '@/app/mypage/page.module.scss';

export default function ProfileImg() {
    const imagePreview = '/image/cat.jpg';

    return (
        <div className={styles.imgContainer}>
            <img
                className={styles.profileImg}
                src={imagePreview}
                alt="Profile image"
            />
        </div>
    );
}