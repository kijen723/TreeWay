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
    const [showVerificationField, setShowVerificationField] = useState(false);
    const [verificationNumber, setVerificationNumber] = useState('');
    const [showSubmitButton, setShowSubmitButton] = useState(false); 

    const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthDate(e.target.value);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleShowVerificationField = () => {
        // 인증번호 발송 로직 추가 필요
        setShowVerificationField(true);
    };

    const handleVerificationNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerificationNumber(e.target.value);
    };

    const handleShowSubmitButton = () => {
        // 인증번호 확인 로직 추가 필요, 정상 처리시 회원가입 버튼 보이기
        setShowSubmitButton(true);
    }

    const handleSubmit = () => {
        const signupData = new FormData(); 
        signupData.append('email', email);
        signupData.append('name', name);
        signupData.append('birthDate', birthDate);
        signupData.append('phoneNumber', phoneNumber);
        signupData.append('verificationNumber', verificationNumber);

        if (imageFile) {
            signupData.append('profileImage', imageFile);
        }

        console.log("회원가입 데이터:", Object.fromEntries(signupData.entries()));
        // 서버로 데이터 전송 로직 추가
    };

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <ImageUpload onFileSelect={setImageFile}/>
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
                <Button content='인증' size='small' colorType='yellow' onClick={handleShowVerificationField} />
            </div>
            {showVerificationField && (
                <div className={styles.formAndButton}>
                    <FormField
                        label="인증번호"
                        htmlFor="valNum"
                        type="text"
                        value={verificationNumber}
                        onChange={handleVerificationNumberChange}
                    />
                    <Button
                        content='확인'
                        size='small'
                        colorType='green'
                        onClick={handleShowSubmitButton}
                        type="button" />
                </div>
            )}
            {showSubmitButton && (
                <Button 
                    content='회원가입'
                    size='large'
                    colorType='blue'
                    onClick={handleSubmit}
                    type='button' />
            )}
        </form>
    );
}
