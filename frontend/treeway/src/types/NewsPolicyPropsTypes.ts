export type NewsListProps = {
  newsData: NewsItem[];
};

export type NewsItem = {
  NewsClass: string;
  Title: string;
  Content: string;
  Time: string;
  URL: string;
  ViewCount: number;
  ScrapCount: number;
  isScrap: boolean;

  // 서버에서 넘어오는 예상 데이터
  // id: number;
  // title: string;
  // createdAt: string;
  // content: string;
  // industryDetailId: string;
  // region: string;
  // linkUrl: string;
  // viewCount: number;
  // scrapCount: number;
  // isScrap: boolean;
};

export type PolicyListProps = {
  policyData: PolicyItem[];
}

export type PolicyItem = {
  Project: string;
  Region: string;
  Field: string;
  Affiliation: string;
  Business_eligibility: string;
  Target: string;
  Start_date: string;
  End_date: string;
  URL: string;
  ViewCount: number;
  ScrapCount: number;
  isScrap: boolean;

  // 서버에서 넘어오는 예상 데이터
  // id: number;
  // title: string;
  // createdAt: string;
  // content: string;
  // industryDetail: string;
  // region: string;
  // policyStatus: string;
  // linkUrl: string;
  // viewCount: number;
  // scrapCount: number;
  // isScrap: boolean;
};
