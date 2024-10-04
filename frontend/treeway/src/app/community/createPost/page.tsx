'use client'

import styles from './page.module.scss'
import TextEditor from './component/TextEditor';
import Button from '@/app/common/Button';
import FormField from '@/app/regist/components/FormField';
import Dropdown from './component/Dropdown';
import { useState } from 'react';

import { regionOptions } from '@/../public/data/region';
import { industryDetailOptions } from '@/../public/data/industry_detail';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [region, setRegion] = useState(0); 
    const [subCategory, setSubCategory] = useState(0); 

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handlePostSubmit = () => {
        console.log("Title: ", title);
        console.log("Content: ", content);
        console.log("Region: ", region); 
        console.log("SubCategory: ", subCategory); 
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
                            onChange={(e) => setRegion(e.target.value)}
                            options={regionOptions}
                        />
                        <Dropdown
                            label="소업종 선택"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
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
