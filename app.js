const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


const moviesRoutes = require('./routes/movie.route')

app.use('/movies', moviesRoutes)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((req, res) => {
    res.status(404).send('Page Not Found');
})

module.exports = app;