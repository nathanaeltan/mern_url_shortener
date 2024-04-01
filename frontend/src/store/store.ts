import { configureStore } from "@reduxjs/toolkit";
import shortUrlSlice from "./short-url-slice";

export const store = configureStore({
    reducer: {
        shortUrl: shortUrlSlice,
    },  
  });

  export default store
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch;