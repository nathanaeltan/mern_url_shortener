import { Model } from "mongoose";
import { Url } from "../../models/url.model";
import {UrlService} from "../../services/url.service";

const mockModel = {
  findOne: jest.fn(),
  create: jest.fn(),
} as unknown as Model<Url>;

describe("UrlService", () => {
  let urlService: UrlService;

  beforeEach(() => {
    jest.clearAllMocks(); 
    urlService = new UrlService(mockModel);
  });

  describe("create", () => {
    it("should create a new URL", async () => {
      const mockUrl: Url = {
        urlId: "mockUrlId",
        longUrl: "http://example.com",
        shortUrl: "http://localhost:5001/url/mockUrlId",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (mockModel.findOne as jest.Mock).mockResolvedValue(null);
      (mockModel.create as jest.Mock).mockResolvedValue(mockUrl);

      const result = await urlService.create("http://example.com");
      expect(result).toEqual(mockUrl);
    });


    it("should throw an error if any error occurs during create operation", async () => {
      (mockModel.findOne as jest.Mock).mockRejectedValue(new Error("Database error"));

      await expect(urlService.create("http://example.com")).rejects.toThrowError();
    });
  });

  describe("findUrlByUrlId", () => {
    it("should find URL by URL ID", async () => {
      const mockUrl: Url = {
        urlId: "mockUrlId",
        longUrl: "http://example.com",
        shortUrl: "http://localhost:5001/url/mockUrlId",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (mockModel.findOne as jest.Mock).mockResolvedValue(mockUrl);

      const result = await urlService.findUrlByUrlId("mockUrlId");
      expect(result).toEqual(mockUrl.longUrl);
    });

    it("should return null if URL not found", async () => {
      (mockModel.findOne as jest.Mock).mockResolvedValue(null); 
      const result = await urlService.findUrlByUrlId("nonExistentId");
      expect(result).toBeNull();
    });

  });
});