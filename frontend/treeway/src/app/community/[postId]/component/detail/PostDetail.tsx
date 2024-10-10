import styles from '@/app/community/[postId]/page.module.scss';
import { ArticleAttachedFile } from '@/types/CommunityPropsTypes';

interface PostContentProp {
    postContent: string; 
    postImageList: ArticleAttachedFile[];
}

export default function PostDetail({ postContent, postImageList }: PostContentProp) {

    const replaceImagePlaceholders = (content: string, imageList: ArticleAttachedFile[]) => {
        return content.replace(/\[image(\d+)\]/g, (match, index) => {
            const imgIndex = parseInt(index, 10);
            if (imageList[imgIndex]) {
                return `https://j11b107.p.ssafy.io/api/files/download/${imageList[imgIndex].id}`;
            }
            return match;
        });
    };

    const updatedContent = replaceImagePlaceholders(postContent, postImageList);

    return (
        <div className={styles.postDetail}>
            <div className={styles.postBlock}>
                <div dangerouslySetInnerHTML={{ __html: updatedContent }} />
            </div>
        </div>
    );
}
