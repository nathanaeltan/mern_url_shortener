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