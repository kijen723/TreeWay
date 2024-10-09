import styles from '@/app/mypage/page.module.scss';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

export default function ProfileImg() {
    const [profileImg, setProfileImg] = useState<string | null>(null); 
    const defaultImage = '/image/default_user_img.jpg'; 

    useEffect(() => {
        const userDetails = getCookie('customUserDetails');

        if (userDetails) {
            const { profileImg } = JSON.parse(userDetails as string);
            setProfileImg(profileImg);
        }
    }, []);

    return (
        <div className={styles.imgContainer}>
            <img
                className={styles.profileImg}
                src={profileImg || defaultImage}
                alt="Profile image"
            />
        </div>
    );
}
