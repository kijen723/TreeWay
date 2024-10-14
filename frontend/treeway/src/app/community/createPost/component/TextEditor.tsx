import styles from '../page.module.scss'
import { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';
import ToolBar from './ToolBar';

// react-quill 빌드 오류 : https://www.datadeveloper.kr/datas/nextjs/view/data2401-12 참고
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

let Quill;
if (typeof window === 'object') {
  Quill = require('react-quill').Quill;
  const ImageResize = require('quill-image-resize-module-react').default;
  Quill.register('modules/imageResize', ImageResize);
}

interface ContentProps {
    content: string
    onChange: (content: string) => void;
}

export default function TextEditor({content, onChange} : ContentProps) {
    const formats: string[] = [
        "header", "size", "font",
        "bold", "italic", "underline", "strike", "blockquote",
        "list", "bullet", "indent", "link", "image",
        "color", "background", "align",
        "script", "code-block", "clean",
    ];

    const modules: {} = useMemo(() => ({
        toolbar: {
            container: "#toolBar"
        },
        imageResize: { 
            modules: ['Resize', 'DisplaySize']
        },
    }), []);

    return (
        <div className={styles.textEditor}>
            <div id="toolBar">
                <ToolBar />
            </div>
            <ReactQuill
                theme="snow"
                value={content}
                modules={modules}
                formats={formats}
                onChange={onChange}
                style={{ height: "45vh" }} />
        </div>
    )

}