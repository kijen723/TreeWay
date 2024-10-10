import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnalyzeDetailState {
  regionId: number;
  industryDetailId: number;
}

const initialState: AnalyzeDetailState = {
  regionId: 0,
  industryDetailId: 0,
};

const analyzeDetailSlice = createSlice({
  name: 'analyzeDetailId',
  initialState,
  reducers: {
    setAnalyzeDetail: (state, action: PayloadAction<AnalyzeDetailState>) => {
      state.regionId = action.payload.regionId;
      state.industryDetailId = action.payload.industryDetailId;
    },
    clearAnalyzeDetail: (state) => {
      state.regionId = 0;
      state.industryDetailId = 0;
    },
  },
});

export const { setAnalyzeDetail, clearAnalyzeDetail } =
  analyzeDetailSlice.actions;
export default analyzeDetailSlice.reducer;
