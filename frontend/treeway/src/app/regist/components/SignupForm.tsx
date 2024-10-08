'use client'

import { useState } from 'react';
import styles from '../page.module.scss';
import Button from '@/app/common/Button';
import FormField from "./FormField";
import DateField from './DateField';
import ImageUpload from './ImageUpload';

export default function SignupForm() {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [email, setEmail] = useState('email@example.com');
    const [name, setName] = useState('정다운');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthDate(e.target.value);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = () => {
        const signupData = new FormData();
        signupData.append('email', email);
        signupData.append('name', name);
        signupData.append('birthDate', birthDate);
        signupData.append('phoneNumber', phoneNumber);

        if (imageFile) {
            signupData.append('profileImage', imageFile);
        }

        console.log("회원가입 데이터:", Object.fromEntries(signupData.entries()));
        // 서버로 데이터 전송 로직 추가
    };

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <ImageUpload onFileSelect={setImageFile} />
            <FormField
                label="이메일"
                htmlFor="email"
                type="email"
                value={email}
                onChange={() => { }}
                disabled={true}
            />
            <FormField
                label="이름"
                htmlFor="name"
                type="name"
                value={name}
                onChange={() => { }}
                disabled={true}
            />
            <DateField
                label="생년월일"
                htmlFor="date"
                value={birthDate}
                onChange={handleBirthDateChange}
            />
            <div className={styles.formAndButton}>
                <FormField
                    label="휴대전화"
                    htmlFor="phone"
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
            </div>
            <div className={styles.submitBtn}>
                <Button
                    content='회원가입'
                    size='large'
                    colorType='blue'
                    onClick={handleSubmit}
                    type='button' />
            </div>
        </form>
    );
}
