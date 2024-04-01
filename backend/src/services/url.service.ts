import { Model } from "mongoose";
import urlModel, {Url} from "../models/url.model";

class UrlService {
    private readonly model: Model<Url>;

    constructor(model: Model<Url>) {
        this.model = model;
    }

    async create(urlData: Omit<Url, 'createdAt' | 'updatedAt'>): Promise<Url> {
        try {
            const shortUrl = await this.model.create(urlData);
            return shortUrl;
        } catch (error) {
            throw new Error(`@Error in Creating URL ${error}`);
        }
    }

    async findUrlByUrlId(id: string): Promise<Url | null> {
        const url = await this.model.findOne({
            urlId: id,
        });
        return url;
    }
}

const urlService = new UrlService(urlModel);

export default urlService;