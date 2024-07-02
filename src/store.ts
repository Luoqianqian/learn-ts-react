import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./starter/09-rtk/counterSlice.tsx";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

// getting the  state type
// export type RootState = ReturnType<typeof rootReducer>
// give the type a different name like RootState to prevent confusion
export type RootState = ReturnType<typeof store.getState>;

// getting the dispatch type
export type  AppDispatch = typeof store.dispatch;