import MyPostList from "./MyPostList";
import styles from "../../page.module.scss"

interface ContentListProps {
    contentType: string;
}

export default function ContentList({ contentType } : ContentListProps) {

    return (
        <div>
            {contentType === 'post' ? (
                <div>
                    <MyPostList />
                </div>
            ) : contentType === 'scrap' ? (
                <div>스크랩 목록</div>
            ) : (
                <div>매물 찜 목록</div>
            )}
        </div>
    );
}