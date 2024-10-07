import { Store } from '@/types/MapType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// State 타입 정의
export interface DumData {
  value: Store[] | null;
}

// 초기 상태 정의
const initialState: DumData = {
  value: null,
};

const dumdataSlice = createSlice({
  name: 'dumdata',
  initialState,
  reducers: {
    changeDumData(state, action){
        state.value = action.payload;
    }
  },
})

export const { changeDumData } = dumdataSlice.actions
export default dumdataSlice.reducer