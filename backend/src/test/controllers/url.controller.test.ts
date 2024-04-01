import request from "supertest";
import app from "../../app";
import { Request, Response } from "express";
import { getAllUrls, getUrl } from "../../controllers/url.controller";
import { Url } from "../../models/url.model";
const findAllExpectedValues = [
    {
      urlId: "123",
      longUrl: "http://example.com",
      shortUrl: "http://short.example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      urlId: "456",
      longUrl: "http://example2.com",
      shortUrl: "http://short2.example.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]
jest.mock("../../services/url.service", () => ({
  __esModule: true,
  default: {
    async findAllUrls(): Promise<Url[]> {
      return findAllExpectedValues;
    },
  },
}));
describe("shortenUrlHandler", () => {
  it("Should return 400 for invalid URL", async () => {
    const invalidUrl = "invalid-url";
    const response = await request(app)
      .post("/url/shorten")
      .send({ longUrl: invalidUrl });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      message: "Invalid URL submitted",
    });
  });
});

describe("getUrl", () => {
  it("Should return 400 if URL id is missing", async () => {
    const mockRequest = { params: {} } as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await getUrl(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      message: "Missing URL Id",
    });
  });
});

describe("getAllUrls", () => {
  it("should return all URLs", async () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await getAllUrls(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      urls: findAllExpectedValues,
    });
  });
});
