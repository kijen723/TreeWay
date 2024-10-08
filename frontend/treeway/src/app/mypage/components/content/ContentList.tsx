import MyPostList from "./MyPostList";
import MySalesItemList from "./MySalesItemList";

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
                <div>
                    <MySalesItemList />
                </div>
            )}
        </div>
    );
}