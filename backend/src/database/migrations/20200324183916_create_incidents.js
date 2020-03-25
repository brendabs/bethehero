exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); //Incrementa ao longo da criação de incidentes.

        table.string('title').notNullable(); //Não pode ser null.
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //Relacionamento com a ONG responsável pela criação do incidente.

        table.foreign('ong_id').references('id').inTable('ongs'); //Coluna ONG_ID referencia a coluna ID dentro da tabela ONG.
    });
};

exports.down = function (knex) {
    reuturn.schema.dropTable('incidents');
};
