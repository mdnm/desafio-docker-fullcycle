const express = require('express');
const { Repository } = require('./repository');
const app = express();

app.get('/', async (_, res) => {
  const selectSql = `SELECT * FROM people`;
  const people = await Repository.query(selectSql);

  const title = '<h1>Full Cycle Rocks!</h1>';
  const list = `
    <ul>
      ${people.map(p => `<li>${p.name}</li>`).join('')}
    </ul>
  `;

  res.send(title + list);
});

app.listen(3000, () => {
  console.log('Running on port 3000');

  const createSql = `
    CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id));
  `;
  Repository.query(createSql);

  const insertSql = `
    INSERT INTO people (name) values ('Dina'), ('Wesley'), ('SchoolOfNet'), ('CodeEducation');
  `;
  Repository.query(insertSql);
});
