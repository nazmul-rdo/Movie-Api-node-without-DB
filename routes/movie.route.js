const router = require('express').Router();

// const { dummyMovies } = require('../models/movies.model');

const  {moviesList, moviesSave, MoviesUpdate, MoviesDelete}  = require('../controllers/movies.controller');

router.get('/', moviesList);
router.post('/', moviesSave);

router.put('/:id', MoviesUpdate);


router.delete('/:id', MoviesDelete);


module.exports = router;