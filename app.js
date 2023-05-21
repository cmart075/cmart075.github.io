const express = require("express");
const app = express();
const path = require('path');
const favicon = require('serve-favicon');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, 'logo', '/favicon.ico')));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})