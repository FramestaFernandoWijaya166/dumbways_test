const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_dumbways'
  });
  
connection.connect((err) => {
    if (err) throw err;
    console.log('Database Terhubung!');
  });

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    let sql = "SELECT * FROM books";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('user_index', {
            title: 'CRUD Dumbways',
            books: rows
        });
    });
});

app.listen(3000, () => {
    console.log('Server berjalan pada port 3000...');
});

