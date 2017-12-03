import express from 'express';
import google from 'googleapis';
import mysql from 'mysql';

import { SERVER, DATABASE_NAME, USERNAME, PASSWORD, PORT, DATABASE } from './src/logins';

const app = express();
// for MySQL server connection 
const connection = mysql.createConnection({
  host     : SERVER,
  user     : USERNAME,
  password : PASSWORD,
  database : DATABASE
});
connection.connect();

app.get('/', (req, res) => {
  res.send(__dirname + '/index.html');
});

app.get('/get', (req, res) => {
  // for MySQL server SELECT 
  connection.query('SELECT * FROM `221241`', function (error, results, fields) {
    if (error) throw error;
    let summ = 0;
    let comp = 1;
    results.forEach(elem => {
      summ += elem.value;
      comp *= elem.value;
    });
    res.send(JSON.stringify({
      'SELECT * FROM `221241`:': results,
      'summa:': summ,
      'composition': comp,
    }));
  });
});

app.listen(3000, () => console.log('App listening on port 3000!'));