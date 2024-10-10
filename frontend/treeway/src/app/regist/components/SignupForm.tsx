'use client'

import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import styles from '../page.module.scss';
import Button from '@/app/common/Button';
import FormField from "./FormField";
import DateField from './DateField';
import ImageUpload from './ImageUpload';
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/slice/authSlice";
import Swal from "sweetalert2";

export default function SignupForm() {
    const [memberId, setMemberId] = useState(0);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const userDetails = getCookie('customUserDetails');

        if (userDetails) {
            const { id: memberId, email: userEmail, name: userName } = JSON.parse(userDetails as string);
            setMemberId(memberId);
            setEmail(userEmail);
            setName(userName);
        }
    }, []);

    const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthDate(e.target.value);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (/^\d*$/.test(e.target.value)) {
            setPhoneNumber(e.target.value);
        }
    };

    const uploadImage = async () => {
        if (!imageFile) return null;

        const formData = new FormData();
        formData.append('memberId', memberId.toString());
        formData.append('profileImg', imageFile);

        try {
            const response = await fetch('https://j11b107.p.ssafy.io/api/files/profile', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const imageUrl = await response.text();
                return imageUrl;
            } else {
                console.error('이미지 업로드 실패');
                return null;
            }
        } catch (error) {
            console.error('이미지 업로드 중 오류 발생:', error);
            return null;
        }
    };

    const handleSubmit = async () => {
        if (!birthDate || !phoneNumber) {
            Swal.fire({
                title: '필수 항목 누락',
                text: '생년월일과 전화번호를 입력해주세요.',
                icon: 'warning',
                confirmButtonText: '확인'
            });
            return;
        }

        const signupData = {
            memberId: memberId,  // 쿠키에서 가져온 memberId
            profileImg: "", 
            birthDate: birthDate,      // 생년월일(string)
            phoneNumber: phoneNumber   // 전화번호(string)
        };
    
        try {
            const response = await fetch('https://j11b107.p.ssafy.io/api/member/sign-up-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`회원가입 요청 실패: ${errorText}`);
            }

            // 회원가입 성공 후 이미지 업로드
            const imageUrl = await uploadImage();
            if (imageUrl) {
                console.log('이미지 업로드 성공:', imageUrl);
            }

            dispatch(logIn({
                memberId: memberId,
                username: name,
                email: email,
            }));

            Swal.fire({
                title: '회원가입 성공!',
                text: '회원가입이 완료되었습니다.',
                icon: 'success',
                confirmButtonText: '확인'
            });

            router.push('/main');
    
        } catch (error) {
            console.error('회원가입 실패:', error);
            Swal.fire({
                title: '회원가입 실패',
                text: '회원가입 중 문제가 발생했습니다. 다시 시도해주세요.',
                icon: 'error',
                confirmButtonText: '확인'
            });
        }
    };

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <ImageUpload onFileSelect={(file) => setImageFile(file)} />
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
                    placeholder='숫자만 입력하세요'
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
