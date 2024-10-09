import { useState, useEffect } from 'react';
import styles from './ProfileModal.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Button from '@/app/common/Button';

interface ProfileModalProps {
    onClose: () => void;
}

export default function ProfileModal({ onClose }: ProfileModalProps) {
    const [preview, setPreview] = useState<string | null>(null);
    const [profileImg, setProfileImg] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
                        console.error('이미지를 불러오는데 실패했습니다.');
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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileUpload = async () => {
        if (selectedFile && memberId) {
            const formData = new FormData();
            formData.append('memberId', memberId.toString());
            formData.append('profileImg', selectedFile);

            try {
                const response = await fetch('https://j11b107.p.ssafy.io/api/files/profile', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('파일 업로드 성공');
                    onClose();
                } else {
                    console.error('파일 업로드 실패');
                }
            } catch (error) {
                console.error('파일 업로드 중 오류 발생:', error);
            }
        }
    };

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <h3>프로필 사진 수정</h3>
                
                <div className={styles.profileImgContainer}>
                    <label htmlFor="fileInput">
                        <img
                            src={preview || profileImg || defaultImage}
                            alt="Profile Preview"
                            className={styles.profileImg}
                            style={{ cursor: 'pointer' }}
                        />
                    </label>
                </div>

                <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                
                <Button content="업로드" size="small" colorType="blue" onClick={handleFileUpload}/>
            </div>
        </div>
    );
}
