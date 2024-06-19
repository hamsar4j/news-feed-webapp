const path = require("path");
const dbPath = path.resolve(__dirname, "db/mydb.sqlite");

// sql query builder
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

// create table after checking if it already exists
knex.schema
  .hasTable("articles")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("articles", (t) => {
          t.increments("id").primary();
          t.string("title");
          t.string("summary");
          t.string("date");
          t.string("publisher");
        })
        .then(() => {
          console.log("articles table created");
        })
        .catch((error) => {
          console.error(`There was an error creating the table: ${error} `);
        });
    }
  })
  .then(() => {
    console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

// to display data in db articles table
knex
  .select("*")
  .from("articles")
  .then((data) => console.log("data", data))
  .catch((err) => console.log(err));

module.exports = knex;
