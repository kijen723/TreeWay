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
  imgSrc?: string;
  viewCount: number;
  scrapCount: number;
  isScrap: boolean;

  // 서버에서 넘어오는 예상 데이터
  // id: number;
  // title: string;
  // author: string;
  // createdAt: string;
  // industryDetail: string;
  // region: string;
  // viewCount: number;
  // scrapCount: number;
  // isScrap: boolean;
  // imgSrc: [
  //   string
  // ]
};
