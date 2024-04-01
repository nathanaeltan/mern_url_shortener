import { Model } from "mongoose";
import urlModel, { Url } from "../models/url.model";
import {nanoid} from "nanoid";
const BASE_URL = process.env.BASE_URL || "http://localhost:5001/url"
export class UrlService {
  private readonly model: Model<Url>;

  constructor(model: Model<Url>) {
    this.model = model;
  }

  async create(longUrl: string): Promise<Url | null> {
    try {
      const maxRetryCount = 3
      let retryCount = 0;
      let shortUrlid = nanoid();
      while (retryCount < maxRetryCount) {
        const existingUrl = await this.findUrlByUrlId(shortUrlid);
        if(!existingUrl) {
            const shortUrl = await this.model.create({
                urlId: shortUrlid,
                longUrl: longUrl,
                shortUrl: `${BASE_URL}/${shortUrlid}`,

            });
            return shortUrl;
        } else {
            shortUrlid = nanoid();
            retryCount++;
        }
      }
      return null;
    } catch (error) {
      throw new Error(`@Error in Creating URL ${error}`);
    }
  }

  async findUrlByUrlId(id: string): Promise<string | null> {
    const url = await this.model.findOne({
      urlId: id,
    });
    if(!url) {
      return null;
    }
    return url?.longUrl;
  }

  async findAllUrls(): Promise<Url[]> {
    return await this.model.find({}).select('urlId longUrl shortUrl createdAt').sort({createdAt: -1});
  }
}

const urlService = new UrlService(urlModel);

export default urlService;
