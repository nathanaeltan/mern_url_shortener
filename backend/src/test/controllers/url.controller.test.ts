import request from 'supertest';
import app from '../../app';

describe('shortenUrlHandler', () => {
    it('Should return 400 for invalid URL', async () => {
        const invalidUrl = 'invalid-url';
        const response = await request(app)
            .post('/api/url/shorten')
            .send({ longUrl: invalidUrl });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            success: false,
            message: 'Invalid URL submitted',
        });
    })
});