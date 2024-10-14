import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// State 타입 정의
export interface SideControl {
  value: boolean;
}

// 초기 상태 정의
const initialState: SideControl = {
  value: false,
};

const sidecontrolSlice = createSlice({
  name: 'sidecontrol',
  initialState,
  reducers: {
    changeSideControl(state, action){
        state.value = action.payload;
    }
  },
})

export const { changeSideControl } = sidecontrolSlice.actions
export default sidecontrolSlice.reducer