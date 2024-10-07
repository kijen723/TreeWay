'use client';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { recommandRegion } from '../api/recommandApi';

interface regionData {
  businessHours: number;
  selectedSubCategory: number;
  budget: number;
}

export const useRecommandRegion = (
  options?: UseMutationOptions<unknown, Error, regionData>
) => {
  return useMutation<unknown, Error, regionData>({
    mutationFn: ({ businessHours, selectedSubCategory, budget }) => {
      return recommandRegion(businessHours, selectedSubCategory, budget);
    },
    onSuccess: (data, variables, context) => {
      console.log('Successfully data:', data);
      console.log('Successfully variables:', variables);
      console.log('Successfully context:', context);

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
    ...options,
  });
};
