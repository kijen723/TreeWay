export type PostListProps = {
  currentPage: number;
  postsPerPage: number;
  postList: Array<PostType>;
};

export type PostType = {
  id: number;
  title: string;
  author: string;
  date: string;
  viewCnt: number;
  imgSrc: string;
  viewCount: number;
  scrapCount: number;
  isScrap: boolean;
};
