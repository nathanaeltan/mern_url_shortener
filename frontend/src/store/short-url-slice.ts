import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllUrls, shortenUrl } from "../actions/short-url-actions";


type GetAllUrlResponse = {
    success: boolean;
    urls: Url[]
}
type Url = {
    urlId: string;
    longUrl: string;
    shortUrl: string;
    createdAt: string;
}
type CreateURLResponse = {
    success: boolean;
    url: Url
}


type InitialState = {
  loading: boolean;
  shortUrl: string;
  longUrl: string;
  error: string;
  urls: Url[];
};
const initialState: InitialState = {
  loading: false,
  shortUrl: "",
  longUrl: "",
  error: "",
  urls: [],
};

const shortUrlSlice = createSlice({
  name: "shortUrl",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(shortenUrl.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      shortenUrl.fulfilled,
      (state, action: PayloadAction<CreateURLResponse>) => {
        state.loading = false;
        state.shortUrl = action.payload.url.shortUrl;
        state.urls = [action.payload.url, ...state.urls];
      }
    );
    builder.addCase(shortenUrl.rejected, (state, action) => {
      state.loading = false;
      state.shortUrl = "";
      state.error = action.error.message || "something went wrong";
    });

    builder.addCase(getAllUrls.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getAllUrls.fulfilled, (state, action: PayloadAction<GetAllUrlResponse>) => {
        state.loading = false;
        state.urls = action.payload.urls;
    });
    builder.addCase(getAllUrls.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "something went wrong";
      });
  },
});

export default shortUrlSlice.reducer;
