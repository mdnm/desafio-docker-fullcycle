const mysql = require('mysql');
const { config } = require('./config');

async function query(sql) {
  const conn = mysql.createConnection(config);

  const queryPromise = new Promise((resolve, reject) => {
    conn.query(sql, function (error, results) {
      if (error) reject(error);

      resolve(results)
    })
  })

  const queryResults = await queryPromise;

  conn.end();
  return queryResults;
}

const Repository = {
  query
}

module.exports = { Repository }