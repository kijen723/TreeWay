import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// State 타입 정의
interface CounterState {
  value: number;
}

// 초기 상태 정의
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
      console.log(state.value);
    },
    decrement(state) {
      state.value--
      console.log(state.value);
    },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer