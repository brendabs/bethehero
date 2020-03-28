const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to crate a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD4",
            email: "contato@hotmail.com",
            whatsapp: "1234567891",
            city: "Lagoa Formosa",
            uf: "MG"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});