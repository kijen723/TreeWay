import styles from '@/app/mypage/page.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function ProfileImg() {
    const [profileImg, setProfileImg] = useState<string | null>(null); 
    const defaultImage = '/image/default_user_img.jpg'; 

    const memberId = useSelector((state: RootState) => state.auth.memberId);

    useEffect(() => {
        if (memberId) {
            const fetchProfileImage = async () => {
                try {
                    const response = await fetch(`https://j11b107.p.ssafy.io/api/files/profile/${memberId}`);
                    if (response.ok) {
                        const imageUrl = response.url;
                        setProfileImg(imageUrl);
                    } else {
                        console.error('이미지를 불러오는 데 실패했습니다.');
                        setProfileImg(null);
                    }
                } catch (error) {
                    console.error('프로필 이미지를 가져오는 중 오류 발생:', error);
                    setProfileImg(null);
                }
            };

            fetchProfileImage();
        }
    }, [memberId]);

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
