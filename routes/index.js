const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// Get movies page

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((response) => {
      res.render("movies", {
        eachMovie: response,
      });
      console.log(response);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:idMovie", (req, res, next) => {
  const { idMovie } = req.params;

  MovieModel.findById(idMovie)
    .then((response) => {
      console.log(response);
      res.render("moviedetail", {
        movieDetail: response,
      });
      
    })
    .catch((error) => {
      next(error);
    });
});

// send all data movies

module.exports = router;
