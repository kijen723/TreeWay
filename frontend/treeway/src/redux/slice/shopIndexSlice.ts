import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// State 타입 정의
export interface ShopIndex {
  value: number;
}

// 초기 상태 정의
const initialState: ShopIndex = {
  value: 0,
};

const shopIndexSlice = createSlice({
  name: "shopIndex",
  initialState,
  reducers: {
    changeShopIndex(state, action :PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { changeShopIndex } = shopIndexSlice.actions;
export default shopIndexSlice.reducer;
