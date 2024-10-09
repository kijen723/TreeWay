import MyPostList from "./MyPostList";
import MySalesItemList from "./MySalesItemList";
import MyScrapList from "./MyScrapList";

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
                <div>
                    <MyScrapList />
                </div>
            ) : (
                <div>
                    <MySalesItemList />
                </div>
            )}
        </div>
    );
}