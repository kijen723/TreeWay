
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
            ) : contentType === 'news' ? (
                <div>뉴스/정책 목록</div>
            ) : (
                <div>매물 목록</div>
            )}
        </div>
    );
}