import { useQuery } from '@tanstack/react-query';
import {
  analyzeDetailResullt,
  analyzeTotalResullt,
} from '../api/analyzeHistoryApi';

export const useAnalyzeTotalResullt = (memberId: number) => {
  // const token = useSelector((state: RootState) => state.auth.accessToken);
  return useQuery({
    queryKey: ['memberId', memberId],
    queryFn: async () => {
      if (!memberId) {
        throw new Error('Missing memberId');
      }
      const details = await analyzeTotalResullt(memberId);

      console.log(details);
      return details;
    },
  });
};

export const useAnalyzeDetailResullt = (
  regionId: number,
  industryDetailId: number
) => {
  return useQuery({
    queryKey: ['regionId', regionId],
    queryFn: async () => {
      if (!regionId && !industryDetailId) {
        throw new Error('Missing Error');
      }
      const details = await analyzeDetailResullt(regionId, industryDetailId);

      console.log(details);
      return details;
    },
  });
};
