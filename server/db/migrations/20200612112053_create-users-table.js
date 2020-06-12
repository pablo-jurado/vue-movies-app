exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").notNullable().primary();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.string("email").notNullable();
    table.text("hashed_password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
