
interface ContentListProps {
    contentType: string;
}

export default function ContentList({ contentType } : ContentListProps) {

    return (
        <div>
            {contentType === 'post' ? (
                <div>
                    게시글 목록
                </div>
            ) : contentType === 'scrap' ? (
                <div>스크랩 목록</div>
            ) : (
                <div>매물 찜 목록</div>
            )}
        </div>
    );
}