exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('VIN');
    tbl.string('make', 255).notNullable();
    tbl.string('model').notNullable();
    tbl.integer('mileage').notNullable();
    tbl.string('transmission');
    tbl.string('status');

    //adds created_at and updated_at columns
    tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};