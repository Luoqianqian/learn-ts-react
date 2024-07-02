import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type counterStatusType = 'active' | 'inactive' | 'pending...';

type counterType = {
    count: number,
    status: counterStatusType,
}

const initialState: counterType = {
    count: 0,
    status: 'pending...'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
          state.count += 1;
        },
        decrement: (state) => {
          state.count -= 1;
        },
        reset: (state) => {
          state.count = 0;
        },
        setStatus: (state, action: PayloadAction<counterStatusType>) => {
          state.status = action.payload;
        },
      },
})

export const { increment, decrement, reset, setStatus } = counterSlice.actions;

export default counterSlice.reducer