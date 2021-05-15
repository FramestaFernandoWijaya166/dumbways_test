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
    database: 'web_course'
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
    let sqlAut = "SELECT * FROM author";
    let sqlCou = "SELECT * FROM course";
    let sqlCon = "SELECT * FROM content";
    let query = connection.query(sqlAut, (err, rowsAut) => {
        if(err) throw err;
        let query = connection.query(sqlCou, (err, rowsCou) => {
            if(err) throw err;
            let query = connection.query(sqlCon, (err, rowsCon) => {
                if(err) throw err;
                res.render('index', {
                    title: 'Dumb-Course',
                    authors: rowsAut,
                    course: rowsCou,
                    content: rowsCon
                });
            });
        });
    });
});

app.get('/tambah-author', (req, res) => {
    res.render('tambah-author', {
        title: 'Dumb-Course'
    });
});

app.get('/tambah-course', (req, res) => {
    let sqlA = "SELECT * FROM author";
    let query = connection.query(sqlA, (err, rowsA) => {
        if(err) throw err;
        res.render('tambah-course', {
            title: 'Dumb-Course',
            author: rowsA
        });
    });
});

app.get('/tambah-content/:courseId', (req, res) => {
    const courseId = req.params.courseId;
    res.render('tambah-content', {
        title: 'Dumb-Course',
        course: courseId,
    });
});

app.post('/save-author', (req, res) => {
    let data = {name: req.body.name,}
    let sql = "INSERT INTO author SET ?";
    let query = connection.query(sql, data, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.post('/save-course', (req, res) => {
    let data = {name: req.body.name, thumbnail: req.body.thumbnail, id_author: req.body.id_author, duration: req.body.duration, description: req.body.description}
    let sql = "INSERT INTO course SET ?";
    let query = connection.query(sql, data, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.post('/save-content', (req, res) => {
    let data = {name: req.body.name, video_link: req.body.video_link, type: req.body.type, id_course: req.body.id_course}
    let sql = "INSERT INTO content SET ?";
    let query = connection.query(sql, data, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});

app.get('/course/:courseId', (req, res) => {
    const courseId = req.params.courseId;
    let sql = `SELECT * FROM content WHERE id_course = ${courseId}`;
    let query = connection.query(sql, (err, result) => {
        if(err) throw err;
        res.render('course', {
            title: 'Dumb-Course',
            course: courseId,
            content: result
        });
    }); 
});

app.listen(3000, () => {
    console.log('Server berjalan pada port 3000...');
});

