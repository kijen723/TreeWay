'use client';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import {
  recommandIndustry,
  recommandRegion,
  recommandOverall,
} from '../api/recommandApi';

interface overallData {
  businessHours: number;
  regionCode: number;
  budget: number;
  industry_id: number;
  industry_detail_id: number;
}

interface regionData {
  businessHours: number;
  selectedSubCategory: number;
  budget: number;
}

interface industryData {
  businessHours: number;
  regionCode: number;
  budget: number;
}

export const useRecommandOverall = (
  options?: UseMutationOptions<unknown, Error, overallData>
) => {
  return useMutation<unknown, Error, overallData>({
    mutationFn: ({
      businessHours,
      regionCode,
      budget,
      industry_id,
      industry_detail_id,
    }) => {
      return recommandOverall(
        businessHours,
        regionCode,
        budget,
        industry_id,
        industry_detail_id
      );
    },
    onSuccess: (data, variables, context) => {
      console.log('Successfully data:', data);

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      console.error('Error:', error);
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
  });
};

export const useRecommandRegion = (
  options?: UseMutationOptions<unknown, Error, regionData>
) => {
  return useMutation<unknown, Error, regionData>({
    mutationFn: ({ businessHours, selectedSubCategory, budget }) => {
      return recommandRegion(businessHours, selectedSubCategory, budget);
    },
    onSuccess: (data, variables, context) => {
      console.log('Successfully data:', data);

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      console.error('Error:', error);
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
  });
};

export const useRecommandIndustry = (
  options?: UseMutationOptions<unknown, Error, industryData>
) => {
  return useMutation<unknown, Error, industryData>({
    mutationFn: ({ businessHours, regionCode, budget }) => {
      return recommandIndustry(businessHours, regionCode, budget);
    },
    onSuccess: (data, variables, context) => {
      console.log('Successfully data:', data);

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      console.error('Error:', error);
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
  });
};
