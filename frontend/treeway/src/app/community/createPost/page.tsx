'use client'

import SideList from '@/app/common/Side/SideList';
import styles from './page.module.scss'
import SmallSortList from '@/app/main/components/SmallSortList';
import TextEditor from './component/TextEditor';
import Button from '@/app/common/Button';
import FormField from '@/app/regist/components/FormField';
import { useState } from 'react';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    
    const handlePostSubmit = () => {
        console.log(title)
        console.log(content)
    }

    return (
        <div className={styles.background}>
            <div>
                <SideList items={<SmallSortList />} />
            </div>
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
                    <div className={styles.textEditorBlock}>
                        <label>내용</label>
                        <TextEditor content={content} onChange={setContent}/>
                    </div>
                    <div className={styles.button}>
                        <Button content="작성" size="medium" colorType="blue" onClick={handlePostSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}