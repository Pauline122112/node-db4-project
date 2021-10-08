
exports.up = async function (knex) {
  await knex.schema
  .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 128).notNullable()
      table.dateTime("created_at").defaultTo(knex.fn.now())
      .createTable('recipe_steps', table => {
          table.increments('steps_id')
          table.integer('steps_amount').unsigned().notNullable()
          table.string('steps_instructions').unsigned().notNullable()
          table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references("recipe_id")
                .inTable("recipes")
      })
      .createTable()
      .createTable()
  })
};

exports.down = function(knex) {
  
};
