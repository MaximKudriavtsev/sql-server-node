import express from 'express';
import google from 'googleapis';
import mysql from 'mysql';

import { SERVER, NAME, USERNAME, PASSWORD, PORT, DATABASE } from './logins';

const app = express();
const connection = mysql.createConnection({
  host     : SERVER,
  user     : USERNAME,
  password : PASSWORD,
  database : DATABASE
});
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));