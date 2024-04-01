import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


export const shortenUrl = createAsyncThunk("shortUrl/shortenUrl", (longUrl: string) => {
    return axios.post("http://localhost:5001/url/shorten", {longUrl}).then(response => response.data).catch(err => {
        return err.response.data;
    })
});

export const getAllUrls = createAsyncThunk("shortUrl/getAllUrls", () => {
    return axios.get("http://localhost:5001/url").then(response => response.data);
});