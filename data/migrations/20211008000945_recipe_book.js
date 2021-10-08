
exports.up = async function (knex) {
  await knex.schema
		.createTable("recipes", (table) => {
			table.increments("recipe_id")
			table.string("recipe_name", 128).notNullable()
			table.string("created_at")
		})

		.createTable("recipe_steps", (table) => {
			table.increments("steps_id");
			table.integer("steps_amount").unsigned().notNullable();
			table.string("steps_instructions").unsigned().notNullable();
			table
				.integer("recipe_id")
				.unsigned()
				.notNullable()
				.references("recipe_id")
				.inTable("recipes");
		})

		.createTable("ingredients", (table) => {
			table.increments("ingredient_id");
			table.string("ingredient_name").unsigned().notNullable();
		})

		.createTable("recipe_step_ingredients", (table) => {
			table.increments("quantity_id");
			table.decimal("quantity", null).unsigned().notNullable();
			table
				.integer("ingredient_id")
				.unsigned()
				.notNullable()
				.references("step_id")
				.inTable("ingredients");
			table
				.integer("steps_id")
				.unsigned()
				.notNullable()
				.references("step_id")
				.inTable("recipe_steps");
		});
    
   
};
    
exports.down = async function (knex) {
  await knex.schema
		.dropTableIfExists('recipes')
		.dropTableIfExists('recipe_steps')
		.dropTableIfExists('recipe_step_ingredients')
		.dropTableIfExists('ingredients')
};
