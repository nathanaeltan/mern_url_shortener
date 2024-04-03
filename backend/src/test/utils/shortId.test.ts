import generateShortUrl from "../../utils/shortId";

describe("generateShortUrlCode", () => {
  it("should generate a short URL code with the specified length", () => {
    const shortUrlCode = generateShortUrl();

    expect(shortUrlCode.length).toBe(6);

    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    expect(alphanumericRegex.test(shortUrlCode)).toBe(true);
  });

  it("should generate unique short URL codes", () => {
    const generatedCodes = new Set();
    const numCodesToGenerate = 1000;
    for (let i = 0; i < numCodesToGenerate; i++) {
      const shortUrlCode = generateShortUrl();
      generatedCodes.add(shortUrlCode);
    }

    expect(generatedCodes.size).toBe(numCodesToGenerate);
  });
});
