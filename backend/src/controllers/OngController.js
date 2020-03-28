const generateUniqueId = require('../utils/generateUniqueId');

const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*'); //Lista todas as ongs.

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //Desestruturação -> Armazena cada dado em uma variável.

        const id = generateUniqueId(); //Cria um ID aleatório de 4 dígitos e converte-os para hexad.

        await connection('ongs').insert({ //Tabela que quero inserir dados.
            id, //Colunas que quero inserir.
            name,
            email,
            whatsapp,
            city,
            uf
        }) //Aguarda todos os dados serem inseridos para depois continuar.

        return response.json({ id });
    }
}