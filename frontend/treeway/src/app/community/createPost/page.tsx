'use client'

import styles from './page.module.scss'
import TextEditor from './component/TextEditor';
import Button from '@/app/common/Button';
import FormField from '@/app/regist/components/FormField';
import Dropdown from './component/Dropdown';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { regionOptions } from '@/../public/data/region';
import { industryDetailOptions } from '@/../public/data/industry_detail';

export default function CreatePost() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [region, setRegion] = useState(0); 
    const [subCategory, setSubCategory] = useState(0); 

    const memberId = useSelector((state :RootState) => state.auth.memberId);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handlePostSubmit = async () => {
        const postData = {
            regionId: region,
            memberId: memberId,
            industryDetailId: subCategory,
            title: title,
            content: content
        };

        try {
            const response = await fetch('https://j11b107.p.ssafy.io/api/article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit post');
            }

            const result = await response.json();
            console.log('Post submitted successfully:', result);

            router.push('/community');
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <div className={styles.formBlock}>
                    <div className={styles.title}>
                        <FormField
                            label="제목"
                            htmlFor="title"
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className={styles.dropdownBlock}>
                        <Dropdown
                            label="지역 선택"
                            value={region}
                            onChange={(e) => setRegion(Number(e.target.value))}
                            options={regionOptions}
                        />
                        <Dropdown
                            label="소업종 선택"
                            value={subCategory}
                            onChange={(e) => setSubCategory(Number(e.target.value))}
                            options={industryDetailOptions}
                        />
                    </div>
                    <div className={styles.textEditorBlock}>
                        <label>내용</label>
                        <TextEditor content={content} onChange={setContent} />
                    </div>
                    <div className={styles.button}>
                        <Button content="작성" size="medium" colorType="blue" onClick={handlePostSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}
