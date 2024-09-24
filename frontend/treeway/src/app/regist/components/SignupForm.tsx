'use client'

import { useState } from 'react';
import styles from '../page.module.scss';
import Button from '@/app/common/Button';
import FormField from "./FormField";
import DateField from './DateField';
import ImageUpload from './ImageUpload';

export default function SignupForm() {
    const [email, setEmail] = useState('email@example.com');
    const [name, setName] = useState('정다운');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showVerificationField, setShowVerificationField] = useState(false);
    const [verificationNumber, setVerificationNumber] = useState('');

    const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthDate(e.target.value);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleShowVerificationField = () => {
        setShowVerificationField(true);
    };

    const handleVerificationNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerificationNumber(e.target.value);
    };

    return (
        <form className={styles.form}>
            <ImageUpload />
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
                        onClick={handleShowVerificationField}
                        type="button" />
                </div>
            )}
        </form>
    );
}