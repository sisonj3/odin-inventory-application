#! /usr/bin/env node

const { Client } = require('pg');

const SQL = `
    CREATE TABLE IF NOT EXISTS items (
       id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
       name VARCHAR (255),
       typeID INTEGER,
       price FLOAT
   );
  
   CREATE TABLE IF NOT EXISTS type (
       id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
       name VARCHAR (255)
   );
  
   INSERT INTO items (name, typeID, price)
   VALUES
       ('Banana', 1, 4.99),
       ('Laptop', 2, 499.99),
       ('Eragon', 3, 9.99);
      
   INSERT INTO type (name)
   VALUES
       ('Food'),
       ('Electronics'),
       ('Books');`
;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://nosis:rAgn4r0k@localhost:5432/inv_app",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();