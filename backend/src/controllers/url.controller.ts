import { Request, Response } from "express";
import isValidUrl from "../utils/isValidUrl";

export const shortenUrlHandler = (req: Request, res: Response) => {
    const {longUrl} =  req.body;
    if(!isValidUrl(longUrl)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid URL submitted',
        })
    }
    
}