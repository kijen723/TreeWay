export type NewsListProps = {
  newsData: NewsItem[];
};

export type NewsItem = {
  id: number;
  regionId: number;
  regionName: string;
  title: string;
  content: string;
  createdAt: string;
  url: string;
  viewCount: number;
  scrapCount: number;
  isScrap?: boolean;
};

export type PolicyListProps = {
  policyData: PolicyItem[];
}

export type PolicyItem = {
  id: number,
  regionId: number,
  regionName: string,
  title: string,
  category: string,
  host: string,
  eligibility: string,
  target: string,
  url: string,
  startDate: string,
  endDate: string,
  viewCount: number,
  scrapCount: number,
  isScrap?: boolean
};
