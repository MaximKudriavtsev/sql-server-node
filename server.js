import express from 'express';
import google from 'googleapis';
import mysql from 'mysql';

import { SERVER, NAME, USERNAME, PASSWORD, PORT, DATABASE } from './src/logins';

const app = express();
const connection = mysql.createConnection({
  host     : SERVER,
  user     : USERNAME,
  password : PASSWORD,
  database : DATABASE
});
connection.connect();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/get', (req, res) => {
  connection.query('SELECT * from test', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(JSON.stringify(results));
    // res.json(result);
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));