const express = require('express');
const User = require('./User');
const parser = require('body-parser').json();
// const parser = require('body-parser').urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.post('/signup', parser, (req, res) => {
    const { email, phone, name, password } = req.body;
    User.signUp(email, password, name, phone)
    .then(() => res.status(201).send('Thanh cong'))
    .catch(() => res.status(409).send('That bai'));
});

module.exports = app;
