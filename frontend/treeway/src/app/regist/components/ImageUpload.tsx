'use client';

import { useState } from 'react';
import styles from '../page.module.scss';

interface ImageUploadProps {
    onFileSelect: (file: File | null) => void;
}

export default function ImageUpload({ onFileSelect }: ImageUploadProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            onFileSelect(file);
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };

            reader.readAsDataURL(file);
        } else {
            onFileSelect(null);
        }
    };

    const handleImageClick = () => {
        const input = document.getElementById('imageInput') as HTMLInputElement;
        if (input) {
            input.click();
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div
                className={styles.imgContainer}
                onClick={handleImageClick}
            >
                {imagePreview ? (
                    <img
                        className={styles.profileImg}
                        src={imagePreview}
                        alt="미리보기"
                    />
                ) : (
                    <div>
                        이미지를 <br /> 첨부하세요
                    </div>
                )}
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="imageInput"
                style={{ display: 'none' }}
            />
        </div>
    );
}
