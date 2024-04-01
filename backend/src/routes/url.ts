import express from "express";
import { getAllUrls, getUrl, shortenUrlHandler } from "../controllers/url.controller";

const router = express.Router();

router.get('/', getAllUrls);
router.get("/:id", getUrl);
router.post("/shorten", shortenUrlHandler);

export default router;