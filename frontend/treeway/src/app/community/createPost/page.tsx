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

// base64 -> File 변환
export const b64toFile = (b64Data: string, filename: string) => {
  const bstr = atob(b64Data);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n > 0) {
    n -= 1;
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: 'image/png' });
};

const extractBase64Data = (imgSrc: string) => {
  const base64Pattern = /^data:image\/(png|jpeg|jpg);base64,/;
  if (base64Pattern.test(imgSrc)) {
    return imgSrc.replace(base64Pattern, '');
  }
  return null;
};

export default function CreatePost() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [region, setRegion] = useState(0); 
    const [subCategory, setSubCategory] = useState(0); 
    const [files, setFiles] = useState<File[]>([]);

    const memberId = useSelector((state :RootState) => state.auth.memberId);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const extractImageSources = (htmlContent: string): string[] => {
        const imgSrcArray: string[] = [];
        const imgTagRegex = /<img.*?src=["'](.*?)["']/g;
        let match;

        while ((match = imgTagRegex.exec(htmlContent)) !== null) {
            imgSrcArray.push(match[1]);
        }

        return imgSrcArray;
    };

    const handlePostSubmit = async () => {
        const postData = {
            regionId: region,
            memberId: memberId,
            industryDetailId: subCategory,
            title: title,
            content: content,
        };

        const formData = new FormData();
        formData.append('articleRequest', JSON.stringify(postData));

        const imageSrcArray = extractImageSources(content);
        const convertedFiles = imageSrcArray.map((src, index) => {
            const base64Data = extractBase64Data(src);
            if (base64Data) {
                return b64toFile(base64Data, `image${index}.png`);
            }
            return null;
        }).filter(file => file !== null) as File[];

        if (convertedFiles.length > 0) {
            convertedFiles.forEach(file => formData.append('files', file));
        } else {
            formData.append('files', new Blob(), 'emptyFile');
        }

        let updatedContent = content;
        imageSrcArray.forEach((src, index) => {
            updatedContent = updatedContent.replace(src, `[image${index}]`);
        });

        formData.set('articleRequest', JSON.stringify({ ...postData, content: updatedContent }));

        try {
            const response = await fetch('https://j11b107.p.ssafy.io/api/article', {
                method: 'POST',
                body: formData,
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
