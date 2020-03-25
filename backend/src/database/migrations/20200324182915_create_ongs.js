exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary(); //Define que o id é a chave primária.
        table.string('name').notNullable(); //Não pode ser null.
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //, 2 -> Tamanho do texto.
    });
};

// Método utilizado para desfazer alterações caso o método acima dê algum tipo de erro.
exports.down = function (knex) {
    return knex.schema.dropTable('ongs');
};
