import { Request, Response } from "express";
import isValidUrl from "../utils/isValidUrl";
import urlService from "../services/url.service";

export const shortenUrlHandler = async (req: Request, res: Response) => {
    const {longUrl} =  req.body;
    if(!isValidUrl(longUrl)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid URL submitted',
        })
    }
    const shortUrl = await urlService.create(longUrl);
    return res.status(201).json({
        success: true,
        url: shortUrl,
    })
}

export const getUrl = async (req: Request, res: Response) => {
    const urlId = req.params.id;
    if(!urlId) return res.status(400).json({
        success: false,
        message: 'Missing URL Id',
    });
    const url = await urlService.findUrlByUrlId(urlId);
    if(!url) {
        return res.status(404).json({
            success: false,
            message: 'URL not found',
        });
    }
    return res.redirect(url);
}

export const getAllUrls = async (req: Request, res: Response) => {
    const urls = await urlService.findAllUrls();
    return res.status(200).json({
        success: true,
        urls,
    })
}