'use client'

import styles from '../../createPost/page.module.scss'
import TextEditor from '../../createPost/component/TextEditor';
import Button from '@/app/common/Button';
import FormField from '@/app/regist/components/FormField';
import Dropdown from '../../createPost/component/Dropdown';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

import { regionOptions } from '@/../public/data/region';
import { industryDetailOptions } from '@/../public/data/industry_detail';

export default function UpdatePost() {
    const router = useRouter();
    const searchParams = useParams();
    const postId = searchParams?.postId;

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [region, setRegion] = useState(0);
    const [subCategory, setSubCategory] = useState(0);

    const memberId = 1; // 수정 필요

    const fetchPostData = async () => {
        try {
            const response = await fetch(`https://j11b107.p.ssafy.io/api/article/${postId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch post data');
            }

            const postData = await response.json();

            setTitle(postData.title);
            setContent(postData.content);
            setRegion(postData.regionId);
            setSubCategory(postData.industryDetailId);
        } catch (error) {
            console.error('Error fetching post data:', error);
        }
    };

    useEffect(() => {
        if (postId) {
            fetchPostData();
        }
    }, [postId]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handlePostSubmit = async () => {
        const postData = {
            regionId: region,
            memberId: memberId,
            industryDetailId: subCategory,
            title: title,
            content: content,
        };

        try {
            const response = await fetch(`https://j11b107.p.ssafy.io/api/article/${articleId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit post');
            }

            const result = await response.json();
            console.log('Post updated successfully:', result);

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
