import { Request, Response } from "express";
import isValidUrl from "../utils/isValidUrl";
import urlService from "../services/url.service";

export const shortenUrlHandler = async (req: Request, res: Response) => {
  const { longUrl } = req.body;
  if (!isValidUrl(longUrl)) {
    return res.status(400).json({
      success: false,
      message: "Invalid URL submitted",
    });
  }
  try {
    const shortUrl = await urlService.create(longUrl);
    return res.status(201).json({
      success: true,
      url: shortUrl,
    });
  } catch (error) {
    console.error("Error in Shortening URL", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getUrl = async (req: Request, res: Response) => {
  const urlId = req.params.id;
  if (!urlId)
    return res.status(400).json({
      success: false,
      message: "Missing URL Id",
    });
  try {
    const url = await urlService.findUrlByUrlId(urlId);
    if (!url) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }
    return res.redirect(url);
  } catch (error) {
    console.error("Error in Getting URL", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getAllUrls = async (req: Request, res: Response) => {
  try {
    const urls = await urlService.findAllUrls();
    return res.status(200).json({
      success: true,
      urls,
    });
  } catch (error) {
    console.error("Error in Getting URLs", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
