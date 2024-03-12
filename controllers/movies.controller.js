
const { dummyMovies } = require('../models/movies.model');
const { v4: uuidv4 } = require('uuid');

const moviesList = (req, res) => {
    res.json(dummyMovies);
}

const moviesSave = (req, res) => {
    const { title, genere, rating, year, desc } = req.body;
    const newMovie = {
        id: uuidv4(),
        title: title,
        genere: genere,
        rating: rating,
        year: year,
        desc: desc,
    }
    dummyMovies.push(newMovie);
    res.json(dummyMovies);
}

const MoviesUpdate = (req, res) => {
    const { id } = req.params;

    const { title, genere, rating, year, desc } = req.body;

    dummyMovies.filter(m => m.id === id).forEach(m => {
        m.title = title;
        m.genere = genere;
        m.rating = rating;
        m.year = year;
        m.desc = desc;
    })
    res.json(dummyMovies);
}

const MoviesDelete = (req, res) => {
    const { id } = req.params;
    dummyMovies.filter(m => m.id === id).forEach(m => {
        dummyMovies.splice(dummyMovies.indexOf(m), 1);
    })
    res.json(dummyMovies);
   
}

module.exports = {
    moviesList,
    moviesSave,
    MoviesUpdate,
    MoviesDelete
};

