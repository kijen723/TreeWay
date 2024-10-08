export type trendData = {
  trendAnalysis: { id: number; trendType: string; trendCount: string; sig_CD: number }[];
  keywordAnalysis: { id: number; keyword: string; count: number; sig_CD: number }[];
  newsAnalysis: { id: number; title: string; content: string; date: string; url: string; sig_CD: number }[];
};
