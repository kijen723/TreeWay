export type PostListProps = {
  currentPage: number;
  postsPerPage: number;
  postList: Array<PostType>;
};

export type PostType = {
  // 서버에서 넘어오는 데이터
  id: number;
  memberId: number;
  memberName: string;
  industryDetailId: number;
  industryDetailName: string;
  regionId: number;
  regionName: string;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  viewCount: number;
  isScrap?: boolean;
};

export type CommentType = {
  id: number;
  memberId: number;
  memberName: string;
  articleId: number;
  content: string;
  createdAt: string;
};
