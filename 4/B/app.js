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
    let sqlC = "SELECT * FROM categories";
    let sqlB = "SELECT * FROM books";
    let query = connection.query(sqlC, (err, rowsC) => {
        if(err) throw err;
        let query = connection.query(sqlB, (err, rowsB) => {
            if(err) throw err;
            res.render('index', {
                title: 'CRUD Dumbways',
                categories: rowsC,
                books: rowsB
            });
        });
    });
});

app.get('/tambah-kategori', (req, res) => {
    res.render('tambah-kategori', {
        title: 'CRUD Dumbways'
    });
});

app.get('/tambah-buku', (req, res) => {
    let sqlC = "SELECT * FROM categories";
    let query = connection.query(sqlC, (err, rowsC) => {
        if(err) throw err;
        res.render('tambah-buku', {
            title: 'CRUD Dumbways',
            categories: rowsC
        });
    });
});

app.post('/save-kategori', (req, res) => {
    let data = {name: req.body.name,}
    let sql = "INSERT INTO categories SET ?";
    let query = connection.query(sql, data, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.post('/save-buku', (req, res) => {
    let data = {name: req.body.name, category_id: req.body.category_id, stok: req.body.stok, image: req.body.gambar}
    let sql = "INSERT INTO books SET ?";
    let query = connection.query(sql, data, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/edit-buku/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    let sql = `SELECT * FROM books WHERE id = ${bookId}`;
    let query = connection.query(sql, (err, result) => {
        if(err) throw err;
        res.render('edit-buku', {
            title: 'CRUD Dumbways',
            book: result[0]
        });
    }); 
});

app.post('/update-buku', (req, res) => {
    const bookId = req.body.id;
    let sql = "UPDATE books SET name='" +req.body.name+ "', stok='" +req.body.stok+ "', image='" +req.body.gambar+"' WHERE id = " +bookId;
    let query = connection.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/delete-buku/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    let sql = `DELETE FROM books WHERE id = ${bookId}`;
    let query = connection.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    }); 
});

app.get('/delete-kategori/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    let sql = `DELETE FROM categories WHERE id = ${categoryId}`;
    let query = connection.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    }); 
});

app.listen(3000, () => {
    console.log('Server berjalan pada port 3000...');
});

