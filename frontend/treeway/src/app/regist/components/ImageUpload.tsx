'use client';

import { useState } from 'react';
import styles from '../page.module.scss';

export default function ImageUpload() {
    const [imagePreview, setImagePreview] = useState<string | null>(null); 

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result as string); 
            };

            reader.readAsDataURL(file); 
        }
    };

    const handleImageClick = () => {
        const input = document.getElementById('imageInput') as HTMLInputElement;
        if (input) {
            input.click();
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div
                className={styles.imgContainer}
                onClick={handleImageClick} // 클릭 이벤트 핸들러
            >
                {imagePreview ? (
                    <img
                        className={styles.profileImg}
                        src={imagePreview}
                        alt="미리보기"
                    />
                ) : (
                    '이미지를 첨부하세요'
                )}
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="imageInput"
                style={{ display: 'none' }} // input을 숨김
            />
        </div>
    );
}
