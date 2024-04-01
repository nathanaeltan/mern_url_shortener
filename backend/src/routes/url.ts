import express from "express";
import { shortenUrlHandler } from "../controllers/url.controller";

const router = express.Router();


router.post("/shorten", shortenUrlHandler)
export default router;